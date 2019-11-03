import Koa from 'koa';
import KoaRouter from 'koa-router';

import homeController from '../controllers/homeController';

export default function router(app: Koa) {
  const r = new KoaRouter();

  r.get('/', homeController);

  app.use(r.routes()).use(r.allowedMethods());
}
