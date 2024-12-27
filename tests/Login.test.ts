import { test, expect } from '../TestFramework/Fixtures/TestFixture';

test('User can sign in', async ({ page, actions }) => {
  //Act
  await actions.login.loginAndChooseLocation();
  const title = page.url();
  console.log(title);

  //Assert
  await expect(page).toHaveTitle('Clinical Conductor CTMS - Welcome', {
    timeout: 10000,
  });
});
