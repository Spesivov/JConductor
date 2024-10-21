import { test } from '../TestFramework/Fixtures/TestFixture';
import { faker } from '@faker-js/faker';

test('Can add study visit', async ({ cce, actions }) => {
  //Arrange
  await actions.login.loginAndChooseLocation();

  const studyName: string = faker.company.name();
  await actions.studyActions.createStudy(studyName);
  await actions.studyActions.openStudy(studyName);

  //Act
  await cce.studyDetails.tabs.protocolAndNotes.go();
  await cce.studyDetails.tabs.protocolAndNotes.clickVisits();
  await cce.studyVisits.clickAddNew();
  await cce.setupStudyVisit.inputVisitName(faker.hacker.noun());
  await cce.setupStudyVisit.clickSave();
});
