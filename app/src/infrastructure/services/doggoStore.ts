import { IDoggo } from 'application/models';
import { usingClient } from 'infrastructure/database/postgres';

export async function getDoggos(): Promise<IDoggo[]> {
	const result = await usingClient(async (db) => {
		return db.query(`SELECT * FROM doggo ORDER BY id`);
	});

	return result.rows.map((row) => {
		return {
			id: row.id,
			name: row.name,
			isGoodBoy: row.is_good_boy,
		};
	});
}