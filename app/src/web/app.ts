import Koa from 'koa';
import { container } from 'tsyringe';

import { JobContext } from 'application/models';
import config from 'config';
import Logger from 'logging/logger';

import errorHandler from 'web/middleware/errorHandler';
import init from 'web/middleware/init';
import logging from 'web/middleware/logging';
import router from 'web/middleware/router';
import serveStatic from 'web/middleware/serveStatic';
import views from 'web/middleware/views';

export default () => {

	const host = config.web.host;
	const port = config.web.port;

	const app = new Koa();
	const logger = getLogger();

	init(app);
	logging(app);
	views(app);
	errorHandler(app);
	router(app);
	serveStatic(app);

	app.listen(port, host, () => {
		logger.info('Web server started', { host, port });
	});

};

function getLogger(): Logger {
	const childContainer = container.createChildContainer();
	childContainer.register(JobContext, { useValue: new JobContext('web-start') });
	return childContainer.resolve(Logger);
}
