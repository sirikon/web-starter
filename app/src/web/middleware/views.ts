import Koa from 'koa';
import koaViews from 'koa-views';

export default function views(app: Koa) {
	app.use(koaViews('./src/web/views', {
		extension: 'pug',
		map: {
			pug: 'pug',
		},
		options: {
			cache: isProductionEnvironment(),
		},
	}));
}

const isProductionEnvironment = () =>
	process.env.NODE_ENV !== 'development';
