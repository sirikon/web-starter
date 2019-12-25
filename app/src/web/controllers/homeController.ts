import DoggoStore from 'infrastructure/services/doggoStore';
import { BaseContext } from 'koa';
import { injectable } from 'tsyringe';

import Logger from 'logging/logger';

@injectable()
export default class HomeController {
	constructor(
		private logger: Logger,
		private doggoStore: DoggoStore) { }

	public async handle(ctx: BaseContext) {
		const doggos = await this.doggoStore.getDoggos();
		this.logger.info('Many doggos!');
		await ctx.render('home', { doggos });
	}
}
