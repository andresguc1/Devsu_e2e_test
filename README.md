# Test Scenario
The test scenario aims to simulate the process of placing an order on a demo e-commerce website 
[DemoBlaze](https://www.demoblaze.com/index.html). 

The scenario involves the following steps:

## Preparation:
- Visit the demo e-commerce website.
- Load test data from a fixture file.

## Login:
- Click on the login option.
- Insert username and password obtained from the test data.
- Click on the login button.
- Verify that the user is logged in successfully.

## Add Products to Cart:
- Navigate to the desired product category.
- Select a product (cellphone) and add it to the cart.
- Navigate back to the home page.
- Navigate to another product category (laptops).
- Select another product (laptop) and add it to the cart.

## Place Order:
- Navigate to the cart.
- Click on the place order button.
- Insert name, country, city, credit card details, month, and year for the order.
- Click on the purchase button.
- Confirm the order.

# Test Environment
The test is written using Cypress, a JavaScript end-to-end testing framework.

# Test Execution
Ensure Cypress is installed and configured properly. 
Then execute the test script using the Cypress test runner.

to execute the test using Cypress UI 
''' npm run test-ui '''

to execute on terminal
''' npm run test-terminal

# Note
- This test script assumes provide helpers (CommonPageHelper, LoginHelper, CartHelper) implementing POM (Page Object Model).
- Update the test data fixture file with appropriate data for successful test execution.
