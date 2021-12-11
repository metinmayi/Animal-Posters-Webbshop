import { create } from "cypress/types/lodash";
import { StorageProduct } from "../models/products";
let totalPrice: number = 0;
let momsPrice: number = 0;

export function createProductsCheckout() {
  document.getElementById("shopping-cart").addEventListener("click", () => {
    document.getElementById("checkout-dropdown").style.display = "block";
  });
  document
    .getElementById("shopping-cart-phone")
    .addEventListener("click", () => {
      document.getElementById("checkout-dropdown").style.display = "block";
    });

  document.getElementById("close-checkout").addEventListener("click", () => {
    document.getElementById("checkout-dropdown").style.display = "none";
  });

  document.getElementById("add-button").addEventListener("click", () => {
    let cartListString: string = JSON.stringify(listAsObject);
    console.log(cartListString);
    localStorage.setItem("cartList", cartListString);
  });

  let cartListLS: string = localStorage.getItem("cartList");
  let listAsObject: StorageProduct[] = JSON.parse(cartListLS);

  ifElse(listAsObject);
}

export function ifElse(listAsObject) {
  if (listAsObject.length === 0) {
    console.log("tom");
    document.getElementById("empty-container").style.display = "block";
  } else {
    document.getElementById("empty-container").style.display = "none";
    let productsRemove = document.getElementById("checkout-products-container");
    while (productsRemove.firstChild) {
      productsRemove.removeChild(productsRemove.firstChild);
    }
    //Tar bort de gamla HTML-elementen fär att ge plats åt en uppdaterad lista
    let momsRemove = document.getElementById("moms-price");
    while (momsRemove.firstChild) {
      momsRemove.removeChild(momsRemove.firstChild);
    }

    //Tar bort de gamla HTML-elementen fär att ge plats åt en uppdaterad lista
    let totalRemove = document.getElementById("total-price");
    while (totalRemove.firstChild) {
      totalRemove.removeChild(totalRemove.firstChild);
    }

    createHTML(listAsObject);
  }
}

export function createHTML(listAsObject) {
  //Skapar HTML efter listan som är lagrad i localStorage
  totalPrice = 0;

  for (let i = 0; i < listAsObject.length; i++) {
    console.log(listAsObject[i].amount);

    let productWrapper: HTMLDivElement = document.createElement("div");
    productWrapper.className = "checkout-products";

    let imageWrapper: HTMLDivElement = document.createElement("div");
    imageWrapper.className = "image-wrapper";
    imageWrapper.setAttribute(
      "style",
      `background-image: url("${listAsObject[i].Iproduct.url}")`
    );
    imageWrapper.setAttribute(
      "alt",
      `The picture of a ${listAsObject[i].Iproduct.name}`
    );

    let textWrapper: HTMLDivElement = document.createElement("div");
    textWrapper.className = "text-wrapper";

    let productName: HTMLHeadingElement = document.createElement("h1");
    productName.id = "name";
    productName.innerHTML = listAsObject[i].Iproduct.name;

    let productSize: HTMLParagraphElement = document.createElement("p");
    productSize.id = "size";

    if (listAsObject[i].size === "s") {
      productSize.innerHTML = "Storlek: Small";
    } else if (listAsObject[i].size === "m") {
      productSize.innerHTML = "Storlek: Medium";
    } else {
      productSize.innerHTML = "Storlek: Large";
    }

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.id = "price";
    if (listAsObject[i].size === "s") {
      productPrice.innerHTML =
        listAsObject[i].Iproduct.price.s * listAsObject[i].amount + " kr";
    } else if (listAsObject[i].size === "m") {
      productPrice.innerHTML =
        listAsObject[i].Iproduct.price.m * listAsObject[i].amount + " kr";
    } else {
      productPrice.innerHTML =
        listAsObject[i].Iproduct.price.l * listAsObject[i].amount + " kr";
    }

    let inputContainer: HTMLDivElement = document.createElement("div");
    inputContainer.id = "input-container";

    let label: HTMLParagraphElement = document.createElement("p");
    label.innerHTML = "Antal:";
    label.id = "label";

    let amount: HTMLParagraphElement = document.createElement("p");
    amount.innerHTML = listAsObject[i].amount + " st";

    let trashDiv: HTMLDivElement = document.createElement("div");
    trashDiv.id = "trash-div";

    let trash: HTMLElement = document.createElement("i");
    trash.className = "far fa-trash-alt";

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
    inputContainer.appendChild(amount);

    productWrapper.appendChild(trashDiv);
    trashDiv.appendChild(trash);

    //Varje produkts pris adderas för aqtt sen kunna räkna ut totalsumman
    totalPrice += parseInt(productPrice.innerHTML);

    trashDiv.addEventListener("click", () => {
      momsPrice = 0;
      console.log(listAsObject[i]);
      // let indexRemove = listAsObject.indexOf(listAsObject[i]);
      listAsObject.splice(i, 1);

      console.log(listAsObject);

      let deleteList = document.getElementById("checkout-products-container");

      while (deleteList.firstChild) {
        deleteList.removeChild(deleteList.firstChild);
      }

      let deleteMomsList = document.getElementById("moms-price");

      while (deleteMomsList.firstChild) {
        deleteMomsList.removeChild(deleteMomsList.firstChild);
      }
      let deletTotalList = document.getElementById("total-price");

      while (deletTotalList.firstChild) {
        deletTotalList.removeChild(deletTotalList.firstChild);
      }

      let cartListString: string = JSON.stringify(listAsObject);
      console.log(cartListString);
      localStorage.setItem("cartList", cartListString);

      if (listAsObject.length === 0) {
        ifElse(listAsObject);
      } else {
        createHTML(listAsObject);
      }
    });
  }
  createPrice(totalPrice);
}

function createPrice(totalPrice) {
  momsPrice = 0.12 * totalPrice;

  momsPrice = Math.round(momsPrice);

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
