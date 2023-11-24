describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Contains correct header text", () => {
    cy.getDataTest("fundamentals-header").contains(/Testing Fundamentals/i);
  });
  it("Accordion performs correctly", () => {
    // cy.get('[data-test="accordion-1"]').contains(/Describe blocks/i);
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
