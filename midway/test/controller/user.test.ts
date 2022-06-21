import {createApp, close, createHttpRequest} from '@midwayjs/mock';
import {Application, Framework} from '@midwayjs/koa';

describe('api控制层测试', () => {
  let app: Application;
  const objectKey = ['code', 'result', 'message', 'data']

  beforeAll(async () => {
    try {
      app = await createApp<Framework>();
    } catch (err) {
      console.error('beforeAll异常', err);
      throw err;
    }
  })

  afterAll(async () => {
    await close(app);
  });

  it('正常登录测试', async () => {
    const req = createHttpRequest(app)
    const startTime = Date.now();
    const result = await req.post('/api/user/login').send({
      username: 'jack',
      password: 'redballoon'
    });
    const endTime = Date.now()
    expect(result.status).toBe(200);
    expect(result.body.code).toBe(200);
    expect(result.body.message).toBe("登录成功");
    expect(endTime - startTime).toBeLessThan(1000)
    const keys = Object.keys(result.body)
    expect(keys.length === objectKey.length && keys.every(key => objectKey.includes(key))).toBe(true)
  });

  it('异常登录测试', async () => {
    const req = createHttpRequest(app)
    const startTime = Date.now();
    const result = await req.post('/api/user/login').send({
      username: '112222',
      password: 'redball'
    });
    const endTime = Date.now()
    expect(result.status).toBe(200);
    expect(result.body.code).toBe(400);
    expect(result.body.message).toBe("账号或密码不正确");
    expect(endTime - startTime).toBeLessThan(1000)
    const keys = Object.keys(result.body)
    expect(keys.length === objectKey.length && keys.every(key => objectKey.includes(key))).toBe(true)
  });
});
