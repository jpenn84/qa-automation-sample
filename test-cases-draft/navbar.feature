Feature: Navigation Bar

   
   # From Billing page
  Scenario: Billing page - Shipping tab
    Given the user is on the "billing address" page
    When the user clicks the "shipping" tab
    Then the user remains on the "billing address" page

  Scenario: Billing page - Payment tab
    Given the user is on the "billing address" page
    When the user clicks the "payment" tab
    Then the user remains on the "billing address" page

  Scenario: Billing pahe - Review tab
    Given the user is on the "billing address" page
    When the user clicks the "review" tab
    Then the user remains on the "billing address" page

  Scenario: Shipping page - Billing tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    Given the user is on the "shipping address" page
    When the user clicks the "billing" tab
    Then the user is navigated to the "billing address" page

  Scenario: Shipping page - Payment tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    Given the user is on the "shipping address" page
    When the user clicks the "payment" tab
    Then the user remains on the "shipping address" page

  Scenario: Shipping page - Review tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    Given the user is on the "shipping address" page
    When the user clicks the "review" tab
    Then the user remains on the "shipping address" page

  Scenario: Payment page - Billing tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    Given the user is on the "payment" page
    When the user clicks the "billing" tab
    Then the user is navigated to the "billing address" page

  Scenario: Payment page - Shipping tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    Given the user is on the "payment" page
    When the user clicks the "shipping" tab
    Then the user is navigated to the "shipping address" page

  Scenario: Review page - Billing tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    And the user has entered valid payment data and has navigated to the review page
    Given the user is on the "review" page
    When the user clicks the "billing" tab
    Then the user is navigated to the "billing address" page

  Scenario: Review page - Shipping Tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    And the user has entered valid payment data and has navigated to the review page
    Given the user is on the "review" page
    When the user clicks the "shipping" tab
    Then the user is navigated to the "shipping address" page

  Scenario: Review page - Payment tab
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    And the user has entered valid payment data and has navigated to the review page
    Given the user is on the "review" page
    When the user clicks the "payment" tab
    Then the user is navigated to the "payment" page

  Scenario: Receipt page - no nav bar
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    And the user has entered valid payment data and has navigated to the review page
    And the user clicks the Next: Place Order button
    Given the user is on the "receipt" page
    Then the navigation bar is no longer visible

# Billing address A
# Shipping address B
# Payment
# From review, tab to Billing, change to address C
# Shipping address D
# Observe review