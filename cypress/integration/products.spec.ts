describe("Product page tests", () => {
  it("should open hamburger-menu", () => {
    cy.visit("http://localhost:1234/products.html");

    cy.viewport("iphone-x");

    cy.get("#hamburger-icon").click();

    cy.get("#hamburger").should("be.visible");

    cy.get("#close").click();

    cy.get("#hamburger").should("not.be.visible");
  });

  it("should open right modal", () => {
    cy.visit("http://localhost:1234/products.html");

    cy.viewport("macbook-15");

    cy.get(".product").first().click();

    cy.get("#modalContainer").should("be.visible");

    cy.get("#modalContainer #modalBody #modalTitle").should(
      "have.text",
      "Merge Conflicts"
    );

    cy.get("#closeProductsModal").click();

    cy.get("#modalContainer").should("not.be.visible");
  });

  it("should add right product, amount and size to cart", () => {
    cy.visit("http://localhost:1234/products.html");

    cy.viewport("macbook-15");

    cy.get(".product").first().click();

    cy.get("#modalContainer").should("be.visible");

    cy.get("#productModalSize").select("M");

    cy.get("#productModalAmount").clear();

    cy.get("#productModalAmount").type("4");

    cy.get("#addProduct").click();

    cy.get("#shopping-cart").click();

    cy.get("#name").should("have.text", "Merge Conflicts");

    cy.get("#size").should("have.text", "Storlek: Medium");

    cy.get("#input-container>p").eq(1).should("have.text", "4 st");
  });

  it("should add multiple products", () => {
    cy.visit("http://localhost:1234/products.html");

    cy.viewport("macbook-15");

    cy.get("#mainProducts>.product").eq(0).click();

    cy.get("#modalContainer").should("be.visible");

    cy.get("#productModalSize").select("M");

    cy.get("#productModalAmount").clear();

    cy.get("#productModalAmount").type("4");

    cy.get("#addProduct").click();

    cy.get("#mainProducts>.product").eq(2).click();

    cy.get("#productModalSize").select("S");

    cy.get("#productModalAmount").clear();

    cy.get("#productModalAmount").type("7");

    cy.get("#addProduct").click();

    cy.get("#mainProducts>.product").eq(5).click();

    cy.get("#productModalSize").select("L");

    cy.get("#productModalAmount").clear();

    cy.get("#productModalAmount").type("3");

    cy.get("#addProduct").click();

    cy.get("#shopping-cart").click();

    cy.get("#checkout-products-container .checkout-products").should(
      "have.length",
      3
    );
  });

  it("should remove product", () => {
    cy.visit("http://localhost:1234/products.html");

    cy.viewport("macbook-15");

    cy.get(".product").first().click();

    cy.get("#modalContainer").should("be.visible");

    cy.get("#productModalSize").select("M");

    cy.get("#productModalAmount").clear();

    cy.get("#productModalAmount").type("4");

    cy.get("#addProduct").click();

    cy.get("#shopping-cart").click();

    cy.get("#trash-div").click();

    cy.get(".products").should("have.length", 0);

    cy.get("#empty-container").should("be.visible");
  });

  it("should add right product to cart and visit shoppingcart.html", () => {
    cy.visit("http://localhost:1234/products.html");

    cy.viewport("macbook-15");

    cy.get(".product").first().click();

    cy.get("#modalContainer").should("be.visible");

    cy.get("#productModalSize").select("M");

    cy.get("#productModalAmount").clear();

    cy.get("#productModalAmount").type("4");

    cy.get("#addProduct").click();

    cy.get("#shopping-cart").click();

    cy.get("#name").should("have.text", "Merge Conflicts");

    cy.get("#size").should("have.text", "Storlek: Medium");

    cy.get("#input-container>p").eq(1).should("have.text", "4 st");

    cy.get("#add-button").click();

    cy.location("href").should("include", "/shoppingcart.html");
  });
});
