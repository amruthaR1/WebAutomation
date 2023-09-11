const Page = require("./page");

class LogIn extends Page {
  open() {
    super.open("https://demo.openmrs.org/openmrs/login.htm");
  }

  get title() {
    return "Login";
  }

  async setUserName(username) {
    await (await $("#username")).setValue(username);
    return this;
  }

  async setPassword(password) {
    await (await $("#password")).setValue(password);
    return this;
  }

  async clickLogInButton() {
    await (await $("#loginButton")).click();
    return this;
  }

  async setSessionLocation(location) {
    const locationId = '[id="' + location + '"]';
    await (await $(locationId)).click();
    return this;
  }

  async isSessionLoactionErrorMessagePresent() {
    return await (await $("#sessionLocationError")).isExisting();
  }

  async isInvalidCredentialErrorMessagePresent() {
    return await (await $("[id='error-message']")).isExisting();
  }

  async clickCantLogIn() {
    const cantLogin = await $("#cantLogin");
    await cantLogin.click();
  }

  async isPopUpPresent() {
    return await (await $('[class="dialog-instructions"]')).isExisting();
  }
  async enter(){
    await browser.keys('Enter');
  }
}

module.exports = new LogIn();
