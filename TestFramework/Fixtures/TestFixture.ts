/* eslint-disable no-empty-pattern */
import { test as base } from '@playwright/test';
import { ChooseSitePage } from '../Pages/ChooseSitePage';
import { CCEPages } from '../Pages/CCEPages';
import { DbFixture } from '../Fixtures/DbFixture';
import { Actions } from '../Actions/Actions';
import { ApiFixture } from './ApiFixture';

type MyFixtures = {
  chooseSitePage: ChooseSitePage;
  cce: CCEPages;
  actions: Actions;
  db: DbFixture;
  api: ApiFixture
};

export const test = base.extend<MyFixtures>({
  cce: [
    async ({ page }, use) => {
      const cce = new CCEPages(page);
      await use(cce);
    },
    { auto: true },
  ],

  actions: [
    async ({ page }, use) => {
      const actions = new Actions(page);
      await use(actions);
    },
    { auto: true },
  ],

  db: [
    async ({ }, use) => {
      const dbFixture = new DbFixture();
      await use(dbFixture);
    },
    { auto: true },
  ],

  api: [
    async ({ }, use) => {
      const apiFixture = new ApiFixture();
      await use(apiFixture);
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';
