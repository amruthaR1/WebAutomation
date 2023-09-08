const chai = require("chai");
const expect = chai.expect;
const LogIn = require("../pageobjects/login.page");

describe("LogIn Page", () => {
  beforeEach(async () => {
    LogIn.open();
  });

  it("Should go to login page and check the title", async () => {
    expect(await browser.getTitle()).to.be.equal(LogIn.title);
  });

  it("-should check session location error", async () => {
    await (
      await (await LogIn.setUserName("admin")).setPassword("Admin123")
    ).clickLogInButton();

    expect(await LogIn.isSessionLoactionErrorMessagePresent()).to.be.true;
  });

  it("-should enter wrong credentials and assert error message", async () => {
    await (
      await (
        await (await LogIn.setUserName("admin")).setPassword("Admin")
      ).setSessionLocation("Laboratory")
    ).clickLogInButton();
    expect(await LogIn.isInvalidCredentialErrorMessagePresent()).to.be.true;
  });

  it("+Should enter the username and password", async () => {
    await (
      await (
        await (await LogIn.setUserName("admin")).setPassword("Admin123")
      ).setSessionLocation("Laboratory")
    ).clickLogInButton();

    expect(await browser.getTitle()).to.be.equal("Home");

    const logout = await $('[class="icon-signout small"]');
    await logout.click();
  });

  it("+should click cant login assert the alert pop up", async () => {
    LogIn.clickCantLogIn();

    expect(await LogIn.isPopUpPresent()).to.be.true;
  });
});
