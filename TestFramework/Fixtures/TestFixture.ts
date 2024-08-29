import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ChooseSitePage } from '../Pages/ChooseSitePage';
import { CCEPages } from '../Pages/CCEPages';
import { SharedActions } from '../Actions/SharedActions';

  type MyFixtures = {
    loginPage: LoginPage;
    chooseSitePage: ChooseSitePage;
    cce: CCEPages;
    sharedActions: SharedActions;
  };

  export const test = base.extend<MyFixtures>({
    loginPage: [async ({ page }, use) => {
      // Set up the fixture.
      const loginPage = new LoginPage(page);
      await page.goto('/');
      await loginPage.populateName('automation');
      await loginPage.populatePassword('Password1');
      await loginPage.clickSignInButton();
  
      await use(loginPage);
    }, { auto: true }],
  
    chooseSitePage: [async ({ page }, use) => {
      const chooseSitePage = new ChooseSitePage(page);
      await chooseSitePage.selectSite('Aruba Research');
      await chooseSitePage.clickSelectButton();
      await use(chooseSitePage);
    }, { auto: true }],

    cce: [async ({ page }, use) => {
      const cce = new CCEPages(page);
      await use(cce);
    }, { auto: true }],

    sharedActions: [async ({ page }, use) => {
      const sharedActions = new SharedActions(page);
      await use(sharedActions);
    }, { auto: true }],
  });
  
  export { expect } from '@playwright/test';