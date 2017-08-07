require 'rubygems'
require 'cucumber'
require 'selenium-webdriver'

# Store command line arguments
$browser_type = ENV['BROWSER'] || 'chrome'

# Static variables
# $test_url = "https://jpenn84.github.io/qa-automation-tutorial/cc-form.html"
  $test_url = "file:///home/ruby/qa-automation-tutorial/cc-form.html"  
begin
  $driver = Selenium::WebDriver.for(:"#{$browser_type}")
  $driver.manage.timeouts.implicit_wait = 3
  $driver.manage().window().maximize()
rescue Exception => e
  puts e.message
  Process.exit(0)
end
