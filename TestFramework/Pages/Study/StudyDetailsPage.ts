import { Locator, Page } from '@playwright/test';
import { StudyBannerComponent } from '../../Components/StudyBannerComponent';
import { StudyTabs } from '../Tabs/StudyTabs/StudyTabs';
import { BaseLegacyPage } from '../BaseLegacyPage';

export class StudyDetailsPage extends BaseLegacyPage {
  private readonly nameInput: Locator;
  private readonly sponsorTeamDropDown: Locator;
  private readonly managingSiteDropDown: Locator;
  public readonly banner: StudyBannerComponent;
  public readonly tabs: StudyTabs;

  constructor(page: Page) {
    super(page);
    this.banner = new StudyBannerComponent(page);
    this.tabs = new StudyTabs(page);
    this.nameInput = page.locator('#CCE_cphMain_txtStudyID');
    this.sponsorTeamDropDown = page.locator('#CCE_cphMain_cbSponsor');
    this.managingSiteDropDown = page.locator('#CCE_cphMain_cbSite');
  }

  async inputStudyName(studyName: string) {
    await this.nameInput.fill(studyName);
  }

  async selectSponsorTeam(sponsorTeamName: string) {
    await this.sponsorTeamDropDown.selectOption({ label: sponsorTeamName });
  }

  async selectManagingSite(managingSiteName: string) {
    await this.managingSiteDropDown.selectOption({ label: managingSiteName });
  }
}
