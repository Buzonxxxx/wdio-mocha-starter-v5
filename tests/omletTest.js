
const MainPage = require("../pageObjects/omletMain_Page")

describe('Login function test', () => {
  it('should login successfully with correct id and password', function() {
    this.timeout(20000)
    // login/register page
    browser.url("https://omlet.gg/");
    MainPage.loginSignUpButton.click();
    MainPage.loginButton.waitForVisible(5000);
    
    // login page
    MainPage.loginButton.click()
    MainPage.nextButton.waitForVisible(5000);

    // input id/pwd
    MainPage.InputID.setValue("funoffline");
    MainPage.InputPW.setValue("offlinetest");
    MainPage.nextButton.click();
  });
  
  it('should logout successfully', () => {
    // back to main page
    MainPage.userName.waitForVisible(5000)
    MainPage.userName.click();
    MainPage.menuLogout.waitForVisible(3000)
    MainPage.menuLogout.click();
    MainPage.loginSignUpButton.waitForVisible(5000)
    const title = browser.getTitle()
    expect(title).to.equal("Omlet Arcade")
  });
});

describe('Take screenshot test', () => {
  it('should take and save screenshot of profile page', function() {
    this.timeout(20000)
    browser.url("https://omlet.gg/profile/sassygaming");
    browser.waitForVisible(".subtitle", 10000)
  	browser.saveScreenshot("./sassygaming-profile.png");
  });
});