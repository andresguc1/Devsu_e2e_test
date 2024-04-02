import { CartHelper } from "../pages/cart/cart.helper";
import { CommonPageHelper } from "../pages/commons/common-page.helper";
import { LoginHelper } from "../pages/login/login.helper";

describe("Place order", () => {
  it("Place 2 products order with a created a user", () => {
    const username = "devsu1";
    const password = "devsu1";
    const cellPhoneName = "Samsung galaxy s7";
    const laptopName = "MacBook air";
    const user_name = "Devsu Test User";
    const country = "Colombia";
    const city = "Medellin";
    const creditCard = " 4242424242424242";
    const month = "April";
    const year = "2024";

    // Login
    CommonPageHelper.navigateToTheApplication();
    CommonPageHelper.clickOnLoginOption();
    LoginHelper.insertUsername(username);
    LoginHelper.insertPassword(password);
    LoginHelper.clickOnLoginButton();
    CommonPageHelper.verifyLoggedUser(username);

    // add Cellphone to cart
    CommonPageHelper.getProduct(cellPhoneName);
    CommonPageHelper.getProductNameTittle(cellPhoneName);
    CommonPageHelper.AddToCardButtonIsVisible()
    CommonPageHelper.clickAddToCardButton();

    // // add Laptop to cart
    CommonPageHelper.clickOnHomeOption();
    CommonPageHelper.clickOnLaptopsOption();
    CommonPageHelper.getProduct(laptopName);
    CommonPageHelper.getProductNameTittle(laptopName);
    CommonPageHelper.AddToCardButtonIsVisible()
    CommonPageHelper.clickAddToCardButton();

    // // Place order
    CommonPageHelper.clickOnCartOption();
    CartHelper.clickPlaceOrderButton();
    CartHelper.insertName(user_name);
    CartHelper.insertCountry(country);
    CartHelper.insertCity(city);
    CartHelper.insertCreditCard(creditCard);
    CartHelper.insertMonth(month);
    CartHelper.insertYear(year);
    CartHelper.clickPurchaseButton()
    CartHelper.confirmationOrder()
  });
});
