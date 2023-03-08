Feature: Authentification suite
  Scenario: visiting the frontpage
    Given I open the website
    When  I type my credantials correctly
    Then I should be redirected to the todos page