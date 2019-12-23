import { BaseContext } from 'koa';

import { getDoggos } from 'infrastructure/doggoStore';

export default async function homeController(ctx: BaseContext) {
	const doggos = await getDoggos();
	await ctx.render('home', { doggos });
}
