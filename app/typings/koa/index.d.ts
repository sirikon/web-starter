import { BaseContext } from 'koa';

declare module 'koa' {
  interface BaseContext {
    params: { [key: string]: string };
    render(viewPath: string, locals?: any): Promise<void>;
  }
}
