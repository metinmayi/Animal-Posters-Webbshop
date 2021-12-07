export function createProductsCheckout() {
  let cartList = [];

  let checkoutWrapper: HTMLDivElement = document.createElement("div");
  checkoutWrapper.id = "checkout-products-container";

  for (let i = 0; i < cartList.length; i++) {
    let productWrapper: HTMLDivElement = document.createElement("div");
    productWrapper.className = "checkout-products";

    let imageWrapper: HTMLDivElement = document.createElement("div");
    imageWrapper.className = "image-wrapper";

    let textWrapper: HTMLDivElement = document.createElement("div");
    textWrapper.className = "text-wrapper";

    let productName: HTMLHeadingElement = document.createElement("h1");
    productName.id = "name";

    let productPrice: HTMLParagraphElement = document.createElement("h1");
    productPrice.id = "price";

    let inputContainer: HTMLDivElement = document.createElement("div");
    inputContainer.className = "input-container";

    let label: HTMLLabelElement = document.createElement("label");
    label.setAttribute("for", "number-of-posters");

    let input: HTMLInputElement = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "1");
    input.id = "number-of-posters";

    let trash: HTMLElement = document.createElement("i");
    trash.className = "far fa-trash-alt";
    trash.id = "trash";
  }
}
