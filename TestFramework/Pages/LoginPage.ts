import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  private nameInput: Locator;
  private passwordInput: Locator;
  private signInButton: Locator;

  constructor(page: Page) {
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
