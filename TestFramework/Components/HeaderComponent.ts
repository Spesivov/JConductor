import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  protected readonly page: Page;
  private readonly logo: Locator;
  private readonly globalSearchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('//a[contains(@id, "_lnkImgHome")]');
    this.globalSearchInput = page.locator('//input[@placeholder="Search"]');
  }

  async clickLogoImage() {
    await this.logo.click();
  }

  async globalSearch(value: string) {
    await this.globalSearchInput.fill(value);
    await this.page.click(`//ul[@class='k-list-ul']//li//span[contains(text(), '${value}')]`);
  }
}
