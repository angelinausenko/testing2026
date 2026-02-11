Feature: User Login

  Scenario: Login with valid credentials
    Given User navigates to Automation Exercise website
    When User clicks on Signup/Login button
    And User enters correct email and password
    And User clicks Login button
    Then User should see logged in as username
