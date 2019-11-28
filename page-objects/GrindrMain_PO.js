import Base_PO from './Base_PO';

class GrindrMain_PO extends Base_PO {
  open() {
    super.open('https://www.grindr.com/');
  }

  get careers() {
    return $(".pc [href='\/careers\/']");
  }

  get qaAnalyst() {
    return $("li:nth-of-type(2) > a[target='_blank']");
  }

  get applyButton() {
    return $('#apply_button');
  }
}

module.exports = new GrindrMain_PO();
