import { test, expect } from '../TestFramework/Fixtures/TestFixture';

test('User can sign in', async ({ page, actions }) => {
  //Act
  await actions.login.loginAndChooseLocation();

  //Assert
  await expect(page).toHaveTitle('Clinical Conductor CTMS - Welcome', {
    timeout: 10000,
  });
});
