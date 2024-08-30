import { Locator, Page } from '@playwright/test';
import { StudyBannerComponent } from '../Components/StudyBannerComponent';

export class StudyDetailsPage {
  private readonly page: Page;
  private readonly input_name: Locator;
  private readonly dropDown_sponsorTeam: Locator;
  private readonly dropDown_managingSite: Locator;
  public readonly banner: StudyBannerComponent;

  constructor(page: Page) {
    this.page = page;
    this.banner = new StudyBannerComponent(page);
    this.input_name = page.locator('#CCE_cphMain_txtStudyID');
    this.dropDown_sponsorTeam = page.locator('#CCE_cphMain_cbSponsor');
    this.dropDown_managingSite = page.locator('#CCE_cphMain_cbSite');
  }

  async inputStudyName(studyName: string) {
    await this.input_name.fill(studyName);
  }

  async selectSponsorTeam(sponsorTeamName: string) {
    await this.dropDown_sponsorTeam.selectOption({ label: sponsorTeamName });
  }

  async selectManagingSite(managingSiteName: string) {
    await this.dropDown_managingSite.selectOption({ label: managingSiteName });
  }
}
