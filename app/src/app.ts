import Koa from 'koa';

import config from 'config';

import errorHandler from 'web/middleware/errorHandler';
import router from 'web/middleware/router';
import serveStatic from 'web/middleware/serveStatic';
import views from 'web/middleware/views';

export default () => {

	const app = new Koa();

	views(app);
	errorHandler(app);
	router(app);
	serveStatic(app);

	app.listen(config.web.port, config.web.host, () => {
		// tslint:disable-next-line: no-console
		console.log(`Listening on port ${config.web.port}`);
	});

};
