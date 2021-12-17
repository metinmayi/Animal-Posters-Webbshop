describe("Testing shoppingcart page", () => {
  it("Should see an emty shoppingcart when localstorage is emty", () => {
    cy.visit("http://localhost:1234/shoppingcart.html");
    cy.get("#ul li").should("have.length", 0);
    cy.get(".no-list-span").should("have.length", 1);
    cy.get("#total-price").should("have.value", 0 || "");
    cy.get("#mobileToggleWishlist").click();
  });

  it("should have continue shopping button", () => {
    cy.visit("http://localhost:1234/shoppingcart.html");
    cy.get("#continue-shopping").click();
  });
  it("Hamburgermeny should work", () => {
    cy.visit("http://localhost:1234/shoppingcart.html");
    cy.get("#hamburger-icon").click();
    cy.get("#hamburger-icon").should("be.visible");
    cy.get("#hamburger > #nav-list > > a").should("have.length", 3);
  });

  it("should have a checkout button", () => {
    cy.visit("http://localhost:1234/shoppingcart.html");
    cy.get("#to-checkout").click();
    cy.location("href").should("include", "/checkout.html");
  });

  it("products add to cart should be visible in shoppingcart", () => {
    cy.visit("http://localhost:1234/products.html");
    cy.get(".product").first().click();
    cy.get("#addProduct").click();
    cy.get("#shopping-cart-phone").click();
    cy.get("#add-button").click();
  });

  it("you should be able to increas and reduce your products", () => {
    cy.visit("http://localhost:1234/products.html");
    cy.get(".product").first().click();
    cy.get("#addProduct").click();
    cy.get("#shopping-cart-phone").click();
    cy.get("#add-button").click();
    cy.get(".increase-button").click();
    cy.get(".increase-button").click();
    cy.get(".increase-button").click();
    cy.get(".quantity-input").should("have.value", 4);
    cy.get(".reduce-button").click();
    cy.get(".quantity-input").should("have.value", 3);
    cy.get(".reduce-button").click();
    cy.get(".quantity-input").should("have.value", 2);
  });

  it("you should be able to remove the product from shoppingcart", () => {
    cy.visit("http://localhost:1234/products.html");
    cy.get(".product").first().click();
    cy.get("#addProduct").click();
    cy.get("#shopping-cart-phone").click();
    cy.get("#add-button").click();
    cy.get(".remove-button-shop-cart").click();
    cy.get("#remove-modal").should("be.visible");
    cy.get(".cancel-button").click();
    cy.get("#remove-modal").should("not.be.visible");
    cy.get(".remove-button-shop-cart").click();
    cy.get(".confirm-button").click();
    cy.get("#remove-modal").should("not.be.visible");
    cy.get("#ul li").should("have.length", 0 || "");
  });
});
