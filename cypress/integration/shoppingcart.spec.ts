describe("Testing shoppingcart page", () => {
  it("Should see an emty shoppingcart when localstorage is emty", () => {
    cy.visit("http://localhost:1234/shoppingcart.html");
    cy.get("#ul li").should("have.length", 0);
  });
});
