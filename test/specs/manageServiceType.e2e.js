const chai = require("chai");
const expect = chai.expect;
const ManageServiceType = require("../pageobjects/manageServiceType.page");

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

describe("Manage service type", () => {
  before(() => {
    ManageServiceType.open();
  });
  it("should add new service without filling any details and assert the error message", async () => {
    await ManageServiceType.clickAddService();
    await ManageServiceType.clickSave();
    expect(await ManageServiceType.getErrorMessage()).to.be.equal(
      "Duration must be a positive number"
    );
    await ManageServiceType.goToManageService();
  });

  it("adding new service - happy path", async () => {
    const name = generateRandomString(5);
    await ManageServiceType.clickAddService();
    await ManageServiceType.fillServiceDetails(name, "90");
    await ManageServiceType.clickSave();
  });
});
