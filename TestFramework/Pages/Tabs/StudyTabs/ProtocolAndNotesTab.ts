import { Locator, Page } from '@playwright/test';
import { BaseTab } from '../BaseTab';

export class ProtocolAndNotesTab extends BaseTab {
  private readonly tabName = 'Protocol and Notes';
  private readonly linkVisits: Locator = this.page.locator('#CCE_cphMain_cmdVisits');

  constructor(page: Page) {
    super(page);
  }

  public async go(): Promise<ProtocolAndNotesTab> {
    await this.SelectTab(this.tabName);
    return this;
  }

  public async clickVisits(): Promise<void> {
    await this.linkVisits.click();
  }
}
