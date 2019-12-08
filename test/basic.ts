//const assert = require('assert')
//const chai    = require('chai').should() ;
import { expect } from 'chai';

describe('Стартовая страница', () => {
	it('Название страницы', () => {
		browser.url('http://dsud-fk-msk/landocsweb/login');
		browser.pause(5000);
		let title = browser.getTitle();
		//assert.strictEqual(title, 'LanDocs | Вход')
		expect(title).to.equal('LanDocs | Вход');
	});
});
