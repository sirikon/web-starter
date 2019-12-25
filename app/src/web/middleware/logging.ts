import Koa from 'koa';
import measure from 'logging/measure';

export default function logging(app: Koa) {
	app.use(async (_, next) => {
		await measure('http request', async () => {
			await next();
		});
	});
}
