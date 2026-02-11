Feature: User Registration

  Scenario: Successful user registration
    Given User navigates to Automation Exercise website
    When User clicks on Signup/Login button
    And User enters name and new email
    And User clicks Signup button
    Then User should see account creation form
