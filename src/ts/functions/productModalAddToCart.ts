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
    //Takes the title of the Modal. Checks our list of products(products[]) and finds the one that has the same name as the Modal title. This it how we identify
    //which product was clicked.
    let incomingProduct: Iproducts;
    let productName: string = titleIdentifier.innerHTML;
    products.forEach((product) => {
      productName == product.name ? (incomingProduct = product) : null;
    });
    //Creates a new product based on the incomingProdcut(Iproduct), the size and amount values that the user put in.
    let newProduct = new StorageProduct(
      incomingProduct,
      size.value,
      parseInt(amountOfProducts.value)
    );

    //All CODE BELOW IS MANIPULATING THE LOCALSTORAGE.
    //Checks for an existing LocalStorage list. If there is none, it creates an empty array.
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    }
    let cartList: string = localStorage.getItem("cartList");
    let localStorageArray: StorageProduct[] = JSON.parse(cartList);

    //Compares our newProduct with the ones that exist in the localStorage. If it finds a match, it sets the matchIndex to the index of the found match.
    let matchIndex: number;
    localStorageArray.forEach((storageItem, storageItemIndex) => {
      if (
        JSON.stringify(storageItem.Iproduct) ===
          JSON.stringify(newProduct.Iproduct) &&
        storageItem.size.toString() === newProduct.size.toString()
      ) {
        matchIndex = storageItemIndex;
      }
    });

    //If a match was found previously, it only changes the amount of the already existing object. Else, it pushes a new object to the array.
    if (matchIndex >= 0) {
      localStorageArray[matchIndex].amount += parseInt(amountOfProducts.value);
    } else {
      localStorageArray.push(newProduct);
    }

    let localStorageArrayStringify: string = JSON.stringify(localStorageArray);
    localStorage.setItem("cartList", localStorageArrayStringify);

    //Closes modal
    modalContainer.className = "";

    //Calls the function that updates the products in the Checkout dropdown.
    createProductsCheckout();
  });
}
