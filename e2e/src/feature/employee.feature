@Employee
Feature: Employee
    As a user
    I should be able to Create, Read, Update, and Delete an Employee.

  @CreateEmployee 
    Scenario: Create an Employee
       Given I go to "http://clark.titusgt.com:6042/#/hmws/employees"
       And   I have an existing "Department"
       When  I "create" a "Employee"
       Then  I should be redirected to the details page of the created "Employee"
       And   I should see the "created" item details of the "Employee"

  @ReadEmployee 
    Scenario: Read Employee details from the table
       Given I have an existing "Employee"
        When I go to "http://clark.titusgt.com:6042/#/hmws/employees"
        Then I should "see" the details of the "Employees" in the table

  @EditEmployee 
    Scenario: Edit a Employee
       Given I have an existing "Employee"
         And I am on "http://clark.titusgt.com:6042/#/hmws/employees"
        When I "edit" a "Employee"
        Then I should "see" the details of the "Employees" in the table
         And I should see the "updated" item details of the "Employee" 

  @DeleteEmployee 
    Scenario: Delete a Employee
       Given I have an existing "Employee"
         And I am on "http://clark.titusgt.com:6042/#/hmws/employees"
        When I "delete" a "Employee"
        Then I should "not see" the details of the "Employee" in the table