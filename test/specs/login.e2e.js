const chai = require("chai");
const expect = chai.expect;
const LogIn = require("../pageobjects/login.page");

describe("LogIn Page", () => {
  beforeEach(async () => {
    LogIn.open();
  });

  it("1. Should go to login page and check the title", async () => {
    expect(await browser.getTitle()).to.be.equal(LogIn.title);
  });

  it("2. should check session location error", async () => {
    await LogIn.setUserName("admin").setPassword("Admin123").clickLogInButton();

    expect(await LogIn.isSessionLoactionErrorMessagePresent()).to.be.true;
  });

  it("3. should enter wrong credentials and assert error message", async () => {
    await LogIn.setUserName("admin")
      .setPassword("Admin")
      .setSessionLocation("Laboratory")
      .clickLogInButton();
    expect(await LogIn.isInvalidCredentialErrorMessagePresent()).to.be.true;
  });

  it("4. Should enter the username and password", async () => {
    await LogIn.setUserName("admin")
      .setPassword("Admin123")
      .setSessionLocation("Laboratory")
      .clickLogInButton();

    expect(await browser.getTitle()).to.be.equal("Home");

    const logout = await $('[class="icon-signout small"]');
    await logout.click();
  });

  it("5. should click cant login assert the alert pop up", async () => {
    LogIn.clickCantLogIn();

    expect(await LogIn.isPopUpPresent()).to.be.true;
  });
});
