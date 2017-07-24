Feature: shipping address page

  Scenario: Happy path
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user enters <fName> in the First Name field
    And the user enters <mName> in the First Name field
    And the user enters <lName> in the Last Name field
    And the user enters <addr1> in the Address Line 1 field
    And the user enters <addr2> in the Address Line 2 field
    And the user enters <city> in the City field
    And the user enters <st> in the State field
    And the user enters <zip> in the Zip Code field
    And the user enters <phone> in the Phone Number field
    And the user clicks the Next: Shipping Address button
    Then the user is navigated to the shipping address form
    And the "shipping address" form is no longer visible

    Examples:
      | fName | mName | lName | addr1                  | addr2       | city           | st | zip   | phone      |
      # Full & minumal US addresses, within 50 states
      | John  | Q     | Smith | 3792 Westfield St      | Apt 3       | Pittsburgh     | PA | 15216 | 4123919500 |    
      | John  |       | Smith | 124 Main St            |             | Pittsburgh     | PA | 15203 | 4123919500 |
      | Anna  | Marie | James | PO BOX 1234            |             | Salt Lake City | UT | 84044 | 8015559500 |
      # State codes for non-states. https://postalpro.usps.com/node/3740
      | John  |       | Smith  | 124 Main St           |             | Washington     | DC | 20015 | 2025551234 |
      | Juan  |       | Smith  | URB Las Gladiolas     | 150 CALLE A | SAN JUAN       | PR | 00926 | 7875551234 |
      | John  |       | Smith  | 2 Mount Royale Est    |             | Christiansted  | VI | 00820 | 3045551234 |
      | John  |       | Smith  | PSC 1234, Box 12345   |             | APO            | AA | 09001 | 4123919500 |
      | John  |       | Smith  | USS Cochrane (DDG-21) |             | FPO            | AP | 96543 | 4123919500 |
      | John  |       | Smith  | Unit 8400, Box 0000   |             | DPO            | AE | 09498 | 4123919500 |
      | John  |       | Smith  | 11 Fitiuta Vlg        |             | Pago Pago      | AS | 96799 | 6845551234 |
      | John  |       | Smith  | 33 Colonia            |             | Yap            | FM | 96943 | 6915559999 |
      | John  |       | Smith  | 2449 Hesler Pl        |             | Hagatna        | GU | 96910 | 6715559922 |
      | John  |       | Smith  | 22 Ebeye Town         |             | Ebeye          | MH | 96970 | 6925558888 |
      | John  |       | Smith  | 75 Fradonge           |             | Saipan         | MP | 96950 | 6705552222 |
      | John  |       | Smith  | General Delivery      |             | Palau          | PW | 96939 | 6805552222 |

  Scenario: Check shipping address same as billing
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user checks the Same as Billing address checkbox
    Then the information from the billing page fields is copied to the shipping page
    And the fields on the shipping page are disabled

  Scenario: Uncheck shipping address same as billing
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user checks the Same as Billing address checkbox
    # TUT: Avoind using "keywords in step sentences"
    And the user subsequently unchecks the Same as Billing address checkbox
    Then the fields on the shipping page are blank
    And the fields on the shipping page are enabled

  Scenario: State code formatting
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user enters <st> in the State field
    Then the the input for "state" is formatted to <st-formatted>

    Examples:
      | st | st-formatted |
      | pa | PA           |
      | Wv | Wv           |

  Scenario: Zip code formatting
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user enters <zip> in the State field
    Then the the input for "zip" is formatted to <zip-formatted>

    Examples:
      | zip   | zip-formatted |
      | ABCDE |               |
      | 12ABC | 12            |
      | #$%^& |               |
      | ABC45 | 45            |

  Scenario: Phone number formatting
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user enters <phone> in the State field
    Then the the input for "phone" is formatted to <phone-formatted>

    Examples:
      | phone          | phone-formatted |
      | 1234567890     | (123) 456-7890  |              
      | (123) 456-7890 | (123) 456-7890  |
      | 123-456-7890   | (123) 456-7890  |
      | 123.456.7890   | (123) 456-7890  |
      | 123456         | (123) 456       |
      | 1234567        | (123) 456-7     |
      | ABCDEFGHIJ     |                 |
      | 123ABC456      | (123) 456       |

  Scenario: Missing fields
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user leaves all fields blank
    And the user clicks the Next: Shipping Address button
    Then the user receives a page error message
    And the user receives field errors for all required fields

  Scenario: Invalid state code
    Given the user has entered valid billing address data and has navigated to the shipping address page
    When the user enters valid data in all required fields except "state"
    And the user enters <st> in the State field
    Then the user receives a page error message
    And the user receives field errors for the "state" field.
  
  Scenario: Invalid zip code
    Given the user has entered valid billing address data and has navigated to the shipping address page
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
    Given the user has entered valid billing address data and has navigated to the shipping address page
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