describe('Inject javascript into the target website', () => {
  beforeEach(() => {
    browser.setWindowSize(1800, 1200);
    browser.url('./');
  });

  it('Change webdriveruni background color', () => {
    browser.execute(() => (document.body.style.backgroundColor = 'red'));
    browser.pause(5000);
  });
});
