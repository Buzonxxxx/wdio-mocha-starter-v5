describe('Test the various WebdriverIO Wait Commands', () => {
  beforeEach(() => {
    browser.url('./');
  });

  // it('Test waitForExist', () => {
  //   // https://webdriver.io/docs/api/element/waitForExist.html
  //   const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
  //   clickByXpathSelector.click();
  //   browser.switchWindow('WebDriver | Ajax-Loader');

  //   // Wait for an element for the provided amount of milliseconds to be present within the DOM.
  //   const clickMeButton = $('//*[text()="CLICK ME!"]/..');
  //   clickMeButton.waitForExist(10000);
  //   clickMeButton.click();
  // }); // test will fail... even though its in the DOM doesnt mean it clickable!!

  // it('Test waitForDisplayed', () => {
  //   // https://webdriver.io/docs/api/element/waitForDisplayed.html
  //   const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
  //   clickByXpathSelector.click();
  //   browser.switchWindow('WebDriver | Ajax-Loader');

  //   // Wait for an element for the provided amount of milliseconds to be present within the DOM.
  //   const clickMeButton = $('//*[text()="CLICK ME!"]/..');
  //   clickMeButton.waitForDisplayed(10000);
  //   clickMeButton.click();
  // }); // test will pass...

  // it('Test waitForEnabled', () => {
  //   // https://webdriver.io/docs/api/element/waitForEnabled.html
  //   const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
  //   clickByXpathSelector.click();
  //   browser.switchWindow('WebDriver | Ajax-Loader');

  //   const clickMeButton = $('//*[text()="CLICK ME!"]/..');
  //   // Wait for an element (selected by css selector) for the provided amount of milliseconds to be (dis/en)abled.
  //   clickMeButton.waitForEnabled(10000, true); // will check whether the element is enabled and wait for it to turn false (Become Disabled) - will cause the test to fail
  //   clickMeButton.waitForEnabled(10000, false); // will check whether the element is enabled - will pass

  //   // true: waits for element to become disabled- this test will fail
  //   browser.pause(8000);
  //   clickMeButton.waitForEnabled(10000, true);
  //   clickMeButton.click();

  //   // false: waits for element to become enabled - this test will pass
  //   browser.pause(8000);
  //   clickMeButton.waitForEnabled(10000, false);
  //   clickMeButton.click();
  // }); // test will fail

  it('Test Fixed Timeout', () => {
    // https://webdriver.io/docs/api/browser/pause.html
    const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    clickByXpathSelector.click();
    browser.switchWindow('WebDriver | Ajax-Loader');

    const clickMeButton = $('//*[text()="CLICK ME!"]/..');
    browser.pause(12000);
    clickMeButton.click();
  }); // test will pass
});
