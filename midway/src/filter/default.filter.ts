import { Catch } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { ResultVO } from '../vo/result.vo';

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, ctx: Context) {
    // 所有的未分类错误会到这里
    return new ResultVO<null>(err.message, null, 'error', 400);
  }
}
