const LogIn = require("../pageobjects/login.page");

class ManageServiceType {
  async open() {
    LogIn.open();
    await (
      await (
        await (await LogIn.setUserName("admin")).setPassword("Admin123")
      ).setSessionLocation("Laboratory")
    ).clickLogInButton();
    await (
      await $(
        '[id="appointmentschedulingui-homeAppLink-appointmentschedulingui-homeAppLink-extension"]'
      )
    ).click();
    await (
      await $('[id="appointmentschedulingui-manageAppointmentTypes-app"]')
    ).click();
  }

  async clickAddService() {
    await (await $('[class="icon-plus"]')).click();
  }

  async clickSave() {
    await (await $('[id="save-button"]')).click();
  }

  async getErrorMessage() {
    await (
      await $("/html/body/div/div[3]/form/p[2]/span")
    ).waitForDisplayed({ timeout: 3000 });
    return await (await $("/html/body/div/div[3]/form/p[2]/span")).getText();
  }
  async goToManageService() {
    await (await $('//*[@id="breadcrumbs"]/li[2]/a')).click();
  }

  async fillServiceDetails(name, duration) {
    await (await $('[id="name-field"]')).setValue(name);
    await (await $('[id="duration-field"]')).setValue(duration);
  }

  
}

module.exports = new ManageServiceType();
