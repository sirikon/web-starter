import fs from 'fs';
import pathUtils from 'path';

import Koa from 'koa';
import koaViews from 'koa-views';

const faviconsHeaders = getFaviconsHeaders();

export default function views(app: Koa) {
	app.use(koaViews('./src/web/views', {
		extension: 'pug',
		map: {
			pug: 'pug',
		},
		options: {
			filters: {
				'inject-favicons-headers': () => faviconsHeaders,
			},
			cache: isProductionEnvironment(),
		},
	}));
}

const isProductionEnvironment = () =>
	process.env.NODE_ENV !== 'development';

function getFaviconsHeaders() {
	const headersPath = pathUtils.join('.', 'src', 'web', 'favicons', 'headers.html');
	if (fs.existsSync(headersPath)) {
		return fs.readFileSync(headersPath, { encoding: 'utf8' });
	}
	return '';
}
