import { Page } from "@playwright/test";

export class CustomDropdown {
    private page: Page;
    private dropdownLocator: string;
    constructor(page: Page, dropdownLocator: string) {
        this.page = page;
        this.dropdownLocator = dropdownLocator;
    }

    async selectItem(item: string) {
        const dropdown = this.page.locator(`//div[contains(@id,"${this.dropdownLocator}") and not(contains(@id, 'DropDown'))]`);
        await dropdown.click();

        const listItems = this.page.locator(`//div[contains(@id,"${this.dropdownLocator}_DropDown")]//*[text()='${item}']`);

        await listItems.click();
    }
}