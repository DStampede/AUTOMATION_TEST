import { element, by, browser } from 'protractor';
import { FormPage } from './form.po';
import { EmployeeDetails } from '../model/employee.class';

export class DashboardPage {
 
  static get resources() {
    return element(by.linkText('Resources'));
  }
    static get employee() {
    return element(by.linkText('Employees'));
  }
    static get newButton() {
    return element(by.id('New'));
  }
    static async gotoEmployee() {
    await DashboardPage.resources.click();
    await DashboardPage.employee.click();
  }
    static get newEmployeeButton() {
    return element(by.buttonText('New Employee'));
  }
    static async readEmployee() {
    await element(by.linkText('abner')).click();
    await browser.sleep(1000);
  }
    static async createEmployee(createData: EmployeeDetails) {
    await this.newEmployeeButton.click();
    await FormPage.fillForm(createData);
    await FormPage.formButton('Add').click();
  }
    static async updateEmployee(updateData: EmployeeDetails): Promise<EmployeeDetails> {
    await FormPage.fillForm(updateData);
    await FormPage.formButton('Update').click();

    return updateData;
  }
  static deleteEmployeeButton(index: number) {
    return element.all(by.buttonText('Delete')).get(index);
  }
  static async deleteEmployee() {
    await this.deleteEmployeeButton(3).click();
  }
}
