import { Pool, PoolClient } from 'pg';

import config from 'config';

const pool = new Pool({
	host: config.postgres.host,
	port: config.postgres.port,
	database: config.postgres.database,
	user: config.postgres.username,
	password: config.postgres.password,
});

export async function usingClient<T>(cb: (client: PoolClient) => Promise<T>): Promise<T> {
	const client = await pool.connect();
	try {
		return await cb(client);
	} finally {
		client.release();
	}
}
