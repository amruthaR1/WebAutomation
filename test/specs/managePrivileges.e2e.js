const chai = require("chai");
const expect = chai.expect;
const ManagePrivilege = require("../pageobjects/managePrivileges.page");

describe("Manage Privilege in configure metadata", () => {
  before(async () => {
    ManagePrivilege.open();
  });

  it("should add privilege", async () => {
    await ManagePrivilege.clickAddPrivileges();
    await ManagePrivilege.setPrivilegeDetails("Abcde", "abcd efghij");
    await ManagePrivilege.savePrivilege();
    expect(await ManagePrivilege.getAddedPrivilegeName()).to.be.equal("Abcde");
  });

  it("should delete privaleges", async () => {
    await ManagePrivilege.deletePrivilege();
    await ManagePrivilege.confirmDeletion();
    expect(await ManagePrivilege.isDeletionConfirmationMessageExists()).to.be
      .true;
  });

  it("should Search privilege", async () => {
    await ManagePrivilege.searchPrivilege('test Privileges')
    expect(await ManagePrivilege.getSearchedPrivilegeName()).to.equal(
      "test Privileges"
    );
  });
  it("should search a privilege", async () => {
    await ManagePrivilege.searchPrivilege('abcdef');
    expect(await ManagePrivilege.getSearchedPrivilegeName()).to.equal(
      "No entries to display"
    );
  });
});
