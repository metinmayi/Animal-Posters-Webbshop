import { Iprice, Iproducts } from "../models/products";

export function createProductsCheckout() {
  let cartListen = localStorage.getItem("cartList");

  console.log("Lista: " + cartListen[0]);

  let listAsObject = JSON.parse(cartListen);

  console.log(listAsObject);

  let totalPrice: string = "";

  for (let i = 0; i < listAsObject.length; i++) {
    let productWrapper: HTMLDivElement = document.createElement("div");
    productWrapper.className = "checkout-products";

    let imageWrapper: HTMLDivElement = document.createElement("div");
    imageWrapper.className = "image-wrapper";

    let textWrapper: HTMLDivElement = document.createElement("div");
    textWrapper.className = "text-wrapper";

    let productName: HTMLHeadingElement = document.createElement("h1");
    productName.id = "name";
    productName.innerHTML = listAsObject[i].name;

    let productSize: HTMLParagraphElement = document.createElement("p");
    productSize.id = "size";

    if (listAsObject[i].small === true) {
      productSize.innerHTML = "Storlek: Small";
    } else if (listAsObject[i].medium === true) {
      productSize.innerHTML = "Storlek: Medium";
    } else {
      productSize.innerHTML = "Storlek: Large";
    }

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.id = "price";
    if (listAsObject[i].small === true) {
      productPrice.innerHTML = listAsObject[i].price.s + " kr";
    } else if (listAsObject[i].medium === true) {
      productPrice.innerHTML = listAsObject[i].price.m + " kr";
    } else {
      productPrice.innerHTML = listAsObject[i].price.l + " kr";
    }

    let inputContainer: HTMLDivElement = document.createElement("div");
    inputContainer.id = "input-container";

    let label: HTMLLabelElement = document.createElement("label");
    label.setAttribute("for", "number-of-posters");
    label.innerHTML = "Antal";

    let input: HTMLInputElement = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "1");
    input.id = "number-of-posters";

    let trash: HTMLElement = document.createElement("i");
    trash.className = "far fa-trash-alt";
    trash.id = "trash";

    document
      .getElementById("checkout-products-container")
      .appendChild(productWrapper);
    productWrapper.appendChild(imageWrapper);
    productWrapper.appendChild(textWrapper);

    textWrapper.appendChild(productName);
    textWrapper.appendChild(productSize);
    textWrapper.appendChild(productPrice);

    productWrapper.appendChild(inputContainer);
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    productWrapper.appendChild(trash);

    // totalPrice += productPrice.innerHTML;

    // let total: HTMLParagraphElement = document.createElement("p");
    // total.innerHTML = totalPrice;

    // document.getElementById("total-price").appendChild(total);
  }
}
