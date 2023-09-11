const chai = require("chai");
const expect = chai.expect;
const FindPatient = require("../pageobjects/findPatient.page");

describe("Find Patients", () => {
  before(async () => {
    FindPatient.open();
  });
  it("should search by name", async () => {
    await FindPatient.goToSearch();
    await FindPatient.search('test amr');
    expect(
      await FindPatient.getFoundPatientName()
    ).to.be.equal("Test");
  });

  it("should search by id", async () => {
    await FindPatient.goToHome();
    await FindPatient.goToSearch();
    await FindPatient.search("100P6T");
    expect(
      await FindPatient.getFoundPatientId()
    ).to.be.equal("100P6T");
  });

  it("should search which is not in the record", async () => {
    await FindPatient.goToHome();
    await FindPatient.goToSearch();
    await FindPatient.search("abcde");
    expect(await FindPatient.notFoundMessage()).to.be
      .true;
  });
});
