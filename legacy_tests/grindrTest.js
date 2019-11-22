const MainPage = require('../pageObjects/GrindrMainPage');

describe('Test Main PAge', () => {
  
   it('Enter Sr. Backend Engineer recruit page', function () {
    this.timeout(20000);
    browser.url("https://www.grindr.com/");
    browser.setViewportSize({
      width: 1200,
      height: 800
    });
    // enter carees page
    MainPage.careers.click();
    MainPage.srBackendEng.waitForVisible(5000);
    // scroll to Sr.Backend position
    MainPage.srBackendEng.scroll(100,600);
    MainPage.srBackendEng.click();
    // switch to JD page
    const tabIDs = browser.getTabIds();
    browser.switchTab(tabIDs[1]);
    // assertion
    MainPage.applyButton.waitForVisible(5000);
   }) 
})
