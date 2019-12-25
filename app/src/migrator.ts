import { Gratin, Postgres } from 'gratin';
import { join } from 'path';
import waitOn from 'wait-on';

import config from 'config';
import logger from 'logging/logger';

export async function migrate(): Promise<void> {
	await waitDatabaseToBeAvailable();
	const gratin = new Gratin({
		migrationsFolder: join(__dirname, '..', 'resources', 'migrations'),
		database: new Postgres({
			host: config.postgres.host,
			port: config.postgres.port,
			database: config.postgres.database,
			username: config.postgres.username,
			password: config.postgres.password,
		}),
	});
	await gratin.run();
}

async function waitDatabaseToBeAvailable(): Promise<void> {
	const host = config.postgres.host;
	const port = config.postgres.port;
	logger.info('Waiting for database to be available', { host, port });
	await waitOn({
		resources: [`tcp:${host}:${port}`],
		timeout: 30000,
	});
	logger.info('Database available', { host, port });
}
