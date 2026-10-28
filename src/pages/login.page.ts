import { WebDriver } from "appium";

export class LoginPage {
  constructor(private driver: WebDriver) {}

  get username() {
    return this.driver.$("//android.widget.EditText[@content-desc='username']");
  }

  get password() {
    return this.driver.$("//android.widget.EditText[@content-desc='password']");
  }

  get loginBtn() {
    return this.driver.$("//android.widget.Button[@content-desc='login']");
  }

  async login(user: string, pass: string) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}
