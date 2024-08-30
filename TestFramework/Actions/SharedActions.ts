import { Locator, Page } from '@playwright/test';

export class SharedActions {
  private readonly page: Page;
  private readonly saveButton: Locator;
  private readonly applyButton: Locator;
  private readonly addButton: Locator;
  private readonly returnButton: Locator;
  private readonly refreshButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = this.page.locator('//input[@id="CCE_cphMenu_cmdSave"]');
    this.applyButton = this.page.locator('//input[@id="CCE_cphMenu_cmdApply"]');
    this.addButton = this.page.locator('//input[contains(@id, "_cmdAdd")]');
    this.returnButton = this.page.locator('#CCE_cphMenu_cmdCancel');
    this.refreshButton = this.page.locator('#CCE_cphMain_cmdRefresh');
  }

  public async clickSaveButton() {
    await this.saveButton.click();
  }

  public async clickApplyButton() {
    await this.applyButton.click();
  }

  public async clickAddButton() {
    await this.addButton.click();
  }

  public async clickReturnButton() {
    await this.returnButton.click();
  }

  public async clickRefreshButton() {
    await this.refreshButton.click();
    await this.page.locator('#CCE_cphMain_UpdateProgress').waitFor({ state: 'hidden' });
  }
}
