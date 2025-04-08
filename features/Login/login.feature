Feature: Login Functionality

  Scenario: Successful Login
    Given the user is on the login page
    When the user fills in the email with "test@maddox123.ai"
    And the user fills in the password with "supersecure"
    And the user clicks the submit button
    Then the user should be redirected to the homepage
    And the user should see "Home" as the page title

  Scenario: Unsuccessful Login
    Given the user is on the login page
    When the user fills in the email with "test@maddox123.ai"
    And the user fills in the password with "wrongpassword"
    And the user clicks the submit button
    Then the user should stay on the login page

  Scenario: Successful Login and Logout
    Given the user is on the login page
    When the user fills in the email with "test@maddox123.ai"
    And the user fills in the password with "supersecure"
    And the user clicks the submit button
    Then a token should be stored in local storage
    When the user clicks the logout button
    Then the token should be removed from local storage
