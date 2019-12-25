import Koa, { BaseContext } from 'koa';
import KoaRouter from 'koa-router';
import { container, InjectionToken } from 'tsyringe';

import { JobContext } from 'application/models';
import HomeController from 'web/controllers/homeController';

export default function router(app: Koa) {
  const r = new KoaRouter();

  r.get('/', (ctx) => resolve(ctx, HomeController).handle(ctx));

  app.use(r.routes()).use(r.allowedMethods());
}

function resolve<T>(ctx: BaseContext, token: InjectionToken<T>): T {
  return ctx.ioc.resolve(token);
}
