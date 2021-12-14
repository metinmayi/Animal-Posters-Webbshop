import { identity, indexOf, remove } from "cypress/types/lodash";
import { Iproducts, StorageProduct } from "../models/products";
import { displayCart } from "./displayCart";
import { displayCheckout } from "./dispayCheckout";
import { updateLanguageServiceSourceFile } from "typescript";

export function removeModal(
  image: string,
  title: string,
  i: number,
  list: StorageProduct[]
) {
  //#region Declarations to "remove" modal
  let removeModalContainer: HTMLDivElement = document.getElementById(
    "container-modal"
  ) as HTMLDivElement;
  let productImage: HTMLImageElement = document.getElementById(
    "correctProduct"
  ) as HTMLImageElement;
  let buttonContainer: HTMLDivElement = document.getElementById(
    "modal-button-container"
  ) as HTMLDivElement;
  let productTitle: HTMLParagraphElement = document.getElementById(
    "product-title"
  ) as HTMLParagraphElement;
  let cancelButton: HTMLButtonElement = document.createElement("button");
  let confirmButton: HTMLButtonElement = document.createElement("button");
  //#endregion

  //Opens Modal
  removeModalContainer.className = "show-container-modal";
  cancelButton.id = "cancel";
  confirmButton.id = "confirm";
  cancelButton.innerHTML = "Avbryt";
  confirmButton.innerHTML = "Bekräfta";
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(confirmButton);

  let corretImage = image;
  let correctTitle = title;
  productImage.src = corretImage;
  productTitle.innerHTML = correctTitle;

  //confirm button - remove item from localstorage
  confirmButton.addEventListener("click", () => {
    list.splice(i, 1);

    buttonContainer.innerHTML = "";
    let productTostring = JSON.stringify(list);
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
