import Koa from 'koa';

import config from 'config';
import logger from 'logging/logger';

import errorHandler from 'web/middleware/errorHandler';
import logging from 'web/middleware/logging';
import router from 'web/middleware/router';
import serveStatic from 'web/middleware/serveStatic';
import views from 'web/middleware/views';

export default () => {

	const app = new Koa();

	logging(app);
	views(app);
	errorHandler(app);
	router(app);
	serveStatic(app);

	app.listen(config.web.port, config.web.host, () => {
		logger.info('Web server started', {
			host: config.web.host,
			port: config.web.port,
		});
	});

};
