describe('Test the webdriveruniversity homepage', () => {
  it('Output the height of the homepage carousel', () => {
    browser.url('/');
    browser.pause(2000);
    const divCarouselSelector = $('#udemy-promo-thumbnail');
    const divCarouselHeight = divCarouselSelector.getCSSProperty('height');
    const divCarouselBorderColor = divCarouselSelector.getCSSProperty('border-color');
    console.log(divCarouselHeight);
    console.log(divCarouselBorderColor);
  });
});
