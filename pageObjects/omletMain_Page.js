class Main_Page {
  get loginSignUpButton() {
    return $(".omlet-bar-login-button");
  } 
  get userName() {
    return $(".user-name");
  }
  get menuLogout() {
    return $("#menu_logout");
  }
  get loginButton() {
    return $(".buttonS");
  } 
  get nextButton() {
    return $("[src='\/img\/oma_btn_signin_continue_normal\.png']");
  }
  get InputID() {
    return $("#omid");
  } 
  get InputPW() {
    return $("#pass");
  }
}

module.exports = new Main_Page();