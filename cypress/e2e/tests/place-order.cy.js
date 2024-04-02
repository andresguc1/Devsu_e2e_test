import { CartHelper } from "../pages/cart/cart.helper";
import { CommonPageHelper } from "../pages/commons/common-page.helper";
import { LoginHelper } from "../pages/login/login.helper";

before(function () {
  cy.visit("https://www.demoblaze.com/index.html");
  cy.fixture("testdata").then((testdata) => {
    this.testdata = testdata;
  });
});

it("Place 2 products order with a created a user", function () {
  
  // Login User
  CommonPageHelper.clickOnLoginOption();
  LoginHelper.insertUsername(this.testdata.username);
  LoginHelper.insertPassword(this.testdata.password);
  LoginHelper.clickOnLoginButton();
  CommonPageHelper.verifyLoggedUser(this.testdata.username);


  // Add Cellphone to cart
  CommonPageHelper.getProduct(this.testdata.product1);
  CommonPageHelper.getProductNameTittle(this.testdata.product1);
  CommonPageHelper.AddToCardButtonIsVisible();
  CommonPageHelper.clickAddToCardButton();

  // // Add Laptop to cart
  CommonPageHelper.clickOnHomeOption();
  CommonPageHelper.clickOnLaptopsOption();
  CommonPageHelper.getProduct(this.testdata.product2);
  CommonPageHelper.getProductNameTittle(this.testdata.product2);
  CommonPageHelper.AddToCardButtonIsVisible();
  CommonPageHelper.clickAddToCardButton();

  // // Place order
  CommonPageHelper.clickOnCartOption();
  CartHelper.clickPlaceOrderButton();
  CartHelper.insertName(this.testdata.user_name);
  CartHelper.insertCountry(this.testdata.country);
  CartHelper.insertCity(this.testdata.city);
  CartHelper.insertCreditCard(this.testdata.creditCard);
  CartHelper.insertMonth(this.testdata.month);
  CartHelper.insertYear(this.testdata.year);
  CartHelper.clickPurchaseButton();
  CartHelper.confirmationOrder();
});
