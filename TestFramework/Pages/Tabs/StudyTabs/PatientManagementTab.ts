import { Locator, Page } from '@playwright/test';
import { BaseTab } from '../BaseTab';

export class PatientManagementTab extends BaseTab {
  private readonly tabName = 'Patient Management';
  private readonly linkStudyPatient: Locator = this.page.locator('#CCE_cphMain_cmdPatients');

  constructor(page: Page) {
    super(page);
  }

  public async go(): Promise<PatientManagementTab> {
    await this.SelectTab(this.tabName);
    return this;
  }

  public async clickStudyPatients(): Promise<void> {
    await this.linkStudyPatient.click();
  }
}
