import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1655434392206_7374',
  koa: {
    port: 8809,
  },
  orm: {
    type: 'sqlite',
    database: 'D:\\development\\db\\dome.db',
    dropSchema: false,
    synchronize: true,
    logging: false,
  },
  jwt: {
    secret: 'test123456',
    expiresIn: 172800000,
  },
} as MidwayConfig;
