import { Context } from 'koa';
import { ResponseCode } from 'shared/declare/enum';

class ResponseBodyCreator {
  private constructor() {}

  static ctx: Context;

  private static basicCreator: ResponseCreator = (data = undefined, message = '', code) => {
    return (this.ctx.body = { data, message, code });
  };

  static assemblyCtx(ctx: Context) {
    ResponseBodyCreator.ctx = ctx;
  }

  static success(this: Context, data?: any, message?: any) {
    ResponseBodyCreator.assemblyCtx(this);
    return ResponseBodyCreator.basicCreator(data, message, ResponseCode.SUCCESS);
  }

  static fail(this: Context, message?: any) {
    ResponseBodyCreator.assemblyCtx(this);
    return ResponseBodyCreator.basicCreator(undefined, message, ResponseCode.SERVERERROR);
  }
}

export const success = ResponseBodyCreator.success;
export const fail = ResponseBodyCreator.fail;
