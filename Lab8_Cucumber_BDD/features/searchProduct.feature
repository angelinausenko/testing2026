Feature: Search Product

  Scenario: User searches for a product
    Given User navigates to Automation Exercise website
    When User clicks on Products button
    And User enters product name in search field
    And User clicks search button
    Then Searched products should be displayed
