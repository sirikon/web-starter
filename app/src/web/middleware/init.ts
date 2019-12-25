import Koa from 'koa';
import { v4 } from 'uuid';

import { JobContext } from 'application/models';
import { container } from 'tsyringe';

export default function init(app: Koa) {
	app.use(async (ctx, next) => {
		const jobCtx = new JobContext(v4());
		const requestContainer = container.createChildContainer();
		requestContainer.register(JobContext, { useValue: jobCtx });
		ctx.ioc = requestContainer;
		await next();
	});
}
