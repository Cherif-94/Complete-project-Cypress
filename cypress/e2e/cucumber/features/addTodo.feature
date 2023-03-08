
Feature: Add a new  todo

  Scenario: the new todo should be visible in the list
  
    Given I open the website
    When click on add button && i type the new todo and && i click on submit button 
    Then I should see the new todo contain Learn Cypress io using JavaScript