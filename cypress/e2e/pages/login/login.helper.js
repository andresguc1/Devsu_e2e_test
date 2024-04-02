import { LoginElements } from "./login.elements";

export class LoginHelper {
  static insertUsername(username) {
    LoginElements.elements.username.type(username,  {force: true});
  }

  static insertPassword(password) {
    LoginElements.elements.password.type(password,  {force: true});
  }

  static clickOnLoginButton() {
    LoginElements.elements.loginButton.click({force: true});
  }
}
