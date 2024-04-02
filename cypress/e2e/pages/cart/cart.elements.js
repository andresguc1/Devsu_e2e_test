export class CartElements {
  static get elements() {
    return {
      get placeOrderButton() {
        return cy.get('button[data-toggle="modal"]');
      },

      get Name() {
        return cy.get("input#name");
      },

      get Country() {
        return cy.get("input#country");
      },

      get City() {
        return cy.get("input#city");
      },

      get CreditCard() {
        return cy.get("input#card");
      },
      get Month() {
        return cy.get("input#month");
      },

      get Year() {
        return cy.get("input#year");
      },

      get PurchaseButton() {
        return cy.contains("button", "Purchase");
      },

      get OrderConfirmation() {
        return cy.get('.sweet-alert');
      },

      get OrderInfo() {
        return cy.get('p.lead.text-muted');
      },
    };
  }
}