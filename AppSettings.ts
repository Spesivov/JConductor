export class AppSettings {
  public static Branch: string = process.env.BRANCH_NAME!;
  public static Username: string = process.env.USER_NAME!;
  public static Password: string = process.env.PASSWORD!;
  public static Site: string = 'Aruba Research';
  public static APIHeaders = {
    ccapikey: process.env.APIKEY,
    'content-type': 'application/json; charset=utf-8',
  };
}
