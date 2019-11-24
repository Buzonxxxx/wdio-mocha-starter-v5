import ContactUs_PO from '../page-objects/ContactUs_PO';

const config = require('../config/main-config');
const generator = require('../utils/dataGenerators');

describe('Contact us Test', () => {
  beforeEach(() => {
    ContactUs_PO.open();
    browser.setWindowSize(1800, 1200);
    // browser.url('./');

    // const pageDeailts = browser.getUrlAndTitle();
    // expect(pageDeailts.title).to.equal('WebDriverUniversity.com');
    // expect(pageDeailts.url).to.equal('http://www.webdriveruniversity.com/');
  });

  it('Verify contact us page', () => {
    // const contactUSButton = $('#contact-us');
    // contactUSButton.click();
    // browser.waitAndClick('#contact-us');

    // browser.switchWindow('WebDriver | Contact Us');

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

    // browser.waitAndSendkeys("input[name='first_name']", config.firstName);
    // browser.waitAndSendkeys("input[name='last_name']", config.lastName);
    // browser.waitAndSendkeys("input[name='email']", generator.generateRandomEmailAddress());
    // browser.waitAndSendkeys('textarea', generator.generateRandomString());
    ContactUs_PO.firstName.setValue(config.firstName);
    ContactUs_PO.lastName.setValue(config.lastName);
    ContactUs_PO.emailAddress.setValue(generator.generateRandomEmailAddress());
    ContactUs_PO.comments.setValue(generator.generateRandomString());

    // submitButton.click();
    // browser.waitAndClick("[type='submit']");
    ContactUs_PO.submit();

    expect(ContactUs_PO.successfulContactHeader.getText()).to.contain('Thank You for your Message!');
  });
});
