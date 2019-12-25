import { BaseContext } from 'koa';
import { JobContext } from 'application/models';
import { DependencyContainer } from 'tsyringe';

declare module 'koa' {
  interface BaseContext {
    params: { [key: string]: string };
    render(viewPath: string, locals?: any): Promise<void>;
    ioc: DependencyContainer;
  }
}
