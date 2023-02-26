const Page = require("./page");

class HelloPage extends Page {
  get toggleBtn() {
    return $("#toggle");
  }

  get helloTitle() {
    return $("#hello");
  }

  get searchInput() {
    return $("#search");
  }

  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  open() {
    return super.open("/hello");
  }
}

module.exports = new HelloPage();
