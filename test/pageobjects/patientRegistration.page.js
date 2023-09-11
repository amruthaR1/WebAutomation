const LogIn = require("../pageobjects/login.page");

class PatientRegistration {
  async open() {
    LogIn.open();
    await (
      await (
        await (await LogIn.setUserName("admin")).setPassword("Admin123")
      ).setSessionLocation("Laboratory")
    ).clickLogInButton();
    await (await $('[class="icon-user"]')).click();
  }

  async clickNextButton() {
    await (await $('[id = "next-button"]')).click();
    return this;
  }

  async fillGivenName(name) {
    await (await $('[name="givenName"]')).setValue(name);
    return this;
  }
  async fillFamilyName(fname) {
    await (await $('[name="familyName"]')).setValue(fname);
    return this;
  }

  async selectGender(gender) {
    await (await $('[id="gender-field"]')).selectByVisibleText(gender);
    return this;
  }
  async fillBirthdayDate(date) {
    await (await $('[id="birthdateDay-field"]')).setValue(date);
    return this;
  }

  async fillBirthdayMonth(month) {
    await (await $('[name="birthdateMonth"]')).selectByVisibleText(month);
    return this;
  }
  async fillBirthdayYear(year) {
    await (await $('[name="birthdateYear"]')).setValue(year);
    return this;
  }

  async fillAddress(){
    await (await $("#address1")).setValue("Service Road");
    await (await $("#address2")).setValue("Indiranagar");
    await (await $("#cityVillage")).setValue("Bangalore");
    await (await $("#stateProvince")).setValue("Karnataka");
    await (await $("#country")).setValue("India");
    await (await $("#postalCode")).setValue("560026");
    return this;
  }
  async fillPhoneNumber(number){
    await (await $('[name="phoneNumber"]')).setValue(number);
    return this;
  }
  async fillRelation(){
    await (await $("#relationship_type")).selectByVisibleText("Sibling");
    await (await $('[placeholder="Person Name"]')).setValue("Harshitha");
    return this;
  }
  async submit(){
    await (await $("#submit")).click();
  }
}

module.exports = new PatientRegistration();
