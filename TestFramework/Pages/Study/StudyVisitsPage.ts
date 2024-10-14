import { Locator, Page } from '@playwright/test';
import { BaseLegacyPage } from '../BaseLegacyPage';

export class StudyVisitsPage extends BaseLegacyPage {
  private readonly inputName: Locator;
  private readonly inputCCID: Locator;

  constructor(page: Page) {
    super(page);
    this.inputName = page.locator('#CCE_cphMain_txtNameLike');
    this.inputCCID = page.locator('#CCE_cphMain_txtCCIDLike');
  }

  async clickAddNew() {
    await this.actions.clickAddButton();
  }

  async inputVisitName(name: string) {
    await this.inputName.fill(name);
  }

  async inputVisitCCID(ccid: string) {
    await this.inputCCID.fill(ccid);
  }
}
