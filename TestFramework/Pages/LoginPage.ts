import { type Locator, type Page } from '@playwright/test';
import { BaseLegacyPage } from './BaseLegacyPage';

export class LoginPage extends BaseLegacyPage {
  private nameInput: Locator;
  private passwordInput: Locator;
  private signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.locator('input[name="txtUserID"]');
    this.passwordInput = page.locator('input[name="txtPassword"]');
    this.signInButton = page.locator('input[type="submit"]');
  }

  async populateName(name: string) {
    await this.nameInput.fill(name);
  }

  async populatePassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }
}
