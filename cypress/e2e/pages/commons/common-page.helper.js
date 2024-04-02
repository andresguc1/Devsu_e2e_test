import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {
  static navigateToTheApplication() {
    cy.visit(CommonPageConstants.applicationUrl);
  }

  // Navigation Bar
  static clickOnSignUpOption() {
    CommonPageElements.topMenu.signUp.click();
  }

  static clickOnLoginOption() {
    CommonPageElements.topMenu.login.click();
  }

  static clickOnCartOption() {
    CommonPageElements.topMenu.cart.click();
  }

  static clickOnHomeOption() {
    CommonPageElements.topMenu.home.click();
  }

  // Navigation bar Assertion
  static verifyLoggedUser(username) {
    CommonPageElements.topMenu.nameOfUser.should(
      "contain",
      `Welcome ${username}`
    );
  }

  // Category Menu

  static getProduct(productName) {
    CommonPageElements.articleCard.productDescriptionCard
      .contains(productName)
      .click();
  }

  static clickOnPhonesOption(cellphone) {
    CommonPageElements.categoryMenu.phonesOptions
      .should("contains", cellphone)
      .click();
  }

  static clickOnLaptopsOption() {
    CommonPageElements.categoryMenu.laptopsOption.click();
  }

  static clickOnMonitorOption() {
    CommonPageElements.categoryMenu.monitorsOption.click();
  }

  // Product Description page
  static clickAddToCardButton() {
    CommonPageElements.productDescription.addToCardButton.click();
  }


  // Product Description Assertion
  static getProductNameTittle(productName) {
    CommonPageElements.articleNameTittle.productName.should(
      "contain",
      productName
    );
  }

  static AddToCardButtonIsVisible() {
    CommonPageElements.productDescription.addToCardButton.should('is.visible');
  }

  static clickOnCartOption() {
    CommonPageElements.topMenu.cart.click();
  }
}
