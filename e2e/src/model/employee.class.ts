export interface EmployeeDetails {
  username: string;
  employeenumber: string;
  title: string;
  fullname: string;
  department: string;
  jobtitle: string;
  taxID: string;
  dateOfHire: string;

}

export class Employee implements EmployeeDetails {
  username: string;
  employeenumber: string;
  title: string;
  fullname: string;
  department: string;
  jobtitle: string;
  taxID: string;
  dateOfHire: string;
  details: EmployeeDetails;

  constructor(
      employeeDetails: EmployeeDetails
  ) {
    this.username = employeeDetails.username;
    this.employeenumber = employeeDetails.employeenumber;
    this.title = employeeDetails.title;
    this.fullname = employeeDetails.fullname;
    this.department = employeeDetails.department;
    this.jobtitle = employeeDetails.jobtitle;
    this.taxID = employeeDetails.taxID;
    this.dateOfHire = employeeDetails.dateOfHire;

  }

  get getusername() {
    return this.username;
  }

  get getemployeenumber() {
    return this.employeenumber;
  }

  get gettitle() {
    return this.title;
  }

  get getfullname() {
    return this.fullname;
  }

  get getdepartment() {
    return this.department;

  }get getjobtitle() {
    return this.jobtitle;
  }

  get gettaxID() {
    return this.taxID;
  }

  get getdateOfHire() {
    return this.dateOfHire;
  }

  set updateusername(newUserName: string) {
    this.username = newUserName;
  }

  set updateemployeenumber(newEmployeeNumber: string) {
    this.employeenumber = newEmployeeNumber;
  }

  set updatetitle(newTitle: string) {
    this.title = newTitle;
  }

  set updatefullname(newFullname: string) {
    this.fullname = newFullname;
  }

  set updatedepartment(newDepartment: string) {
    this.department = newDepartment;
  }
  set updatejobtitle(newJobTitle: string) {
    this.jobtitle = newJobTitle;
  }

  set updatetaxID(newTaxID: string) {
    this.taxID = newTaxID;
  }

  set updatedateofHire(newDateOfHire: string) {
    this.dateOfHire = newDateOfHire;
  }

  get Employee(): EmployeeDetails {
    return {
      username: this.username,
      employeenumber: this.employeenumber,
      title: this.title,
      fullname: this.fullname,
      department: this.department,
      jobtitle: this.jobtitle,
      taxID: this.taxID,
      dateOfHire: this.dateOfHire,
    };
  }
}

