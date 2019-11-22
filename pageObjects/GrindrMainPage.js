class GrindrMainPage {
  get careers() {
    return $(".pc [href='\/careers\/']");
  }

  get srBackendEng() {
    return $("[href='https\:\/\/boards\.greenhouse\.io\/grindr\/jobs\/1423031']");
  }

  get applyButton() {
    return $('#apply_button');
  }
}

module.exports = new GrindrMainPage();
