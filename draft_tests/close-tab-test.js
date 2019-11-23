describe('Close tab Test', () => {
  beforeEach(() => {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
  });

  it('By ID', () => {
    const clickById = $('#contact-us');
    clickById.click();
    console.log('HOMEPAGE TITLE is:', browser.getTitle());
    browser.pause(2000);

    browser.switchWindow('WebDriver | Contact Us');
    console.log('CONTACT US PAGE TITLE is:', browser.getTitle());
    browser.closeWindow();
    browser.pause(2000);
  });
});
