import { identity, indexOf, remove } from "cypress/types/lodash";
import { Iproducts } from "../models/products";
import { displayCart } from "./displayCart";
import { displayCheckout } from "./dispayCheckout";
import { updateLanguageServiceSourceFile } from "typescript";

export function removeModal(bild: string, namn: string, i: number, lista) {
  //#region Declarations to "remove" modal
  let removeModalContainer: HTMLDivElement = document.getElementById(
    "container-modal"
  ) as HTMLDivElement;
  let productImage: HTMLImageElement = document.getElementById(
    "correctProduct"
  ) as HTMLImageElement;
  let productTitle: HTMLParagraphElement = document.getElementById(
    "product-title"
  ) as HTMLParagraphElement;
  let cancelButton: HTMLButtonElement = document.getElementById(
    "cancel"
  ) as HTMLButtonElement;
  let confirmButton: HTMLButtonElement = document.getElementById(
    "confirm"
  ) as HTMLButtonElement;
  //#endregion

  //Opens Modal
  removeModalContainer.className = "show-container-modal";

  let corretImage = bild;
  let correctTitle = namn;
  productImage.src = corretImage;
  productTitle.innerHTML = correctTitle;

  //confirm button - remove item from localstorage
  confirmButton.addEventListener("click", () => {
    // let localString: string = localStorage.getItem("cartList");
    // let productCartListObj = JSON.parse(localString);

    lista.splice(i, 1);

    i--;

    let productTostring = JSON.stringify(lista);
    localStorage.setItem("cartList", productTostring);
    // run this function from shoppingcart page
    if (document.URL.includes("shoppingcart.html")) {
      displayCart();
      // run this function from checkout page
    } else if (document.URL.includes("checkout.html")) {
      displayCheckout();
    }
    removeModalContainer.className = "";
  });

  //Close the Modal
  cancelButton.addEventListener("click", () => {
    removeModalContainer.className = "";
  });
}
