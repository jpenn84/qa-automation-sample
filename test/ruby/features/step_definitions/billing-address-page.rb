#!/usr/bin/ruby
require_relative "../support/env"
require "selenium-webdriver"

Given(/^the user is on the billing address page$/) do
  current_url = $driver.current_url
  raise "Driver is at wrong URL: " + current_url unless current_url == $test_url
end

# Find html element by id
When(/^the user enters "([^"]*)" in the First Name field$/) do |arg1|
  $driver.find_element(id: "billingFirstName").send_keys(arg1)
end

# Find html element by XPath
When(/^the user enters "([^"]*)" in the Middle Name field$/) do |arg1|
  $driver.find_element(xpath: '//*[@id="billing-address-form"]/div[3]/div/input').send_keys(arg1)
end

# Find html element by CSS selector
When(/^the user enters "([^"]*)" in the Last Name field$/) do |arg1|
  $driver.find_element(css: "#billingLastName").send_keys(arg1)
end

# Tutorial Note: This method is used for Address Line 1 and Address Line 2
#   Notice the "(\d)", which is a regex arg that accupts digits
#   You could split this into 2 methods and replace the regex with 1 and 2, respectively,
#     or you could use if/tnen statements if needed.
#   Since the "billingAddressLine" IDs end in 1 or 2, I can just pass the address line
#     argument (arg2) and concatenate it to "billingAddressLine" to make the proper element ID
When(/^the user enters "([^"]*)" in the Address Line (\d+) field$/) do |arg1, arg2|
  $driver.find_element(id: "billingAddressLine" + arg2).send_keys(arg1)
end

When(/^the user enters "([^"]*)" in the City field$/) do |arg1|
  $driver.find_element(id: "billingCity").send_keys(arg1)
end

When(/^the user enters "([^"]*)" in the State field$/) do |arg1|
  $driver.find_element(css: "#billingState").send_keys(arg1)
end

When(/^the user enters "([^"]*)" in the Zip Code field$/) do |arg1|
  $driver.find_element(id: "billingZip").send_keys(arg1)
end

When(/^the user enters "([^"]*)" in the Email Address field$/) do |arg1|
  $driver.find_element(id: "email").send_keys(arg1)
end

When(/^the user enters "([^"]*)" in the Phone Number field$/) do |arg1|
  $driver.find_element(id: "billingPhone").send_keys(arg1)
end

When(/^the user clicks the Next: Shipping Address button$/) do
  $driver.find_element(id: "next-shipping").click
end

Then(/^the user is navigated to the shipping address form$/) do
  sleep(1)
  shipping_address_form_displayed = $driver.find_element(class: "shipping-address-form").displayed? 
  raise "Page error was not displayed. It was expected to display" unless shipping_address_form_displayed
end

# Find element by class
Then(/^the billing address form is no longer visible$/) do
  sleep(1)
  billing_address_form_displayed = $driver.find_element(class: "billing-address-form").displayed? 
  raise "Billing address form is still displayed. It was expected to be hidden" if billing_address_form_displayed
end

Then(/^the the input for the Zip code field is formatted to "([^"]*)"$/) do |arg1|
  formatted_zip = $driver.find_element(:id, "billingZip").attribute('value')
  raise "Formatted zip code: expected " + arg1 + ", got" + formatted_phone unless formatted_zip == arg1
end

Then(/^the the input for the Phone number field is formatted to "([^"]*)"$/) do |arg1|
  formatted_phone = $driver.find_element(:id, "billingPhone").attribute('value')
  raise "Formatted Phone number: expected " + arg1 + ", got" + formatted_phone unless formatted_phone == arg1  
end

When(/^the user leaves all fields blank$/) do
  # Do nothing, since fields need to be blank
end

Then(/^the user remains on the billing address page$/) do
  sleep(1)
  billing_address_form_displayed = $driver.find_element(class: "billing-address-form").displayed?
  shipping_address_form_hidden = !$driver.find_element(class: "shipping-address-form").displayed?
  raise "Billing page is hidden and/or shipping page is displayed" unless billing_address_form_displayed && shipping_address_form_hidden
end

Then(/^the user receives a page error message$/) do
  sleep(1)
  page_error_displayed = $driver.find_element(id: "billing-error-message").displayed?
  raise "Page error was not displayed. It was expected to display" unless page_error_displayed == true
end

Then(/^the user receives field errors for all required fields$/) do
  first_name_error = $driver.find_element(id: "billingFirstNameGroup").attribute("class").include? "has-error"
  last_name_error = $driver.find_element(id: "billingLastNameGroup").attribute("class").include? "has-error"
  address_error =$driver.find_element(id: "billingAddressLine1Group").attribute("class").include? "has-error"
  city_error = $driver.find_element(id: "billingCityGroup").attribute("class").include? "has-error"
  state_error = $driver.find_element(id: "billingStateGroup").attribute("class").include? "has-error"
  zip_error = $driver.find_element(id: "billingZipGroup").attribute("class").include? "has-error"
  email_error = $driver.find_element(id: "emailGroup").attribute("class").include? "has-error"
  phone_error = $driver.find_element(id: "billingPhoneGroup").attribute("class").include? "has-error"
  raise "No error on First Name" unless first_name_error
  raise "No error on Last Name" unless last_name_error
  raise "No Error on Address Line 1" unless address_error
  raise "No error on City field" unless city_error
  raise "No error on State field" unless state_error
  raise "No error on Zip field" unless zip_error
  raise "No error on Email field" unless email_error
  raise "No error on Phone field" unless phone_error
end

When(/^the user enters valid data in all required fields except "([^"]*)"$/) do |arg1| 
  skipState = false
  skipZip = false
  skipEmail = false
  skipPhone = false
  case arg1
  when "state" 
    skipState = true
  when "zip"
    skipZip = true
  when "email"
    skipEmail = true
  when "phone"
    skipPhone = true 
  end
  $driver.find_element(id: "billingFirstName").send_keys("John")
  $driver.find_element(id: "billingLastName").send_keys("Smith")
  $driver.find_element(id: "billingAddressLine1").send_keys("123 Main St")
  $driver.find_element(id: "billingCity").send_keys("Pittsburgh")
  if !skipState
    $driver.find_element(id: "billingState").send_keys("PA")
  end
  if !skipZip
    $driver.find_element(id: "billingState").send_keys("15216")
  end
  if !skipEmail
    $driver.find_element(id: "email").send_keys("test@example.com")
  end
  if !skipPhone
    $driver.find_element(id: "billingPhone").send_keys("4125551234")
  end
end

Then(/^the user receives field errors for the "([^"]*)" field\.$/) do |arg1|
  group_error_class = ''
  case arg1
  when "state"
    group_error_class = $driver.find_element(id: "billingStateGroup").attribute("class")
  when "zip"
    group_error_class = $driver.find_element(id: "billingZipGroup").attribute("class")
  when "email"
    group_error_class = $driver.find_element(id: "emailGroup").attribute("class")
  when "phone"
    group_error_class = $driver.find_element(id: "billingPhoneGroup").attribute("class")
  end
  raise "Field error not shown for " + arg1 unless group_error_class.include? "has-error"
end

