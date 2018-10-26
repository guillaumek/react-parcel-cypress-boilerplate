describe("App Test", function() {
  it("Does not do much!", function() {
    cy.visit("http://localhost:1234");

    cy.contains("App Starter");
  });
});
