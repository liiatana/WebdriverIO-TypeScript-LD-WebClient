import loginPage from '../pages/login.page';
import { expect } from 'chai';

describe('Авторизация', () => {
	before(() => {
		loginPage.open();
	});

	it('Название страницы', () => {
		let realTitle = browser.getTitle();
		expect(realTitle).to.equal(loginPage.getExpectedTitle());
		
	});

	it('Вход в личный кабинет', () => {
		loginPage.fillAuthInfo('dba','sql');
		
	});
});
