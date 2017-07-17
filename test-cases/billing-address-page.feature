Feature: billing address page

  Scenario: Happy path
    Given The user is on the billing page
    And the user enters <fName> in the First Name field
    And the user enters <mName> in the First Name field
    And the user enters <lName> in the Last Name field
    And the user enters <addr1> in the Address Line 1 field
    And the user enters <addr2> in the Address Line 2 field
    And the user enters <city> in the City field
    And the user enters <state> in the State field
    And the user enters <zip> in the Zip Code field
    And the user enters <email> in the Email Address field
    And the user enters <phone> in the Phone Number field
    And the user clicks the Next: Shipping Address button
    Then the user is navigated to the shipping address form
    And the billing address form is no longer visible

    Examples:
    | fName | mName | lName    | addr1                 | addr2       | city           | state | zip   | email               | phone      |
    # Full US address
    | John  | Q     | Smith    | 124 Main St           | Apt 3       | Pittsburgh     | PA    | 15216 | john.smith@mail.com | 4123919500 |
    | Anna  | Marie | Billings | PO BOX 1234           |             | Salt Lake City | UT    | 84044 | abillings7@mail.com | 8013919500 |    
    | John  |       | Smith    | 124 Main St           |             | Pittsburgh     | PA    | 15216 | john.smith@mail.com | 4123919500 |
    # State codes for non-states. https://postalpro.usps.com/node/3740
    | John  |       | Smith    | 124 Main St           |             | Washington     | DC    | 20015 | john.smith@mail.com | 2025551234 |
    | María |       | Suárez   | URB Las Gladiolas     | 150 CALLE A | SAN JUAN       | PR    | 00926 | maria1234@mail.com  | 7875551234 |
    | Nola  |       | Desir    | 2 Mount Royale Est    |             | Christiansted  | VI    | 00820 | wxyznola@desir.me   | 3045551234 |
    | John  |       | Smith    | PSC 1234, Box 12345   |             | APO            | AA    | 09001 | john.smith@mail.com | 4123919500 |
    | John  |       | Smith    | USS Cochrane (DDG-21) |             | FPO            | AP    | 96543 | john.smith@mail.com | 4123919500 |
    | John  |       | Smith    | Unit 8400, Box 0000   |             | DPO            | AE    | 09498 | john.smith@mail.com | 4123919500 |


# invalid state - FM
# Ensure to remove from validation lisy
# https://en.wikipedia.org/wiki/ISO_3166-2:US
# https://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations
# https://pe.usps.com/text/pub28/28apb.htm
# http://www.stateabbreviations.us/