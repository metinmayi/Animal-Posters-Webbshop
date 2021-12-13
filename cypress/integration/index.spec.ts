describe("Index page tests", () => {
  it("should open hamburgermenu", () => {
    cy.visit("http://localhost:1234");

    cy.viewport("iphone-x");

    cy.get("#hamburger-icon").click();

    cy.get("#hamburger").should("be.visible");

    cy.get("#close").click();

    cy.get("#hamburger").should("not.be.visible");
  });

  it("should open dropdown-cart", () => {
    cy.visit("http://localhost:1234");

    cy.viewport("macbook-11");

    cy.get("#shopping-cart").click();

    cy.get("#dropdown-wrapper").should("be.visible");

    cy.get("#close-checkout").click();

    cy.get("#dropdown-wrapper").should("not.be.visible");
  });
});
