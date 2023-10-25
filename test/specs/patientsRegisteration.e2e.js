const chai = require("chai");
const expect = chai.expect;
const Patientregistration = require("../pageobjects/patientRegistration.page");

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

describe("Patients Registration", () => {
  before(async () => {
    Patientregistration.open();
  });

  it(" 1. Should show the error message when tried to move to next fields", async () => {
    await Patientregistration.clickNextButton();
    const errorMessage = await $('[class="field-error"]');
    const exists = await errorMessage.isDisplayed();
    expect(exists).to.be.true;
  });

  it("2. Should register a patient", async () => {
    const givenName = generateRandomString(5);

    await Patientregistration.fillGivenName(givenName)
      .fillFamilyName("R")
      .clickNextButton()
      .selectGender("Female")
      .clickNextButton()
      .fillBirthdayDate("01")
      .fillBirthdayMonth("January")
      .fillBirthdayYear("2001")
      .clickNextButton()
      .fillAddress()
      .clickNextButton()
      .fillPhoneNumber("123456")
      .clickNextButton()
      .fillRelation()
      .clickNextButton()
      .submit();
    await browser.pause(4000);
    expect(await $('[class="PersonName-givenName"]'))
      .getText()
      .to.be.equal(givenName);

    await (await $('[class="icon-home small"]')).click();
  });

  it("3. should check the presence of error message when enetred a string in birthday field", async () => {
    await $('[class="icon-home small"]').click();
    await $('[class="icon-user"]').click();

    await Patientregistration.fillGivenName("AAAA")
      .fillFamilyName("BBBB")
      .clickNextButton()
      .selectGender("Male")
      .clickNextButton()
      .fillBirthdayDate("abc")
      .clickNextButton();

    expect(
      await $(
        "/html/body/div/div[3]/form/section[1]/div/fieldset[3]/p[2]/span"
      ).isDisplayed()
    ).to.be.true;
  });
});
