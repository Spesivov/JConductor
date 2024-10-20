import { Locator, type Page } from '@playwright/test';
import { CustomDropdown } from '../../../Components/CustomDropdown';

export class AddNewStudyPage {
    private page: Page;
    private inputStudyName: Locator;
    private dropdownSponsor: string;
    private dropdownSite: string;
    private siteInitiationDate: Locator;
    private buttonSave: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputStudyName = page.locator('#CCS_cphMain_rpbStudyfieldsContainer_i1_stbStudyID');
        this.dropdownSponsor = 'CCS_cphMain_rpbStudyfieldsContainer_i1_scbSponsor';
        this.dropdownSite = 'CCS_cphMain_rpbStudyfieldsContainer_i1_scbSite';
        this.siteInitiationDate = page.locator('#CCS_cphMain_rpbStudyfieldsContainer_i4_sdpPresiteDate_dateInput');
        this.buttonSave = page.locator('//input[contains(@id,"cphMenu_cmdSave")]');
    }

    async fillStudyName(studyName: string) {
        await this.inputStudyName.fill(studyName);
    }

    async selectSponsor(sponsor: string) {
        console.log('Selecting Sponsor');
        const dropdown = new CustomDropdown(this.page, this.dropdownSponsor);
        await dropdown.selectItem(sponsor);
    }

    async selectSite(site: string) {
        console.log('Selecting Site');
        const dropdown = new CustomDropdown(this.page, this.dropdownSite);
        await dropdown.selectItem(site);
        const waiter = this.page.locator(`#alpCCS_cphMain_updNewStudySetup`);
        await waiter.waitFor({ state: 'detached' });
    }

    async expandSection(section: string) {
        const sectionLocator = this.page.locator(`//span[.='${section}']//parent::a`);
        const expandSection = await sectionLocator.getAttribute('class');

        if (!expandSection?.includes('expanded')) {
            await sectionLocator.click();
        }
    }

    async fillSiteInitiationDate(date: string) {
        await this.siteInitiationDate.fill(date);
    }

    async clickSave() {
        await this.buttonSave.click()
    }
}