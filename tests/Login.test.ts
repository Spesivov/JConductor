import { test, expect } from '../TestFramework/Fixtures/TestFixture';

test('User can sign in', async ({ page }) => {
  await expect(page).toHaveTitle('Clinical Conductor CTMS - Welcome', { timeout: 10000 });
});

