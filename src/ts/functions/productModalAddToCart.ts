import {
  products,
  Iprice,
  Iproducts,
  StorageProduct,
} from "../models/products";
import { createProductsCheckout } from "../functions/createProductsCheckout";

import { createHTML } from "../functions/createProductsCheckout";

export function productModalAddToCart() {
  //#region Declarations
  let titleIdentifier: HTMLParagraphElement = document.getElementById(
    "modalTitle"
  ) as HTMLParagraphElement;
  let addButton: HTMLButtonElement = document.getElementById(
    "addProduct"
  ) as HTMLButtonElement;
  let amountOfProducts: HTMLInputElement = document.getElementById(
    "productModalAmount"
  ) as HTMLInputElement;
  let modalContainer: HTMLDivElement = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;
  let size: HTMLSelectElement = document.getElementById(
    "productModalSize"
  ) as HTMLSelectElement;
  //#endregion
  addButton.addEventListener("click", (e) => {
    let incomingProduct: Iproducts;
    let productName: string = titleIdentifier.innerHTML;
    let match: boolean = true;

    //Finds the correct products by checking which one has the same name as the Modal title
    products.forEach((product) => {
      productName == product.name ? (incomingProduct = product) : null;
    });

    let newProduct = new StorageProduct(
      incomingProduct,
      size.value,
      parseInt(amountOfProducts.value)
    );
    //Sets the size that the user selected.
    //If there´s no list in LS, it creates one
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    }
    let cartList: string = localStorage.getItem("cartList");
    let localStorageArray: StorageProduct[] = JSON.parse(cartList);

    let matchIndex: number;

    localStorageArray.forEach((storageItem, storageItemIndex) => {
      if (
        JSON.stringify(storageItem.Iproduct) ===
          JSON.stringify(newProduct.Iproduct) &&
        storageItem.size.toString() === newProduct.size.toString()
      ) {
        matchIndex = storageItemIndex;
        console.log("Match found");
        console.log(JSON.stringify(newProduct.Iproduct));
        console.log(newProduct.size.toString());
      }
    });

    if (matchIndex >= 0) {
      localStorageArray[matchIndex].amount += parseInt(amountOfProducts.value);
    } else {
      localStorageArray.push(newProduct);
    }

    let localStorageArrayStringify: string = JSON.stringify(localStorageArray);
    localStorage.setItem("cartList", localStorageArrayStringify);

    //Closes modal
    modalContainer.className = "";

    //Uppdaterar listan och startar om funktionen för att skapa nya HTML-element i dropdownen
    // createProductsCheckout();
  });
}
