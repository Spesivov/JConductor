import { type Locator, type Page } from "@playwright/test";
import { HeaderComponent } from "../Components/HeaderComponent";

export class StudyListPage{
    readonly title: string = "Study List";
    private page: Page;
    private header: HeaderComponent;
    private readonly addStudyButton: Locator;
    private readonly searchInput: Locator;
  
    constructor(page: Page) {
      this.header = new HeaderComponent(page);
      this.addStudyButton = page.locator("#btnMainaddStudy");
      this.searchInput = page.locator("#search");
    }
  
    async go() {
      await this.header.globalSearch("Studies");
    }
  
    async clickAddStudyButton() {
      await this.addStudyButton.click();
    }
  
    async inputSearchField(value: string) {
      await this.searchInput.fill(value);
      await this.searchInput.press("Enter");
    }
  }