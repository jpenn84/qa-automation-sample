Feature: billing address page

  Scenario: Happy path
    Given the user is on the billing page
    When the user enters <fName> in the First Name field
    And the user enters <mName> in the First Name field
    And the user enters <lName> in the Last Name field
    And the user enters <addr1> in the Address Line 1 field
    And the user enters <addr2> in the Address Line 2 field
    And the user enters <city> in the City field
    And the user enters <st> in the State field
    And the user enters <zip> in the Zip Code field
    And the user enters <email> in the Email Address field
    And the user enters <phone> in the Phone Number field
    And the user clicks the Next: Shipping Address button
    Then the user is navigated to the shipping address form
    And the billing address form is no longer visible

    Examples:
      | fName | mName | lName | addr1                  | addr2       | city           | st | zip   | email               | phone      |
      # Full & minumal US addresses in US states
      | John  | Q     | Smith | 3792 Westfield St      | Apt 3       | Pittsburgh     | PA | 15216 | john.smith@mail.com | 4123919500 |    
      | John  |       | Smith | 124 Main St            |             | Pittsburgh     | PA | 15203 | john.smith@mail.com | 4123919500 |
      | Anna  | Marie | James | PO BOX 1234            |             | Salt Lake City | UT | 84044 | annajames7@mail.com | 8015559500 |
      # State codes for districts & territories
      | John  |       | Smith  | 124 Main St           |             | Washington     | DC | 20015 | john.smith@mail.com | 2025551234 |
      | Juan  |       | Smith  | URB Las Gladiolas     | 133 CALLE A | SAN JUAN       | PR | 00926 | juan.smith@mail.com | 7875551234 |
      | John  |       | Smith  | 2 Mount Royale Est    |             | Christiansted  | VI | 00820 | john.smith@mail.com | 3045551234 |
      | John  |       | Smith  | PSC 1234, Box 12345   |             | APO            | AA | 09001 | john.smith@mail.com | 4123919500 |
      | John  |       | Smith  | USS Cochrane (DDG-21) |             | FPO            | AP | 96543 | john.smith@mail.com | 4123919500 |
      | John  |       | Smith  | Unit 8400, Box 0000   |             | DPO            | AE | 09498 | john.smith@mail.com | 4123919500 |
      | John  |       | Smith  | 11 Fitiuta Vlg        |             | Pago Pago      | AS | 96799 | john.smith@mail.com | 6845551234 |
      | John  |       | Smith  | 33 Colonia            |             | Yap            | FM | 96943 | john.smith@mail.com | 6915559999 |
      | John  |       | Smith  | 2449 Hesler Pl        |             | Hagatna        | GU | 96910 | john.smith@mail.com | 6715559922 |
      | John  |       | Smith  | 22 Ebeye Town         |             | Ebeye          | MH | 96970 | john.smith@mail.com | 6925558888 |
      | John  |       | Smith  | 75 Fradonge           |             | Saipan         | MP | 96950 | john.smith@mail.com | 6705552222 |
      | John  |       | Smith  | General Delivery      |             | Palau          | PW | 96939 | john.smith@mail.com | 6805552222 |

  Scenario: State code formatting
    Given the user is on the billing address page
    When the user enters <st> in the State field
    Then the the input for "state" is formatted to <st-formatted>

    Examples:
      | st | st-formatted |
      | pa | PA           |
      | Wv | Wv           |

  Scenario: Zip code formatting
    Given the user is on the billing address page
    When the user enters <zip> in the State field
    Then the the input for "zip" is formatted to <zip-formatted>

    Examples:
      | zip   | zip-formatted |
      | ABCDE |               |
      | 12ABC | 12            |
      | #$%^& |               |
      | ABC45 | 45            |

  Scenario: Phone number formatting
    Given the user is on the billing address page
    When the user enters <phone> in the State field
    Then the the input for "phone" is formatted to <phone-formatted>

    Examples:
      | phone               | phone-formatted |
      | 1234567890          | (123) 456-7890  |              
      | (123) 456-7890      | (123) 456-7890  |
      | 123-456-7890        | (123) 456-7890  |
      | 123.456.7890        | (123) 456-7890  |
      | 123456              | (123) 456       |
      | 1234567             | (123) 456-7     |
      | ABCDEFGHIJ          |                 |
      | 123ABC456           | (123) 456       |
      | ..........          |                 |
      | !@#$%^&*()          |                 |
      | 1 2 3 4 5 6 7 8 9 0 | (123) 456-7890  |

  Scenario: Missing fields
    Given the user is on the billing address page
    When the user leaves all fields blank
    And the user clicks the Next: Shipping Address button
    Then the user receives a page error message
    And the user receives field errors for all required fields

  Scenario: Invalid state code
    Given the user is on the billing address page
    When the user enters valid data in all required fields except "state"
    And the user enters <st> in the State field
    Then the user receives a page error message
    And the user receives field errors for the "state" field.

  Scenario: Invalid zip code
    Given the user is on the billing address page
    When the user enters valid data in all required fields except "zip"
    And the user enters <zip> in the State field
    Then the user receives a page error message
    And the user receives field errors for the "zip" field.

    Examples:
      | 1234  |
      | ABCDE |
      | ..... |
      | !@#$% |

  Scenario: Invalid phone number
    Given the user is on the billing address page
    When the user enters valid data in all required fields except "phone"
    And the user enters <phone> in the State field
    Then the user receives a page error message
    And the user receives field errors for the "phone" field.

    Examples:
      | phone      |
      | 412555123  |
      | 5550123    |
      | .......... |
      | !@#$%^&*() |
      | ABCDEFGHIJ |

  Scenario: Invalid email address
    Given the user is on the billing address page
    When the user enters valid data in all required fields except "email"
    And the user enters <email> in the State field
    Then the user receives a page error message
    And the user receives field errors for the "email" field.

    Examples:
      | email      |
      | test.com   |
      | test@test  |
      | .......... |
      | !@#$%^&*() |
      | ABCDEFGHIJ |