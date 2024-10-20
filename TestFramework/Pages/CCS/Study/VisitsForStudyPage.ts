import { Page, Locator } from 'playwright';
import { StudyVisitPage } from './StudyVisitPage.js';
//import { expect } from '@playwright/test';

export class VisitsForStudyPage {
  private page: Page;
  private buttonAddNewVisit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonAddNewVisit = page.locator('#CCS_cphMenu_cmdAddVisit');
  }

  async clickApply() {
    await this.page.locator('#CCS_cphMenu_cmdApply').click();
  }

  async clickAddNewVisit() {
    await this.buttonAddNewVisit.click();
    return new StudyVisitPage(this.page);
  }

  async checkVisit(visitName: string) {
    console.log(`Checking visit: ${visitName}`);
    const checkboxVisit = this.page.locator(`//a[.='${visitName}']/../..//input[contains(@id, 'SelectCheckBox')]`);
    await checkboxVisit.check();

    return this;
  }

  async WaitForLoaderDisappear() {
    const interval = Date.now() + 180 * 1000;
    while (Date.now() < interval) {
      try {
        const loaders = await this.page.isVisible(`
                    //*[contains(@class, 'is-loading')] | 
                    //*[contains(@class, 'raDiv')] | 
                    //div[contains(@id, '_UpdateProgress')] | 
                    //*[@data-testid = 'bannerLoading'] | 
                    //*[@data-testid = 'loadingLogo'] |
                     //*[contains(@class,'skeleton__item')]`);

        if (loaders) {
          console.log('Waiting for loader to disappear');
          await this.page.waitForTimeout(1000);
        } else {
          console.log('Loader disappeared');
          break;
        }
      } catch (error) {
        console.log('Loader dissapeared before checking visibility', error);
        break;
      }
    }
  }

  async selectEditOption(option: string) {
    console.log(`Selecting Edit Option: ${option}`);
    const dropdown = this.page.locator(`#CCS_cphMain_cSection_scbEditOptions`);
    await dropdown.click();

    const optionItem = this.page.locator(`//label[.='${option}']/input[@type='checkbox']`);
    await optionItem.check();

    return this;
  }

  async clickCopyVisit() {
    console.log('Clicking Copy Visit');
    // this.page.on('dialog', async dialog => {
    //     console.log(dialog.message());

    //     if (dialog.message() === 'Confirm copying of the selected Visits.') {
    //         await dialog.accept();
    //     } else {
    //         await dialog.dismiss();
    //     }
    // });
    // await this.page.click('//input[@value="Copy Visits"]');

    this.page.on('dialog', async (dialog) => {
      console.log(dialog.message());

      if (dialog.message() === 'Confirm copying of the selected Visits.') {
        await dialog.accept();
      }
    });
    await this.page.click('//input[@value="Copy Visits"]');
    // const dialog = await this.page.waitForEvent('dialog');

    // expect(dialog.message()).toBe('Confirm copying of the selected Visits.');

    console.log('Confirm dialog accepted');

    return this;
  }

  async clickRefresh() {
    console.log('Clicking Refresh button');
    const button = this.page.locator('#CCS_cphMain_cSection_cmdRefresh');
    await button.click();
  }

  async clickVisitName(visitName: string) {
    console.log(`Clicking visit: ${visitName}`);
    const visitLink = this.page.locator(`//a[.='${visitName}']`);
    await visitLink.click();

    return this;
  }

  async checkAutoRepeat() {
    console.log('Checking Auto Repeat');
    const checkbox = this.page.locator('//input[@id="CCS_cphMain_rdRecurrence_C_ckAutoRepeat" and @type="checkbox"]');
    await checkbox.check();

    return this;
  }

  async fillVisitName(visitName: string, value: string) {
    console.log(`Filling visit name: ${visitName} with ${value}`);
    const inputVisitName = this.page.locator(`//input[contains(@id, 'txtEditVisit') and @value='${visitName}']`);
    await inputVisitName.fill(value);
  }

  async selectType(visitName: string, value: string) {
    console.log(`Selecting Type ${value} for visit: ${visitName}`);

    const dropdown = this.page.locator(
      `//input[@value='${visitName}']/../following-sibling::td/div[contains(@id, rcbtype)]`
    );

    const dropDownId = await dropdown.getAttribute('id');
    const option = this.page.locator(`//div[@id='${dropDownId}_DropDown']//li[contains(., '${value}')]/span`);

    await dropdown.scrollIntoViewIfNeeded();
    await dropdown.click();
    await option.click();
  }
}
