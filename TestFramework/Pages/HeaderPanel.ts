import { Page, Locator } from "@playwright/test";

export class HeaderPanel {
    page: Page;
    GlobalSearchTextField: Locator
    constructor(page: Page) {
        this.page = page;
        this.GlobalSearchTextField = page.locator('//input[@placeholder="Search"]');
    }
    async enterAndSelectFromResultsInGlobalSearch(searchItem: string, submenu: string | undefined = undefined) {
        await this.GlobalSearchTextField.type(searchItem);
        let dropDownItem = undefined;
        if (submenu === undefined) {
            dropDownItem = this.page.locator(
                `//ul[@class='k-list-ul' or @class='k-list k-reset']//li//span[@data-testid='highlightedText' and contains(., '${searchItem}')]`
            );
        } else {
            dropDownItem = this.page.locator(
                `//ul[@class='k-list-ul' or @class='k-list k-reset']//li//span[@data-testid='highlightedText' and contains(., '${searchItem}')]/following-sibling::small[contains(., '${submenu}')]`
            );
        }
        await dropDownItem.click();

    }
}