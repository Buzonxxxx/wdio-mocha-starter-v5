describe("Selectors Test", () => {
    beforeEach(function() {
        browser.setWindowSize(1800, 1200)
        browser.url('./')
    })

    it("By ID", () => {
        const clickById = $("#contact-us")
        clickById.click();
    });
  });