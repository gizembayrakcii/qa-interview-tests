Feature: Counter functionality

  Scenario: Increase the counter
    Given the user is logged in
    When the user clicks the increment button a random number of times
    Then the counter should reflect the correct number of increments

  Scenario: Reset the counter
    Given the user is logged in
    When the user clicks the increment button a random number of times
    And the user clicks the reset button
    Then the counter should reset to 0

  Scenario: Decrease the counter
    Given the user is logged in
    When the user clicks the decrement button a random number of times
    Then the counter should reflect the correct number of decrements
