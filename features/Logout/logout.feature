Feature: Logout Functionality

  Scenario: User is redirected to the login page after logging out
    Given the user is logged in
    When the user clicks the logout button
    Then the user should see the login page

  Scenario: User cannot access the home page after logging out
    Given the user is logged in
    When the user clicks the logout button
    And the user navigates to the login page directly
    Then the user should see the login page

  Scenario: User can log in again after logging out
    Given the user is logged in
    When the user clicks the logout button
    And the user logs in again with email "test@maddox123.ai" and password "supersecure"
    Then the user should see the home page

  Scenario: Test the logout functionality completely
    Given the user is logged in
    When the user clicks the logout button
    Then the user should see the login page
    When the user navigates to the login page directly
    Then the user should see the login page
