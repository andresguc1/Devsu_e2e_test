export class CommonPageElements {
  // top-navbar
  static get topMenu() {
    return {
      get signUp() {
        return cy.get('a[data-target="#signInModal"]');
      },
      get login() {
        return cy.get('a[data-target="#logInModal"]');
      },

      get cart() {
        return cy.get("a#cartur");
      },

      get home() {
        return cy.get(".active > .nav-link");
      },

      // User logged name
      get nameOfUser() {
        return cy.get("#nameofuser");
      },
    };
  }

  // Category Menu
  static get categoryMenu() {
    return {
      get phonesOptions() {
        return cy.contains("a", "Phones");
      },
      get laptopsOption() {
        return cy.contains("a", "Laptops");
      },
      get monitorsOption() {
        return cy.contains("a", "Monitors");
      },
    };
  }

  // Products Gallery

  static get articleCard() {
    return {
      get productDescriptionCard() {
        return cy.get("div.card-block");
      },
    };
  }

  // Product Gallery Assertion
  static get articleNameTittle() {
    return {
      get productName() {
        return cy.get(".name");
      },
    };
  }

  // Product Description page
  static get productDescription() {
    return {
      get addToCardButton() {
        return cy.contains("a", "Add to cart");
      },
    };
  }
}



