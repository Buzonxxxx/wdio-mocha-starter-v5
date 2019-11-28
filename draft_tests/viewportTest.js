beforeEach(() => {
  browser.url('Hidden-Elements/index.html');
});

describe('Test whether specific elements are visible within viewport', () => {
  it('should resize the current viewport', () => {
    browser.setWindowSize(1200, 800);
    browser.pause(2000);
    console.log(browser.getWindowSize());
    const { width, height } = browser.getWindowSize(); // include tab area
    console.log(`window size width: ${width}`);
    console.log(`window size height: ${height}`);
  });

  it('should detect if an element is visible', () => {
    const notDisplayedElement = $('#not-displayed');
    let isVisibleWithinViewport = notDisplayedElement.isDisplayedInViewport();
    console.log(isVisibleWithinViewport); // false

    const visibleHidden = $('#visibility-hidden');
    isVisibleWithinViewport = visibleHidden.isDisplayedInViewport();
    console.log(isVisibleWithinViewport); // false

    const zeroOpacity = $('#zero-opacity');
    isVisibleWithinViewport = zeroOpacity.isDisplayedInViewport();
    console.log(isVisibleWithinViewport); // false

    const h1 = $('h1');
    isVisibleWithinViewport = h1.isDisplayedInViewport('h1');
    console.log(isVisibleWithinViewport); // true
  });
});
