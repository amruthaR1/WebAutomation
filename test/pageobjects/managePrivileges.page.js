const LogIn = require("../pageobjects/login.page");

class ManagePrivilege {
  async open() {
    LogIn.open();
    await (
      await (
        await (await LogIn.setUserName("admin")).setPassword("Admin123")
      ).setSessionLocation("Laboratory")
    ).clickLogInButton();
    await (await $('[class="icon-tasks"]')).click();
    await (
      await $(
        '//*[@id="org-openmrs-module-adminui-Privileges-org-openmrs-module-adminui-Privileges-extension"]'
      )
    ).click();
  }

  async clickAddPrivileges() {
    await (await $('[value="Add New Privilege"]')).click();
  }
  async setPrivilegeDetails(name, description) {
    await (await $('[id="privilege-field"]')).setValue(name);
    await (await $('[id="description-field"]')).setValue(description);
  }

  async savePrivilege() {
    await (await $('[id="save-button"]')).click();
  }

  async getAddedPrivilegeName() {
    return await (await $('[valign="top"]')).getText();
  }

  async deletePrivilege() {
    await (await $('[class="icon-trash delete-action right"]')).click();
  }

  async confirmDeletion() {
    await (await $('[class="confirm right"]')).click();
  }

  async isDeletionConfirmationMessageExists() {
    return await (
      await $('[class="toast-container toast-position-top-right"]')
    ).isDisplayed();
  }

  async searchPrivilege(name) {
    await (await $('[aria-controls="list-privileges"]')).setValue(name);
  }

  async getSearchedPrivilegeName(){
    return await (await $('[valign = "top"]')).getText();
  }
}

module.exports = new ManagePrivilege();
