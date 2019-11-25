import ContactUs_PO from '../page-objects/ContactUs_PO';

describe('Test contact us page', () => {
  beforeEach(() => {
    ContactUs_PO.open();
  });

  it('Submit all information via contact us page', () => {
    ContactUs_PO.successfulContactUsSubmission();
  });
});
