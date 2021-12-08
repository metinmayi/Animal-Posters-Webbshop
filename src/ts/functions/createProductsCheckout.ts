import { create } from "cypress/types/lodash";

export function createProductsCheckout() {
  if (typeof !localStorage.getItem("cartList")) {
    let emptyList: HTMLDivElement = document.createElement("div");
    emptyList.id = "empty-container";

    let emptyText: HTMLParagraphElement = document.createElement("p");
    emptyText.id = "empty-text";
    emptyText.innerHTML =
      "Din varukorg är tom, tryck på en vara och lägg till den i varukorgen för att fortsätta";

    document
      .getElementById("checkout-products-container")
      .appendChild(emptyList);
    emptyList.appendChild(emptyText);
  } else {
    createHTML();
  }
}

function createHTML() {
  let cartListLS = localStorage.getItem("cartList");

  let listAsObject = JSON.parse(cartListLS);

  console.log(listAsObject);

  let totalPrice: number = 0;
  let momsPrice: number = 0;

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

    // let inputContainer: HTMLDivElement = document.createElement("div");
    // inputContainer.id = "input-container";

    // let label: HTMLLabelElement = document.createElement("label");
    // label.setAttribute("for", "number-of-posters");
    // label.innerHTML = "Antal";

    // let input: HTMLInputElement = document.createElement("input");
    // input.setAttribute("type", "number");
    // input.setAttribute("min", "1");
    // input.id = "number-of-posters";

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

    // productWrapper.appendChild(inputContainer);
    // inputContainer.appendChild(label);
    // inputContainer.appendChild(input);

    productWrapper.appendChild(trash);

    totalPrice += parseInt(productPrice.innerHTML);
  }

  momsPrice = 0.12 * totalPrice;

  let totalText: HTMLParagraphElement = document.createElement("p");
  totalText.innerHTML = "Totalsumma:";

  let momsText: HTMLParagraphElement = document.createElement("p");
  momsText.innerHTML = "Varav moms:";

  let total: HTMLParagraphElement = document.createElement("p");
  total.innerHTML = totalPrice.toString() + " kr";

  let moms: HTMLParagraphElement = document.createElement("p");
  moms.innerHTML = momsPrice.toString() + " kr";

  document.getElementById("total-price").appendChild(totalText);
  document.getElementById("total-price").appendChild(total);
  document.getElementById("moms-price").appendChild(momsText);
  document.getElementById("moms-price").appendChild(moms);
}
