import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { StudyDetailsPage } from './Study/StudyDetailsPage';
import { StudyVisitsPage } from './Study/StudyVisitsPage';
import { StudyListPage } from './Study/StudyListPage';
import { SetupStudyVisitPage } from './Study/SetupStudyVisitPage';

export class CCEPages {
  constructor(public page: Page) {}

  public login: LoginPage = new LoginPage(this.page);
  public studyList: StudyListPage = new StudyListPage(this.page);
  public studyDetails: StudyDetailsPage = new StudyDetailsPage(this.page);
  public studyVisits: StudyVisitsPage = new StudyVisitsPage(this.page);
  public setupStudyVisit: SetupStudyVisitPage = new SetupStudyVisitPage(this.page);
}
