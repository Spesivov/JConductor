import { Page } from '@playwright/test';
import { LoginActions } from './LoginActions';
import { SharedActions } from './SharedActions';
import { StudyActions } from './StudyActions';

export class Actions {
  public readonly login: LoginActions;
  public readonly sharedActions: SharedActions;
  public readonly studyActions: StudyActions;

  constructor(page: Page) {
    this.login = new LoginActions(page);
    this.sharedActions = new SharedActions(page);
    this.studyActions = new StudyActions(page);
  }
}
