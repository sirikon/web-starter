import Koa from 'koa';
import Logger from 'logging/logger';
import Measurer from 'logging/measurer';

export default function logging(app: Koa) {
	app.use(async (ctx, next) => {
		const m = ctx.ioc.resolve(Measurer);
		await m.measure('http request', async () => {
			const logger = ctx.ioc.resolve(Logger);
			logger.info('Request starts', { url: ctx.url });
			await next();
		});
	});
}
