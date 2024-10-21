import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BaseReactPage extends BasePage {
  protected constructor(page: Page) {
    super(page);
  }
}
