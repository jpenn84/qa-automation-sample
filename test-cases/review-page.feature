Feature: Review page

    Scenario: Billing and shipping are the same
      Given the user has entered valid billing address data and has navigated to the shipping address page
      And the user has entered "the same" valid shipping address data and has navigated to the payment page
      When the user enters <card-name>
      And the user enters <card-number>
      And the user enters <exp> date
      And the user enters security <code>
      And the user clicks the Next: Review button
      Then the user will see the valid billing address data in the Billing address section
      And the user will see "the same" valid shipping address data in the Shipping Address Section
      And the user will see <card-name>, <card-icon> ending in <lastDigits>, and a <formatted-exp> date
      
      Examples:
      | card-name  | card-number      | exp  | code | card-icon        | lastDigits | formatted-exp |
      | John Smith | 4242424242424242 | 1220 | 123  | fa-cc-visa       | 4242       | 12/20         |
      | John Smith | 5555555555554444 | 1220 | 123  | fa-cc-mastercard | 4242       | 12/20         |
      | John Smith | 378282246310005  | 1220 | 1234 | fa-cc-amex       | 00005      | 12/20         |
      | John Smith | 6011111111111117 | 1220 | 123  | fa-cc-discover   | 4242       | 12/20         |

    Scenario: Billing and shipping are the same
      Given the user has entered valid billing address data and has navigated to the shipping address page
      And the user has entered "a different" valid shipping address data and has navigated to the payment page
      When the user enters <card-name>
      And the user enters <card-number>
      And the user enters <exp> date
      And the user enters security <code>
      And the user clicks the Next: Review button
      Then the user will see the valid billing address data in the Billing address section
      And the user will see "the same" valid shipping address data in the Shipping Address Section
      And the user will see <card-name>, <card-icon> ending in <lastDigits>, and a <formatted-exp> date
      
      Examples:
      | card-name  | card-number      | exp  | code | card-icon        | lastDigits | formatted-exp |
      | John Smith | 4242424242424242 | 1220 | 123  | fa-cc-visa       | 4242       | 12/20         |
      | John Smith | 5555555555554444 | 1220 | 123  | fa-cc-mastercard | 4242       | 12/20         |
      | John Smith | 378282246310005  | 1220 | 1234 | fa-cc-amex       | 00005      | 12/20         |
      | John Smith | 6011111111111117 | 1220 | 123  | fa-cc-discover   | 4242       | 12/20         |


