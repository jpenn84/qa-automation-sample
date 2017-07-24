Feature: payment page

  Scenario: Valid payment details
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    When the user enters <card-name>
    And the user enters <card-number>
    And the user enters <exp> date
    And the user enters security <code>
    And the user clicks the Next: Review button
    Then the user is navigated to the review page
    And the "payment" form is no longer visible

    Examples:
    | card-name  | card-number      | exp  | code |
    # Visa
    | John Smith | 4242424242424242 | 1220 | 123  |
    # Master Card
    | John Smith | 5555555555554444 | 1220 | 123  |
    # AMEX
    | John Smith | 378282246310005  | 1220 | 1234 |
    # Discover
    | John Smith | 6011111111111117 | 1220 | 123  |

    Scenario: Invalid payment details
    Given the user has entered valid billing address data and has navigated to the shipping address page
    And the user has entered "the same" valid shipping address data and has navigated to the payment page
    When the user enters <card-name>
    And the user enters <card-number>
    And the user enters <exp> date
    And the user enters security <code>
    And the user clicks the Next: Review button
    Then the user receives a page error message
    And the user receives an error for <field>

    Examples:
    | card-name  | card-number      | exp  | code | field |
    # Diners (Not accepted)
    | John Smith | 30569309025904   | 1220 | 123  | ccNumber |
    # JCB (Not accepted)
    | John Smith | 3530111333300000 | 1220 | 123  | ccNumber |
    # Fails Luhn check
    | John Smith | 4242424242424241 | 1220 | 1234 | ccNumber |
    # Passes Luhn check, not a valid card type
    | John Smith | 1234567890123452 | 1220 | 123  | ccNumber |
    # Blank name
    |            | 4242424242424242 | 1220 | 123  | ccName   |
    # Blank number
    | John Smith |                  | 1220 | 123  | ccNumber |
    # Blank Exp
    | John Smith | 4242424242424242 |      | 123  | ccExp    |
    # Blank CVV
    | John Smith | 4242424242424242 | 1220 |      | ccCvv    |
    # Expired exp date
    | John Smith | 4242424242424242 | 1216 | 123  | ccExp    | 
    # Invalid exp date
    | John Smith | 4242424242424242 | 4321 | 123  | ccExp    |
    # Invalid CVC
    | John Smith | 4242424242424242 | 1220 | 12   | ccCvv    |
    # Invalid CID
    | John Smith | 378282246310005  | 1220 | 123  | ccCvv    |

# Card icon test