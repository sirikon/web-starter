import Koa from 'koa';

export default function errorHandler(app: Koa) {
	app.use(async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			let title: string = '';
			let message: string = '';
			title = 'Unexpected error:';
			message = err.stack;
			await ctx.render('error', { title, message });
		}
	});
}
