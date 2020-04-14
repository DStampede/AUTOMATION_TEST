import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { DashboardPage } from '../po/dashboard.po';
import { Employee, EmployeeDetails } from '../model/employee.class';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

let data: EmployeeDetails;

Given('I go to {string}', async function (action: string) {
    await browser.get('http://clark.titusgt.com:6042/#/hmws/dashboard');       
});

Given('I am on {string}', async function (action: string) {
    await browser.get('http://clark.titusgt.com:6042/#/hmws/employees'); 
});

Given('I have an existing {string}', async function (action: string) {
  switch (action) {
        case 'Department':
          await DashboardPage.gotoEmployee();
          break;
        case 'Employee':
          await DashboardPage.readEmployee();
          break;

        default:
    throw Error(`Action "${action}" is not existing`);
      }
});

When('I {string} a {string}', async function (action: string, view: string) {
  switch (action) {
    case 'create':
      data = new Employee({
          username:       'Corona',
          employeenumber: 'STS69',
          title:          'Virus',
          fullname:       'Covid',
          department:     'Webdev',
          jobtitle:       'CEO',
          taxID:          '69BBWMILF',
          dateOfHire:     'February 30, 2999'
        }).details;
      break;
      await DashboardPage.createEmployee(data);

    case 'read':
      await DashboardPage.readEmployee();
      break;    

    case 'edit':
        data = await DashboardPage.updateEmployee(new Employee(
                  {
          username:       'Beerus',
          employeenumber: 'STS12',
          title:          'VirusCor',
          fullname:       'Covid2020',
          department:     'Webdev',
          jobtitle:       'CEO',
          taxID:          '69BBWMILF',
          dateOfHire:     'February 30, 2999'
                  }
          ).details);
      break;

    case 'delete':
                await DashboardPage.deleteEmployee();
      break;

    default:
throw Error(`Action "${action}" is not existing`);
  }

});

Then('I should be redirected to the details page of the created {string}', async function (action:string) {
     await DashboardPage.gotoEmployee();
});
      
Then('I should see the {string} item details of the {string}', function (action: string, view: string){
      browser.get('http://clark.titusgt.com:6042/#/hmws/employees'); 
});
Then('I should {string} the details of the {string} in the table', function (action: string, view:string) {
      browser.get('http://clark.titusgt.com:6042/#/hmws/employees'); 
});
