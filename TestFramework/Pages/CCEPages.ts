import { Page } from '@playwright/test';
import { StudyListPage } from './StudyListPage';
import { LoginPage } from './LoginPage';
import { StudyDetailsPage } from './StudyDetailsPage';

export class CCEPages {
  constructor(public page: Page) { }

  public login: LoginPage = new LoginPage(this.page);
  public studyList: StudyListPage = new StudyListPage(this.page);
  public studyDetails: StudyDetailsPage = new StudyDetailsPage(this.page);
}
