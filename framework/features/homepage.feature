Feature: SignIn, Login and Purchase Product
# New user register

Scenario: TC-001 Create New User/Signin
    Given I am on the home page
    When Navigate to Signup page
    Then Create an account by entering following details
    |<firstname>|<lastname>|<address1>       | <city>   | <state> | <zipcode> | <username>  | <password> | <confpwd> |
    | John     | Smith    | Park street 123 | Aberdeen | Aberdeen | AB10    | jsmith001   | Password1 | Password1 |
