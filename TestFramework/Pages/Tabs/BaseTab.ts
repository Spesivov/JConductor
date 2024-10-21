import { Page } from '@playwright/test';

export class BaseTab {
  constructor(public page: Page) {}

  protected async SelectTab(tabName: string): Promise<void> {
    const tab = this.page.locator(`//a[.='${tabName}']`);
    const tabClass = await tab.getAttribute('class');

    if (tabClass?.includes('Selected')) {
      return;
    }

    await tab.click();
  }
}
