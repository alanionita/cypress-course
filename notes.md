## Testing with Cypress from FreeCodeCamp

> https://youtu.be/u8vMu7viCm8


Why Cypress:
- all in one testing, assertion, with mocking and stubbing
- focuses on e2e and component testing (real world testing)
- runs in the browser and writen in JS
- good performance and can be integrated in the CI/CD easily
- native access to the DOM
  - you can use your app in the test runner
- great dev UX 
- generally not flaky
  - tests that pass and fail

Overview and install:
- clone the repo
- install the dependencies
- run app `npm run dev`
- install cypress 
  - npm install cypress -D
- run the cypress runner
  - npx cypress open
  - or a add a new script to run `cypress open`
  - cypress will automatically add config files at first runtime
  - you won't have any specs so create a new spec using the visual runner
    - fundamentals.cy.js
  - cypress automatically added some folders in our project

Testing fundamentals
- describe blocks contain all your tests
  - 2 arguments: string and fn
  - fn contains your tests
- it blocks are single tests within an overall file
  - 2 arguments: string and fn
  - fn contains the code of your test
- commands
  - you can use them on the cy object
  - cy.visit(url) - helps you navigate
  - other examples  
    - cy.click, cy.type
    - more in the docs here https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability
- change the url to http://localhost:3000/fundamentals
  - need to have dev server live
- cypress commands are async by nature
  - they do not return subjects, don't use variables
  - cypress commands yield their subjects
  - similar to a js generator function
  - use .then()
    - is a command, not a promise; you can't use async/await
  - cy.wrap
    - you need to wrap an object to run commands on it
- getting elements
  - use the .get() and pass a query selector
  - assertions are done via Chai, Sinon, and jQuery
  - add new assertions by extending the chai assertions
  - existence - .should('not.exist')
  - css classes
    - .should('have.css', 'text-decoration', 'line-trough')
  - make an assertions that h1 contains test
    - use the cypress runner
    - use selectors and data-test-* attributes
    - otherwise if you use classes and selectors things can change and you end up with flaky tests
    - add a data-test attribute
  - you can configure a base_url
    - cypress.config.js
      - baseUrl
    - more performant to write longer tests
  - next test /fundamentals: 
    - 'Fundamentals 1' accordion / criteria: 
      - has correct text
      - assert that accordion details is not visible
      - if not clicked: does not contain summary text
      - assert that accordion details is are
      - if clicked contains summary text
    - how
      - add a data-test attr to each accordion
        - set to item id
      - use `.click().pause()` to stop the cy runner on the element
        - useful to debug and figure out if you are in the right place
      - check that the page does not contain the text of the accordion detail
      - then click the accordion
      - run the above accordion detail test with should
  - cypress recommends that you write longer tests
  - focus on one test at a time - `it.only()`
  - you can also needs beforeEach() - after
    - use it to visit the pages before each test
  - using custom commands
    - for example add a getData command to get elements by the data-test attribute

Testing forms [1:06:27]
  

## Cypress 13

- test replays
  - track the events leading to a failure
  - travel in time in your app
  - less time reproducing CI bugs
  - step towards the future