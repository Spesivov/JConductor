type Settings = {
  branch: string;
  credentials: {
    username: string;
    password: string;
  };
  application: {
    site: string;
  };
}

const defineSettings: Settings = {
  branch: process.env.BRANCH_NAME!,
  credentials: {
    username: process.env.USER_NAME!,
    password: process.env.PASSWORD!,
  },
  application: {
    site: 'Aruba Research',
  },
};

export default defineSettings;
