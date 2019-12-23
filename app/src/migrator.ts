import { Gratin, Postgres } from 'gratin';
import { join } from 'path';
import waitOn from 'wait-on';

import config from 'config';

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
	return await waitOn({
		resources: [`tcp:${config.postgres.host}:${config.postgres.port}`],
		timeout: 30000,
	});
}
