const config = require('../config/main-config');

describe('Contact us Test', () => {
  beforeEach(() => {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
    const pageDeailts = browser.getUrlAndTitle();
    expect(pageDeailts.title).to.equal('WebDriverUniversity.com');
    expect(pageDeailts.url).to.equal('http://www.webdriveruniversity.com/');
  });

  it('Verify contact us page', () => {
    // const contactUSButton = $('#contact-us');
    // contactUSButton.click();
    browser.waitAndClick('#contact-us');

    browser.switchWindow('WebDriver | Contact Us');

    // reduce flaky test
    browser.pause(3000);

    // const firstName = $("input[name='first_name']");
    // const lastName = $("input[name='last_name']");
    // const emailAddress = $("input[name='email']");
    // const message = $('textarea');
    // const submitButton = $("[type='submit']");

    // firstName.addValue(config.firstName);
    // lastName.addValue(config.lastName);
    // emailAddress.addValue('louis.liao@xxx.com');
    // message.addValue('Hello World!');

    browser.waitAndSendkeys("input[name='first_name']", config.firstName);
    browser.waitAndSendkeys("input[name='last_name']", config.lastName);
    browser.waitAndSendkeys("input[name='email']", 'louis.liao@xxx.com');
    browser.waitAndSendkeys('textarea', 'Hello World!');

    // submitButton.click();
    browser.waitAndClick("[type='submit']");

    expect(browser.getUrl()).to.equal('http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
  });
});
