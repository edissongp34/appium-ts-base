export class HomePage {
  constructor(private driver) {}

  get welcomeText() {
    return this.driver.$("//android.widget.TextView[@content-desc='welcome']");
  }

  async isLoaded() {
    return await this.welcomeText.isDisplayed();
  }
}
