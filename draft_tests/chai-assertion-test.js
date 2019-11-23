describe('Chai assettion', () => {
  beforeEach(() => {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
  });

  it('Test webdriveruni login protal', () => {
    const clickById = $('#login-portal');
    clickById.click();

    browser.switchWindow('WebDriver | Login Portal');

    const loginPageTitle = browser.getTitle();
    const loginPageUrl = browser.getUrl();

    expect(loginPageTitle).to.contains('Login Portal');
    expect(loginPageUrl).to.contains('Login-Portal');
  });
});
