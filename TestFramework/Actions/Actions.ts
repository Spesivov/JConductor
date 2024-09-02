import { Page } from '@playwright/test';
import { LoginActions } from './LoginActions';
import { SharedActions } from './SharedActions';

export class Actions {
  public readonly login: LoginActions;
  public readonly sharedActions: SharedActions;

  constructor(page: Page) {
    this.login = new LoginActions(page);
    this.sharedActions = new SharedActions(page);
  }
}
