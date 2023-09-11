const LogIn = require("../pageobjects/login.page");

class FindPatient {
  async open() {
    LogIn.open();
    await (
      await (
        await (await LogIn.setUserName("admin")).setPassword("Admin123")
      ).setSessionLocation("Laboratory")
    ).clickLogInButton();
  }

  async goToSearch(){
    await (await $('[class="icon-search"]')).click();
  }

  async search(name){
    await $('[id="patient-search"]').setValue(name);
    await browser.keys("Enter");
    await browser.keys("Enter");
  }

  async getFoundPatientName(){
    return await (await $("[class='PersonName-givenName']")).getText();
  }

  async getFoundPatientId(){
    return await (
      await $('//*[@id="content"]/div[6]/div[2]/div/span')
    ).getText();
  }
  async goToHome(){
    await (await $('[class="icon-home small"]')).click();
  }

  async notFoundMessage(){
    await (
      await $('[class="dataTables_empty"]')
    ).waitForDisplayed({ timeout: 4000 });
    return await (await $('[class="dataTables_empty"]')).isDisplayed();
  }
}

module.exports = new FindPatient();
