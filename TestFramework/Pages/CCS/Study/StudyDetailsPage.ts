import { Page, Locator } from 'playwright';

export class StudyDetailsPage {
  private page: Page;
  private ElementLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ElementLink = page.locator('//a[@id="CCS_cphMain_cmdElements"]');
  }
  
  async clickElements() {
    await this.ElementLink.click();
  }
}