import { Gratin, Postgres } from 'gratin';
import { join } from 'path';

import config from 'config';

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

gratin.run();
