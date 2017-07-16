# qa-automation-tutorial
QA Automation sample tutorials

This repository includes several html files for use with upcoming Selenium tutorials.

All validation is done on the frontend (acting as a mock back-end) in order to simplify hosting and to prevent private data from being submitted to a server and/or being intercepted by a 3rd party.

Do not use real addresses or credit card numbers.

For addresses:
- Use fake test data with valid formats for state, zip codes, phone numbers, and email addresses.

For test payment cards:
- Use only Visa, MC, Amex, or Discover for a valid response
- Diners and JCB will produce a valid Luhn check, but are not accepted (This is by design, as part of the test cases)
- Visit this link for some valid test cards: https://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm
- Use the current or future month/year for a valid exp date. Use a past month/year (year beginning in 2000) for an invalid exp date
- Use any 3-digits for a valid CVV/CVC (4 digits for a valid AMEX CID)
