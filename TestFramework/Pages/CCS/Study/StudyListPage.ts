import { Page, Locator } from 'playwright';
import { AddNewStudyPage } from "./AddNewStudyPage";

export class StudyListPage{
    private page: Page;
    private buttonAddNewStudy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonAddNewStudy = page.locator('#CCS_cphMenu_cmdAddNew');
    }

    async clickAddNewStudy(): Promise<AddNewStudyPage> {
        await this.buttonAddNewStudy.click();
        return new AddNewStudyPage(this.page);
    }
}