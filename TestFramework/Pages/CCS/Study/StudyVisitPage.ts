
import { Page, Locator } from 'playwright';
import { CustomDropdown } from '../../../Components/CustomDropdown';

export class StudyVisitPage {
    private page: Page;
    private inputVisitName: Locator;
    private dropdownType: Locator;
    private dropdownSchedulingMode: Locator;
    private dropdownTargetDateUnit: Locator;
    private dropdownReferenceVisit: Locator;
    private buttonSave: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputVisitName = page.locator('//input[@id="CCS_cphMain_rdVisitInfo_C_stbName"]');
        this.dropdownType = page.locator('#CCS_cphMain_rdVisitInfo_C_scbType');
        this.dropdownSchedulingMode = page.locator('#CCS_cphMain_rdScheduling_C_cbSchedMode');
        this.dropdownTargetDateUnit = page.locator('//div[@id="CCS_cphMain_rdScheduling_C_cbSchedOffsetUnits"]');
        this.dropdownReferenceVisit = page.locator('#CCS_cphMain_rdScheduling_C_cbRefVisit');
        this.buttonSave = page.locator('//input[contains(@id,"cphMenu_cmdSave")]');
    }

    async fillVisitName(value: string) {
        await this.inputVisitName.fill(value);
    }

    async selectType(value: string) {
        console.log('Selecting Type');

        const dropdown = new CustomDropdown(this.page, 'CCS_cphMain_rdVisitInfo_C_scbType');
        await dropdown.selectItem(value);
    }

    async clickSave() {
        await this.buttonSave.click()
    }

    async fillCopiesToSave(count: string) {
        console.log('Filling Copies to Save');
        const inputCopies = this.page.locator('//input[@id="CCS_cphMain_rdVisitInfo_C_txtCopiesToSave"]');
        await inputCopies.fill(count);
    }

    async selectSchedulingMode(value: string) {
        console.log('Selecting Scheduling Mode');

        const dropdown = new CustomDropdown(this.page, 'CCS_cphMain_rdScheduling_C_cbSchedMode');
        await dropdown.selectItem(value);
    }

    async selectReferenceVisit(value: string) {
        console.log('Selecting Scheduling Mode');

        const dropdown = new CustomDropdown(this.page, 'CCS_cphMain_rdScheduling_C_cbRefVisit');
        await dropdown.selectItem(value);
    }

    async fillTargetDate(number: string, timeUnit: string, from: string, to: string) {
        const inputNumber = this.page.locator('//input[@id="CCS_cphMain_rdScheduling_C_txtOffset"]');
        await inputNumber.fill(number);

        const dropdown = new CustomDropdown(this.page, 'CCS_cphMain_rdScheduling_C_cbSchedOffsetUnits');
        await dropdown.selectItem(timeUnit);

        const inputFrom = this.page.locator('//input[@id="CCS_cphMain_rdScheduling_C_txtDaysMin"]');
        await inputFrom.fill(from);

        const inputTo = this.page.locator('//input[@id="CCS_cphMain_rdScheduling_C_txtDaysMax"]');
        await inputTo.fill(to);

        console.log('Finished filling the Target Date');
    }
}