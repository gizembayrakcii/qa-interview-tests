# QA Interview Tests

This project contains end-to-end tests written using **Playwright** and **Cucumber.js** for a sample web application built with **Next.js**.  
The tests cover login, counter, and logout functionalities.

## Test Scenarios

### Login Tests
- Visit the login page
- Fill in the username and password
- Click the login button
- Verify redirection to the homepage on success
- Verify error message on failure

### Counter Tests
- Increment the counter
- Decrement the counter
- Reset the counter
- Validate the counter values at each step

### Logout Tests
- Log out the user
- Redirect to login page after logout
- Prevent access to homepage when not authenticated

---

## Running Tests Locally

Make sure the app is running locally on `http://localhost:3000`:

```bash
npm install
npm run build
npm start


Then run the tests in a separate terminal:
npm run test:e2e

