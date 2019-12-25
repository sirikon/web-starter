import Koa from 'koa';
import Measurer from 'logging/measurer';

export default function logging(app: Koa) {
	app.use(async (ctx, next) => {
		const m = ctx.ioc.resolve(Measurer);
		await m.measure('http request', async () => {
			await next();
		});
	});
}
