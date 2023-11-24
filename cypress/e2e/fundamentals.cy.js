describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i);
  })
  it('Accordion performs correctly', () => {
    cy.visit('/fundamentals')
    // cy.get('[data-test="accordion-1"]').contains(/Describe blocks/i);
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})