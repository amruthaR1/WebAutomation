const chai = require("chai");
const expect = chai.expect;
const ManageServiceType = require("../pageobjects/manageServiceType.page");
const generateRandomName = require("../../utility/generateRandomName")

describe("Manage service type", () => {
  before(() => {
    ManageServiceType.open();
  });
  it("1. should add new service without filling any details and assert the error message", async () => {
    await ManageServiceType.clickAddService();
    await ManageServiceType.clickSave();
    expect(await ManageServiceType.getErrorMessage()).to.be.equal(
      "Duration must be a positive number"
    );
    await ManageServiceType.goToManageService();
  });

  it("2. Should add new service", async () => {
    const name = generateRandomName(5);
    await ManageServiceType.clickAddService();
    await ManageServiceType.fillServiceDetails(name, "90");
    await ManageServiceType.clickSave();
  });
});
