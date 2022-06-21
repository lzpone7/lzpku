import { Inject, Controller, Body, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { UserLoginDTO } from '../dto/user.dto';
import { ResultVO } from '../vo/result.vo';

@Controller('/api')
export class userController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/user/login')
  async getUser(@Body() UserLoginDTO: UserLoginDTO) {
    const token = await this.userService.getUser(UserLoginDTO);
    return new ResultVO<{ token: string }>('登录成功', { token });
  }
}
