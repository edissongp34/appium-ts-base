import { remote } from "appium";
import { androidCaps } from "../config/capabilities";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { expect } from "chai";

describe("Login flow", () => {
  let driver;
  let loginPage;
  let homePage;

  before(async () => {
    driver = await remote({ capabilities: androidCaps });
    loginPage = new LoginPage(driver);
    homePage = new HomePage(driver);
  });

  it("should login successfully", async () => {
    await loginPage.login("testuser", "123456");
    const loaded = await homePage.isLoaded();
    expect(loaded).to.be.true;
  });

  after(async () => {
    await driver.deleteSession();
  });
});
