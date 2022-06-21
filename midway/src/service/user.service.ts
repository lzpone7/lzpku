import { Inject, Provide } from '@midwayjs/decorator';
import { UserLoginDTO } from '../dto/user.dto';
import { UserModel } from '../model/user.model';
import { Context } from '@midwayjs/koa';
import { JwtService } from '@midwayjs/jwt';
import { httpError } from '@midwayjs/core';

@Provide()
export class UserService {
  @Inject()
  jwtService: JwtService;

  @Inject()
  ctx: Context;

  @Inject()
  UserModel: UserModel;

  async getUser(userDto: UserLoginDTO) {
    const user = await this.UserModel.getUserByUsernameAndPassword(
      userDto.username,
      userDto.password
    );
    if (!user) {
      throw new httpError.BadRequestError('账号或密码不正确');
    }
    this.ctx.session.user = user;
    return await this.jwtService.sign({
      username: user.username,
      password: user.password,
    });
  }
}
