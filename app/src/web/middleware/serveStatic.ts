import Koa from 'koa';
import koaStatic from 'koa-static';

export default function serveStatic(app: Koa) {
  app.use(koaStatic('./resources/web/generated/style'));
  app.use(koaStatic('./resources/web/generated/favicons/files'));
}
