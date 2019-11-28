const GrindrMain_PO = require('../page-objects/GrindrMain_PO');

describe('Test Main PAge', () => {
  beforeEach(() => {
    GrindrMain_PO.open();
  });

  it('Enter QA Analyst recruit page', function () {
    this.timeout(20000);
    // enter carees page
    GrindrMain_PO.careers.click();
    GrindrMain_PO.qaAnalyst.waitForDisplayed(5000);
    // scroll to QA Analyst position
    GrindrMain_PO.qaAnalyst.scrollIntoView();
    GrindrMain_PO.qaAnalyst.click();
    // switch to JD page
    browser.switchWindow('Job Application for QA Analyst at Grindr');
    // assertion
    GrindrMain_PO.applyButton.waitForDisplayed(5000);
  });
});
