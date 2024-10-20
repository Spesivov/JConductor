import { test } from '../TestFramework/Fixtures/TestFixture';
import { faker } from '@faker-js/faker';
import { formatDate } from '../TestFramework/Utils/CommonUtils';

test('[CC-T499] Study List - Add Study (CCS)', async ({ ccs, actions }) => {
  //Arrange
  const studyName = faker.company.name();
  const today = formatDate(new Date());

  await actions.login.loginAndChooseLocation('automation', 'Password1', 'Aruba Research');

  await ccs.headerPanel.enterAndSelectFromResultsInGlobalSearch('Study List');

  //Study creation
  const studyNewPage = await ccs.studyListPage.clickAddNewStudy();

  await studyNewPage.fillStudyName(studyName);
  await studyNewPage.selectSponsor('Abbott');
  await studyNewPage.selectSite('Aruba Research');

  await studyNewPage.expandSection('Target Dates');
  await studyNewPage.fillSiteInitiationDate(today);
  await studyNewPage.clickSave();

  //Visit creation
  const viewStudy = ccs.viewStudyPage;

  //await viewStudy.waitUntilPageNavigation(viewStudy.getTitle(studyName));
  await viewStudy.clickStudyLink('Protocol', 'Visits');
  const newStudyVisit = await ccs.visitsForStudyPage.clickAddNewVisit();

  await newStudyVisit.fillVisitName('Screening');
  await newStudyVisit.fillTargetDate('4', 'Days', '-3', '3');
  await newStudyVisit.selectSchedulingMode('From Enrollment');
  await newStudyVisit.selectType('General');
  await newStudyVisit.clickSave();

  //Create multiple visits
  await ccs.visitsForStudyPage.clickAddNewVisit();
  await newStudyVisit.fillVisitName('Visit#');
  await newStudyVisit.selectSchedulingMode('From Reference Visit');
  await newStudyVisit.selectReferenceVisit('1 - Screening');
  await newStudyVisit.selectType('General');
  await newStudyVisit.fillCopiesToSave('10');
  await newStudyVisit.clickSave();

  const visitForStudy = ccs.visitsForStudyPage;
  await visitForStudy.checkVisit('Visit1');
  await visitForStudy.clickCopyVisit();
  await visitForStudy.WaitForLoaderDisappear();

  await visitForStudy.selectEditOption('Edit Names');
  await visitForStudy.selectEditOption('Edit Types');

  await visitForStudy.clickRefresh();

  await visitForStudy.fillVisitName('Visit1', 'Visit 1 - Arm A');
  await visitForStudy.fillVisitName('Visit2', 'Visit 2 - Arm A');
  await visitForStudy.fillVisitName('Visit3', 'Visit 3 - Arm A');
  await visitForStudy.fillVisitName('Visit4', 'Visit 4 - Arm B');
  await visitForStudy.fillVisitName('Visit5', 'Visit 5 - Arm B');
  await visitForStudy.fillVisitName('Visit6', 'Visit 6 - Arm B');
  await visitForStudy.fillVisitName('Visit7', 'End of Treatment - Both Arms');
  await visitForStudy.fillVisitName('Visit8', 'Follow up');
  await visitForStudy.fillVisitName('Visit9', 'Unscheduled');
  await visitForStudy.fillVisitName('Visit10', 'Ad hoc');

  await visitForStudy.clickApply();

  await visitForStudy.selectType('Screening', 'Screening');
  await visitForStudy.selectType('Follow up', 'Follow-up');
  await visitForStudy.selectType('End of Treatment - Both Arms', 'End-of-Treatment');
});
