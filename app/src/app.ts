import Koa from 'koa';

import errorHandler from './web/middleware/errorHandler';
import router from './web/middleware/router';
import serveStatic from './web/middleware/serveStatic';
import views from './web/middleware/views';

export default () => {

	const port = getPort();
	const app = new Koa();

	views(app);
	errorHandler(app);
	router(app);
	serveStatic(app);

	app.listen(port, '0.0.0.0', () => {
		// tslint:disable-next-line: no-console
		console.log(`Listening on port ${port}`);
	});

};

function getPort(): number {
	if (process.env.PORT) {
		return parseInt(process.env.PORT, 10);
	}
	return 3000;
}
