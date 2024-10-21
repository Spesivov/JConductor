import { Locator, Page } from '@playwright/test';

export class ToastComponent {
  private readonly toast: Locator;

  constructor(page: Page) {
    this.toast = page.locator('.Toastify__toast');
  }

  public async waitForDisplaying(): Promise<void> {
    await this.toast.waitFor({ state: 'visible', timeout: 10 * 1000 });
  }

  public async waitForHidding(): Promise<void> {
    await this.toast.waitFor({ state: 'hidden', timeout: 10 * 1000 });
  }

  public async isSuccess(): Promise<boolean | undefined> {
    await this.waitForDisplaying();
    const attribute = await this.toast.getAttribute('class');
    const result = attribute?.includes('Toastify__toast--success');
    return result;
  }
}
