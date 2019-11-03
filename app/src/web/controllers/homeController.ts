import { BaseContext } from 'koa';

export default async function homeController(ctx: BaseContext) {
	await ctx.render('home');
}
