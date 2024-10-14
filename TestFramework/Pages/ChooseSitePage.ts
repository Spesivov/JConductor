import { Locator, type Page } from '@playwright/test';
import { BaseLegacyPage } from './BaseLegacyPage';

export class ChooseSitePage extends BaseLegacyPage {
  private selectButton: Locator;

  constructor(page: Page) {
    super(page);
    this.selectButton = page.locator('xpath=//input[@id = "CCE_cphMain_cmdSubmit"]');
  }

  async selectSite(site: string) {
    const control = this.page.locator(`xpath=.//div[contains(text(),'${site}')]`);
    await control.click();
  }

  async clickSelectButton() {
    await this.selectButton.click();
  }
}
