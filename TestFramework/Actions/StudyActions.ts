import { Page } from '@playwright/test';
import { StudyDetailsPage } from '../Pages/Study/StudyDetailsPage';
import { SharedActions } from './SharedActions';
import { StudyStatuses } from '../Enums/StudyStatuses';
import { StudyListPage } from '../Pages/Study/StudyListPage';

export class StudyActions {
  private readonly sharedActions: SharedActions;

  private readonly studyList: StudyListPage;
  private readonly studyDetails: StudyDetailsPage;

  constructor(public page: Page) {
    this.sharedActions = new SharedActions(page);
    this.studyList = new StudyListPage(page);
    this.studyDetails = new StudyDetailsPage(page);
  }

  public async createStudy(studyName: string) {
    await this.studyList.go();
    await this.studyList.clickAddStudyButton();
    await this.studyDetails.inputStudyName(studyName);
    await this.sharedActions.clickApplyButton();
    await this.sharedActions.waitLoader();
  }

  public async openStudy(studyName: string) {
    await this.sharedActions.globalSearch(studyName);
  }

  public async updateStudyStatus(studyName: string, status: StudyStatuses) {
    await this.openStudy(studyName);
    const studyStatusSlideOut = await this.studyDetails.banner.clickStudyStatus();
    await studyStatusSlideOut.selectStatus(status);
    await studyStatusSlideOut.clickSaveButton();
  }
}
