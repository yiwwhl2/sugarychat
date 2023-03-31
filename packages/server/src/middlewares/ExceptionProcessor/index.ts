import { MiddleWareFn } from '../../server';
import { CommonError } from './type';

function ExceptionProcessor(): MiddleWareFn {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.fail(`Internal Server Error: ${(err as CommonError).message}`);
    }
  };
}

export default ExceptionProcessor;
