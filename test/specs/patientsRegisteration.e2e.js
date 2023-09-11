const chai = require("chai");
const expect = chai.expect;
const Patientregistration = require("../pageobjects/patientRegistration.page");

describe("Patients Registration", () => {
  before(async () => {
    Patientregistration.open();
  });

  it("Should show the error message when tried to move to next fields", async () => {
    await Patientregistration.clickNextButton();
    const errorMessage = await $('[class="field-error"]');
    const exists = await errorMessage.isDisplayed();
    expect(exists).to.be.true;
  });

  it("Should register a patient", async () => {
    await (
      await (
        await (
          await (
            await (
              await (
                await (
                  await (
                    await (
                      await (
                        await (
                          await (
                            await (
                              await (
                                await (
                                  await Patientregistration.fillGivenName(
                                    "Amrutha"
                                  )
                                ).fillFamilyName("R")
                              ).clickNextButton()
                            ).selectGender("Female")
                          ).clickNextButton()
                        ).fillBirthdayDate("01")
                      ).fillBirthdayMonth("January")
                    ).fillBirthdayYear("2001")
                  ).clickNextButton()
                ).fillAddress()
              ).clickNextButton()
            ).fillPhoneNumber("123456")
          ).clickNextButton()
        ).fillRelation()
      ).clickNextButton()
    ).submit();
    await browser.pause(4000);
    expect(
      await (await $('[class="PersonName-givenName"]')).getText()
    ).to.be.equal("Amrutha");

    await (await $('[class="icon-home small"]')).click();
  });

  it("should check the presence of error message when enetred a string in birthday field", async () => {
    await (
      await (
        await (
          await (
            await (
              await (
                await Patientregistration.fillGivenName("AAAA")
              ).fillFamilyName("BBBB")
            ).clickNextButton()
          ).selectGender("Male")
        ).clickNextButton()
      ).fillBirthdayDate("abc")
    ).clickNextButton();

    expect(
      await (await $(
        "/html/body/div/div[3]/form/section[1]/div/fieldset[3]/p[2]/span"
      )).isDisplayed()
    ).to.be.true;
  });
});
