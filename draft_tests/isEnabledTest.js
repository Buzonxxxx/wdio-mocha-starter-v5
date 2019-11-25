beforeEach(() => {
  browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
  browser.setWindowSize(1800, 1200);
  browser.pause(2000);
});

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', () => {
  it('Dropdown item orange is disabled therefore should return false', () => {
    const dropdownOragne = $("option[value='orange']");
    const isEnabled = dropdownOragne.isEnabled();
    console.log(`Dropdown item orange has a value of: ${isEnabled}`);
    assert.equal(isEnabled, false);
  });

  it('Dropdown item grape is enabled therefore should return true', () => {
    const dropdownGrape = $("option[value='grape']");
    const isEnabled = dropdownGrape.isEnabled();
    console.log(`Dropdown item grape has a value of: ${isEnabled}`);
    assert.equal(isEnabled, true);
  });

  it('Option2 is enabled therefore should return true', () => {
    const checkboxOption2 = $("input[value='option-2']");
    const isEnabled = checkboxOption2.isEnabled();
    console.log(`Option2 has a value of: ${isEnabled}`);
    assert.equal(isEnabled, true);
  });

  it('Radio button pumpkin is enabled therefore should be true', () => {
    const radioButtonPumpkin = $("input[value='pumpkin']");
    const isEnabled = radioButtonPumpkin.isEnabled();
    console.log(`Radio button pumpkin has a value of: ${isEnabled}`);
    assert.equal(isEnabled, true);
  });

  it('Radio button cabbage is disabled therefore should be false', () => {
    const radioButtonCabbage = $("input[value='cabbage']");
    const isEnabled = radioButtonCabbage.isEnabled();
    console.log(`Radio button cabbage has a value of: ${isEnabled}`);
    assert.equal(isEnabled, false);
  });
});
