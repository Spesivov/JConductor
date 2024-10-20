
import { Page, Locator } from 'playwright';

export class ViewStudyPage{
    private page: Page;
    private buttonSave: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonSave = page.locator('//input[@id="CCS_cphMenu_cmdSaveClose"]');
    }

    getTitle(studyName: string) {
        return `Clinical Conductor CTMS - Study Details (${studyName})`;
    }

    async expandStudyLinks(linkName: string) {
        const sectionLocator = this.page.locator(`//div[.='${linkName}']/../parent::div[@id='cp_general']`);
        const expandSection = await sectionLocator.getAttribute('class');

        if (expandSection?.includes('colapsed')) {
            await sectionLocator.click();
        }
    }

    async clickStudyLink(sectionName:string, linkName: string) {
        console.log(`Clicking ${linkName} link under ${sectionName} section`);
        const linkLocator = this.page.locator(`//div[.='${sectionName}']/../parent::div//a[.='${linkName}']`);
        await linkLocator.click();

        //await this.WaitForLoaderDisappear();
    }
}