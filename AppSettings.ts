import * as dotenv from 'dotenv';

dotenv.config();

type Settings = {
  branch: string;
  credentials: {
    username: string;
    password: string;
  };
  application: {
    site: string;
  };
  headers: [[string, string], [string, string]];
};

const defineSettings: Settings = {
  branch: process.env.BRANCH_NAME!,
  credentials: {
    username: process.env.USER_NAME!,
    password: process.env.PASSWORD!,
  },
  application: {
    site: 'Aruba Research',
  },
  headers: [
    ['ccapikey', process.env.APIKEY!],
    ['content-type', 'application/json; charset=utf-8'],
  ],
};

export default defineSettings;
