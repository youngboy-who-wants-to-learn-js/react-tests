const Page = require("./page");

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get usersItems() {
    return $$("#user-item-item");
  }

  get deleteBtn() {
    return $$("#user-delete")[0];
  }

  async loadData() {
    await this.open();
    await this.loadingTitle.waitForDisplayed({ timeout: 3_000 });
    await this.usersList.waitForDisplayed({ timeout: 3_000 });
    try {
    } catch (e) {
      throw new Error("Failed to load users");
    }
  }

  async deleteUser() {
    const usersCount = await this.usersItems.length;
    if (!usersCount) {
      throw new Error("User not found");
    }

    await this.deleteBtn.click();

    const usersCountAfterDelete = await this.usersItems.length;

    if (usersCount - usersCountAfterDelete !== 1) {
      throw new Error("Delete is failed");
    }

    try {
    } catch (e) {
      throw new Error("Failed to delete user" + e.message);
    }
  }

  open() {
    return super.open("/users-test");
  }
}

module.exports = new UsersPage();
