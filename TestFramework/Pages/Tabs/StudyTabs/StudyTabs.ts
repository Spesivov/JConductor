import { Page } from '@playwright/test';
import { PatientManagementTab } from './PatientManagementTab';
import { ProtocolAndNotesTab } from './ProtocolAndNotesTab';

export class StudyTabs {
  public readonly patientManagement: PatientManagementTab;
  public readonly protocolAndNotes: ProtocolAndNotesTab;

  constructor(page: Page) {
    this.patientManagement = new PatientManagementTab(page);
    this.protocolAndNotes = new ProtocolAndNotesTab(page);
  }
}
