import { Locator, Page } from '@playwright/test';
import { BaseLegacyPage } from '../BaseLegacyPage';

export class SetupStudyVisitPage extends BaseLegacyPage {
  private readonly visitName: Locator;

  constructor(page: Page) {
    super(page);
    this.visitName = page.locator('#CCE_cphMain_txtName');
  }

  async clickApply() {
    await this.actions.clickApplyButton();
  }

  async clickSave() {
    await this.actions.clickSaveButton();
  }

  async inputVisitName(visitName: string) {
    await this.visitName.fill(visitName);
  }
}
