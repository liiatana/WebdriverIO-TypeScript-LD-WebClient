//import { expect } from 'chai';
import { Test } from './../models';
import { Element } from '@wdio/sync';

class LoginPage {
	private test: Test = null;

	private loginField: Element= $ ('//*[@id="login-field"]');
	private pwdField: Element =$('//*[@id="psw-field"]' );
	private loginButton: Element = $ ('//*[@id="sql-auth-btn"]');


	constructor() {
		this.test = {
			alias: '/LanDocs _ Вход.html',
			title: 'LanDocs | Вход',
		};

	}
	
	public open () {
		browser.url('login');
		browser.pause(3000);
	}

	public fillAuthInfo(username:string, password:string):void{

		this.loginField.setValue(username);
		this.pwdField.setValue(password);
		this.loginButton.click();
		browser.pause(10000);

	}

	public getExpectedTitle(){
		return this.test.title;
	}

}

const loginPage = new LoginPage();
Object.freeze(loginPage);
export default loginPage;
