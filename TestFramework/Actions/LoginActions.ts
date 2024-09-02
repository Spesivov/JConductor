import { Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ChooseSitePage } from '../Pages/ChooseSitePage';
import defineSettings from '../../AppSettings';

export class LoginActions {
  private readonly loginPage: LoginPage;
  private readonly chooseLocationPage: ChooseSitePage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(this.page);
    this.chooseLocationPage = new ChooseSitePage(this.page);
  }

  public async openApplication() {
    await this.page.goto('/');
  }

  public async login(username: string, password: string) {
    await this.loginPage.populateName(username);
    await this.loginPage.populatePassword(password);
    await this.loginPage.clickSignInButton();
  }

  public async chooseLocation(location: string) {
    await this.chooseLocationPage.selectSite(location);
    await this.chooseLocationPage.clickSelectButton();
  }

  /**
   * Login to application and select site
   * @param username if empty will use default username from AppSettings
   * @param password if empty will use default password from AppSettings
   * @param location if empty will use default site from AppSettings
   */
  public async loginAndChooseLocation(username?: string, password?: string, location?: string) {
    username ??= defineSettings.credentials.username;
    password ??= defineSettings.credentials.password;
    location ??= defineSettings.application.site;

    await this.openApplication();
    await this.login(username!, password!);
    await this.chooseLocation(location);
  }
}
