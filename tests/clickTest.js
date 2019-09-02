describe('Test that button is clickable once the Ajax loader completes loading', () => {
  it('Attempt to click the button after 7 seconds',  function() {
    browser.url('/Ajax-Loader/index.html')
    this.timeout(20000)
    browser.pause(7000)
    browser.click('#button1')
    browser.pause(7000)
  })
})