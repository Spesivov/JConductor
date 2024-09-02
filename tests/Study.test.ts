import { test, expect } from '../TestFramework/Fixtures/TestFixture';
import { faker } from '@faker-js/faker';

test('[CC-T499] Study List - Add Study (CCE)', async ({ cce, sharedActions }) => {
  //Act
  await cce.studyList.go();
  await cce.studyList.clickAddStudyButton();

  const studyName = faker.company.name();
  await cce.studyDetails.inputStudyName(studyName);
  await sharedActions.clickApplyButton();

  //Assert
  const studyStatus = await cce.studyDetails.banner.getStudyStatus();
  expect(studyStatus, 'Study has been created but has incorrect default status').toBe('Opportunity');
});

test.skip('Make a DB call', async ({ db }) => {
  //Sample usage of db fixture
  const studies = await db.studyRepository.getStudyList(278);
  console.log(`Study list: \n ${JSON.stringify(studies[0], null, 2)}`);
  console.log(`Study list id: ${studies[0].studyId}`);
});
