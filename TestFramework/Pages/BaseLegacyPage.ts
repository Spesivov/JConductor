import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SharedActions } from '../Actions/SharedActions';

export class BaseLegacyPage extends BasePage {
  protected readonly actions: SharedActions;

  constructor(page: Page) {
    super(page);
    this.actions = new SharedActions(page);
  }
}
