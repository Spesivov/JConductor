import { Locator, Page } from "@playwright/test";
import { StudyStatusSlideOut } from "./StudyStatusSlideOut";

export class StudyBannerComponent{
  private readonly page: Page;
  private readonly studyIdLabel: Locator;
  private readonly studyStatus: Locator;

  constructor(page: Page) {
    page = page;
    this.studyIdLabel = page.locator("//div[@id = 'detailStudyCCID']//div[2]");
    this.studyStatus = page.locator("//span[@data-testid = 'statusFlag']");
  }

  public async getStudyId(): Promise<number> {
    return Number(await this.studyIdLabel.textContent());
  }

  public async getStudyStatus(): Promise<string | null> {
    return await this.studyStatus.getAttribute("title");
  }

  public async clickStudyStatus(): Promise<StudyStatusSlideOut> {
    await this.studyStatus.click();
    return new StudyStatusSlideOut(this.page);
  }
}
