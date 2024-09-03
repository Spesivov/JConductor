import { Locator, Page } from '@playwright/test';
import { HeaderComponent } from '../Components/HeaderComponent';

export class SharedActions {
  private readonly page: Page;
  private readonly saveButton: Locator;
  private readonly applyButton: Locator;
  private readonly addButton: Locator;
  private readonly returnButton: Locator;
  private readonly refreshButton: Locator;

  private readonly header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = this.page.locator('//input[@id="CCE_cphMenu_cmdSave"]');
    this.applyButton = this.page.locator('//input[@id="CCE_cphMenu_cmdApply"]');
    this.addButton = this.page.locator('//input[contains(@id, "_cmdAdd")]');
    this.returnButton = this.page.locator('#CCE_cphMenu_cmdCancel');
    this.refreshButton = this.page.locator('#CCE_cphMain_cmdRefresh');
    this.header = new HeaderComponent(page);
  }

  public async waitLoader() {
    await this.page.locator('.raDiv').locator('visible=true').waitFor({ state: 'hidden', timeout: 30000 });
  }

  public async globalSearch(value: string) {
    await this.header.globalSearch(value);
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
