import { Page } from '@playwright/test';
import { DropDownComponent } from './DropDownComponent';
import { BaseModalComponent } from './BaseModalComponent';
import { StudyStatuses } from '../Enums/StudyStatuses';

export class StudyStatusSlideOut extends BaseModalComponent {
  private readonly status: DropDownComponent;

  constructor(page: Page, containerXPath: string = '#detailsDrawer') {
    super(page, containerXPath);

    this.status = new DropDownComponent(page, '//div[@data-testid="studyStatuses"]');
  }

  public async selectStatus(status: StudyStatuses): Promise<StudyStatusSlideOut> {
    const enumValue = StudyStatuses[status];
    await this.status.selectValue(enumValue);
    return this;
  }

  public async getStatus(): Promise<string | null> {
    return await this.status.getValue();
  }
}
