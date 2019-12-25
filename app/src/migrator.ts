import { Gratin, Postgres } from 'gratin';
import { join } from 'path';
import waitOn from 'wait-on';

import { JobContext } from 'application/models';
import config from 'config';
import Logger from 'logging/logger';
import { container } from 'tsyringe';

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
	const logger = getLogger();
	const host = config.postgres.host;
	const port = config.postgres.port;
	logger.info('Waiting for database to be available', { host, port });
	await waitOn({
		resources: [`tcp:${host}:${port}`],
		timeout: 30000,
	});
	logger.info('Database available', { host, port });
}

function getLogger(): Logger {
	const childContainer = container.createChildContainer();
	childContainer.register(JobContext, { useValue: new JobContext('migrator') });
	return childContainer.resolve(Logger);
}
