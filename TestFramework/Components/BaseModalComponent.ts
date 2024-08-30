import { Locator, Page } from '@playwright/test';

export class BaseModalComponent {
  protected readonly page: Page;
  protected readonly modal: Locator;

  private readonly saveButton: Locator;
  private readonly cancelButton: Locator;
  private readonly closeButton: Locator;

  constructor(page: Page, containerXPath: string) {
    this.page = page;
    this.modal = this.page.locator(containerXPath);
    this.saveButton = this.modal.locator('//button[@data-testid = "primary"]');
    this.cancelButton = this.modal.locator('//button[@data-testid = "cancel"]');
    this.closeButton = this.modal.locator('//button[@data-testid = "close"]');
  }

  public async clickSaveButton() {
    await this.saveButton.click();
  }

  public async clickCancelButton() {
    await this.cancelButton.click();
  }

  public async clickCloseButton() {
    await this.closeButton.click();
  }
}
