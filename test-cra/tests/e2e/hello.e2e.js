const HelloPage = require("../pages/hello.page");

describe("Hello Page", () => {
  it("should toggle", async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloTitle).toBeExisting();

    await HelloPage.toggleBtn.click();

    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it("should ont toggle", async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput("heo");

    await expect(HelloPage.helloTitle).not.toBeExisting();
  });
});
