import { Locator, Page } from "@playwright/test";

export class DropDownComponent {
  private readonly page: Page;
  private readonly dropDown: Locator;

  constructor(page: Page, locator: string, parent?: Locator) {
    this.page = page;

    if (parent === undefined) {
      this.dropDown = page.locator(locator);
    } else {
      this.dropDown = parent.locator(locator);
    }
  }

  public async selectValue(value: string) {
    await this.dropDown.click();
    await this.page.locator(`//div[contains(@class, 'k-animation-container-shown')]//li//span[.='${value}']`).click();
  }

  public async getValue() {
    return await this.dropDown.textContent();
  }
}
