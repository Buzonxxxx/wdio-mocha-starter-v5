const config = require('../config/main-config');

describe('Contact us Test', () => {
  beforeEach(() => {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
  });

  it('Verify contact us page', () => {
    expect(browser.getTitle()).to.equal('WebDriverUniversity.com');
    expect(browser.getUrl()).to.equal('http://www.webdriveruniversity.com/');

    const contactUSButton = $('#contact-us');
    contactUSButton.click();

    browser.switchWindow('WebDriver | Contact Us');

    // reduce flaky test
    browser.pause(3000);

    const firstName = $("form#contact_form > input[name='first_name']");
    const lastName = $("form#contact_form > input[name='last_name']");
    const emailAddress = $("form#contact_form > input[name='email']");
    const message = $('textarea');
    const submitButton = $("[type='submit']");

    firstName.addValue(config.firstName);
    lastName.addValue(config.lastName);
    emailAddress.addValue('louis.liao@xxx.com');
    message.addValue('Hello World!');
    submitButton.click();

    expect(browser.getUrl()).to.equal('http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
  });
});
