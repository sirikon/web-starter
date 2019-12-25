import { injectable } from 'tsyringe';

import { IDoggo } from 'application/models';
import { usingClient } from 'infrastructure/database/postgres';
import Measurer from 'logging/measurer';

@injectable()
export default class DoggoStore {
	constructor(
		private m: Measurer) { }

	public async getDoggos(): Promise<IDoggo[]> {
		const result = await this.m.measure('select all doggos', async () => {
			return await usingClient(async (db) => {
				return db.query(`SELECT * FROM doggo ORDER BY id`);
			});
		});

		return result.rows.map((row) => {
			return {
				id: row.id,
				name: row.name,
				isGoodBoy: row.is_good_boy,
			};
		});
	}
}
