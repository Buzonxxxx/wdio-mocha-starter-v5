import Base_PO from './Base_PO';

const config = require('../config/main-config');
const generator = require('../utils/dataGenerators');

class ContactUs_PO extends Base_PO {
  open() {
    super.open('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
  }

  get firstName() {
    return $("input[name='first_name']");
  }

  get lastName() {
    return $("input[name='last_name']");
  }

  get emailAddress() {
    return $("input[name='email']");
  }

  get comments() {
    return $('textarea');
  }

  get submitButton() {
    return $("[type='submit']");
  }

  submit() {
    this.submitButton.click();
  }

  get successfulContactHeader() {
    return $("//div[@id='contact_reply']/h1");
  }

  successfulContactUsSubmission() {
    this.firstName.waitForDisplayed(5000);
    this.firstName.setValue(config.firstName);
    this.lastName.setValue(config.lastName);
    this.emailAddress.setValue(generator.generateRandomEmailAddress());
    this.comments.setValue(generator.generateRandomString());
    this.submit();
    expect(this.successfulContactHeader.getText()).to.contain('Thank You for your Message!');
  }
}
export default new ContactUs_PO();
