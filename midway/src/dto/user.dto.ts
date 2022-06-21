import { Rule, RuleType } from '@midwayjs/validate';

export class UserLoginDTO {
  @Rule(RuleType.number().required())
  username: string;

  @Rule(RuleType.number().required())
  password: string;
}
