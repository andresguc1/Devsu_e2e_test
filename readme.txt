*** Test Scenario ***
    The test scenario aims to simulate the process of placing an order on a demo e-commerce website DemoBlaze.

* Preparation * 
    Visit the demo e-commerce website.
    Load test data from a fixture file.

* Login 
    Click on the login option.
    Insert username and password obtained from the test data.
    Click on the login button.
    Verify that the user is logged in successfully.

* Add Products to Cart:
    Navigate to the desired product category.
    Select a product (cellphone) and add it to the cart.
    Navigate back to the home page.
    Navigate to another product category (laptops).
    Select another product (laptop) and add it to the cart.

* Place Order:
    Navigate to the cart.
    Click on the place order button.
    Insert name, country, city, credit card details, month, and year for the order.
    Click on the purchase button.
    Confirm the order.


* Test Execution
    Ensure Cypress is installed and configured properly.

* Execute the test:
    npx cypress open
    npx cypress run