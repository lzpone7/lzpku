import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { Provide } from '@midwayjs/decorator';

@Provide()
export class UserModel {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(
    username: string,
    password: string
  ): Promise<UserEntity> {
    return this.userRepo.findOne({
      where: {
        username,
        password,
      },
    });
  }
}
