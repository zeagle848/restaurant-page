describe("Testing the restaurant page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("Loads on the home page and the focus is on the home button", () => {
    cy.get(".home-page-header").first().should("have.text", "About Us");
    cy.get(".header-button-clicked").should(
      "have.text",
      "\n          Home\n        "
    );
  });
  it("Should be able to move between tabs without error", () => {
    cy.get("#menu-button").click();
    cy.get(".menu-header").first().should("have.text", "Coffee and Drinks");

    cy.get("#contact-button").click();
    cy.get(".contact-header").first().should("have.text", "Phone Number");

    cy.get("#home-button").click();
    cy.get(".home-page-header").first().should("have.text", "About Us");
    cy.get(".header-button-clicked").should(
      "have.text",
      "\n          Home\n        " //Not sure why but the content of the Home button is formatted with two new line (\n) characters
    );
  });
});
