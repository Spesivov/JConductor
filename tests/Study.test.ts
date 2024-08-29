import { test, expect } from '../TestFramework/Fixtures/TestFixture';

test("[CC-T499] Study List - Add Study (CCE)", async ({ cce, sharedActions }) => {
    //Act
    await cce.studyList.go();
    await cce.studyList.clickAddStudyButton();

    const studyName = "Advarra company";
    await cce.studyDetails.inputStudyName(studyName);
    await sharedActions.clickApplyButton();

    //Assert
    const studyStatus = await cce.studyDetails.banner.getStudyStatus();
    expect(studyStatus, "Study has been created but has incorrect default status").toBe("Opportunity");
  });