import { element, by, ElementFinder } from 'protractor';
export class SecurityPage {
    static get usernameField(): ElementFinder {
        return element(by.id('username'));
    }
    static get passwordField(): ElementFinder {
        return element(by.id('password'));
    }
    static get loginButton(): ElementFinder {
        return element(by.id('login'));
    }
    static async login() {
       await this.usernameField.sendKeys('hmws');
       await this.passwordField.sendKeys('test');
       await this.loginButton.click();
    }
}

