import { products, Iprice, Iproducts } from "../models/products";
import { createProductsCheckout } from "../functions/createProductsCheckout";

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
<<<<<<< HEAD
    let match: boolean = true;
=======
    let match: boolean;
>>>>>>> 22e9931 (Working on it)

    //Finds the correct products by checking which one has the same name as the Modal title
    products.forEach((product) => {
      productName == product.name ? (incomingProduct = product) : null;
    });
<<<<<<< HEAD
    console.log(incomingProduct);
    //Sets the size that the user selected.
=======
    //Sets the size that the user selected.
    if (size.value == "s") incomingProduct.small = true;
    if (size.value == "m") incomingProduct.medium = true;
    if (size.value == "l") incomingProduct.large = true;
>>>>>>> 22e9931 (Working on it)
    //If there´s no list in LS, it creates one
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    }

    let cartList: string = localStorage.getItem("cartList");
    let localStorageArray: Iproducts[] = JSON.parse(cartList);

<<<<<<< HEAD
    let localStorageArrayStringify: string = JSON.stringify(localStorageArray);
    localStorage.setItem("cartList", localStorageArrayStringify);
=======
    //If theres no item in the LS list, it will only add a value and eventually get pushed.
    if (localStorageArray.length == 0) {
      incomingProduct.amount = parseInt(amountOfProducts.value);
      localStorageArray.push(incomingProduct);
      console.log("Length was 0, pushed item instantly");
    }
    // If there are items in the list. We want to check for matches. Upon matching, edit a products ".amount" and push, rather than pushing a new object.
    else {
      localStorageArray.forEach((localStorageItem) => {
        if (localStorageItem.name == incomingProduct.name) {
          // console.log("Got a namematch");
          if (localStorageItem.small == true && incomingProduct.small == true) {
            console.log("Got a name AND a small size match!");
            // localStorageItem.amount += parseInt(amountOfProducts.value);
            match = true;
            console.log("Same name and same small size. Set match to true");
          } else if (
            localStorageItem.medium == true &&
            incomingProduct.medium == true
          ) {
            console.log("Same name and same medium size, set match to true.");
            // incomingProduct.amount++;
            match = true;
          } else if (
            localStorageItem.large == true &&
            incomingProduct.large == true
          ) {
            console.log("Same name and same medium size, set match to true.");
            // incomingProduct.amount++;
            match = true;
          }
          // else {
          //   console.log("Not same name, not same size. Set match to false");
          //   // incomingProduct.amount = parseInt(amountOfProducts.value);
          //   // localStorageArray.push(incomingProduct);
          //   match = false;
          // }
        }
        if (localStorageItem.name != incomingProduct.name) {
          console.log("Entirely new name, set match to false");
          match = false;
        }
      });
    }
    if (match == true) {
      incomingProduct.amount += parseInt(amountOfProducts.value);
    }
    if (match == false) {
      incomingProduct.amount = parseInt(amountOfProducts.value);
      localStorageArray.push(incomingProduct);
    }

    let localStorageArrayStringify: string = JSON.stringify(localStorageArray);
    localStorage.setItem("cartList", localStorageArrayStringify);
    incomingProduct.small = false;
    incomingProduct.medium = false;
    incomingProduct.large = false;
>>>>>>> 22e9931 (Working on it)

    //Closes modal
    modalContainer.className = "";

    //Uppdaterar listan och startar om funktionen för att skapa nya HTML-element i dropdownen
    createProductsCheckout();
  });
}
