import { CartElements } from "./cart.elements";

export class CartHelper {
  static clickPlaceOrderButton() {
    CartElements.elements.placeOrderButton.click();
  }

  static insertName(name) {
    CartElements.elements.Name.type(name);
  }

  static insertCountry(country) {
    CartElements.elements.Country.type(country);
  }

  static insertCity(city) {
    CartElements.elements.City.type(city);
  }

  static insertCreditCard(CreditCardNumber) {
    CartElements.elements.CreditCard.type(CreditCardNumber);
  }

  static insertMonth(month) {
    CartElements.elements.Month.type(month);
  }

  static insertYear(year) {
    CartElements.elements.Year.type(year);
  }

  static clickPurchaseButton() {
    CartElements.elements.PurchaseButton.click({ force: true });
  }

  // Confirmation  place order
  static confirmationOrder() {
    CartElements.elements.OrderConfirmation.should(
      "contain",
      "Thank you for your purchase!"
    );
  }

  static confirmationOrder() {
    CartElements.elements.OrderConfirmation.should(
      "contain",
      "Thank you for your purchase!"
    );
  }

  // Order assertions
  static confirmationOrder(totalPrice) {
    CartElements.elements.OrderConfirmation.should(
      "contain",
      "Thank you for your purchase!"
    );
  }
}
