Feature: Contact Us Form

  Scenario: Submit contact form
    Given User navigates to Automation Exercise website
    When User clicks Contact Us button
    And User fills contact form
    And User submits contact form
    Then Success message should be visible
