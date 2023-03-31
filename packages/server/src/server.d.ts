/// <reference types="shared/declare" />
/// <reference types="typease/index" />
import 'shared/declare/enum';

import type { Context, Next } from 'koa';

declare type MiddleWareFn = (ctx: Context & CustomContext, next: Next) => void;
