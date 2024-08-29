import { Page } from "@playwright/test";
import { DropDownComponent } from "./DropDownComponent";
import { BaseModalComponent } from "./BaseModalComponent";

export class StudyStatusSlideOut extends BaseModalComponent {
  private readonly status: DropDownComponent;

  constructor(page: Page, containerXPath: string = "#detailsDrawer") {
    super(page, containerXPath);

    this.status = new DropDownComponent(
      page,
      "//div[@data-testid='studyStatuses']",
      this.modal
    );
  }

  public async selectStatus(
    status: string
  ): Promise<StudyStatusSlideOut> {
    await this.status.selectValue(status);
    return this;
  }

  public async getStatus(): Promise<string | null> {
    return await this.status.getValue();
  }
}
