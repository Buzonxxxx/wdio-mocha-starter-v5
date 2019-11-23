describe('Add command', () => {
  beforeEach(() => {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
  });

  it('Test webdriveruni login protal', () => {
    const clickById = $('#login-portal');
    clickById.click();

    browser.switchWindow('WebDriver | Login Portal');

    // const loginPageTitle = browser.getTitle();
    // const loginPageUrl = browser.getUrl();
    const loginPageData = browser.getUrlAndTitle();

    expect(loginPageData.title).to.contains('Login Portal');
    expect(loginPageData.url).to.contains('Login-Portal');
  });
});
