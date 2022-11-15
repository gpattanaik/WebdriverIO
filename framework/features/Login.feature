Feature: Login into application with new ueser details

# Login with New user credential

Scenario Outline: TC-002 Sign in with newly created user
		Given I am on the home page
		When Login using <username> and <password>
		Then Verify the title of the page

Examples:
      | username  | password  |
      | jsmith001 | Password1 |
      