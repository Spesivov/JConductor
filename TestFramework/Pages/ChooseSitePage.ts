import {Locator, type Page} from "@playwright/test";

export class ChooseSitePage  {
    private page: Page;
    private selectButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectButton = page.locator("xpath=//input[@id = 'CCE_cphMain_cmdSubmit']");
    }

    async selectSite(site: string) {
        let control = this.page.locator(`xpath=.//div[contains(text(),'${site}')]`);
        await control.click();
    }

    async clickSelectButton() {
        await this.selectButton.click();
    }
}
