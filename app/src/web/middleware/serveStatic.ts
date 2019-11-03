import Koa from 'koa';
import koaStatic from 'koa-static';

export default function serveStatic(app: Koa) {
  app.use(koaStatic('./src/web/static'));
}
