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
    let match: boolean = true;

    //Finds the correct products by checking which one has the same name as the Modal title
    products.forEach((product) => {
      productName == product.name ? (incomingProduct = product) : null;
    });
    //Sets the size that the user selected.
    if (size.value == "s") incomingProduct.small = true;
    if (size.value == "m") incomingProduct.medium = true;
    if (size.value == "l") incomingProduct.large = true;
    //If there´s no list in LS, it creates one
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    }

    let cartList: string = localStorage.getItem("cartList");
    let localStorageArray: Iproducts[] = JSON.parse(cartList);

    //If theres no item in the LS list, it will only add a value and eventually get pushed.
    if (localStorageArray.length == 0) {
      incomingProduct.amount = parseInt(amountOfProducts.value);
      localStorageArray.push(incomingProduct);
      console.log("Length was 0, pushed item instantly");
    } else {
      let smallMatch: boolean;
      let mediumMatch: boolean;
      let largeMatch: boolean;
      let noMatch: boolean;
      for (let index = 0; index < localStorageArray.length; index++) {
        if (
          incomingProduct.name == localStorageArray[index].name &&
          incomingProduct.small == true &&
          localStorageArray[index].small == true
        ) {
          console.log(`Index ${index} matched small size!`);
          localStorageArray[index].amount++;
          break;
          // smallMatch = true;
        } else if (
          incomingProduct.name == localStorageArray[index].name &&
          incomingProduct.medium == true &&
          localStorageArray[index].medium == true
        ) {
          console.log(`Index ${index} matched medium size!`);
          localStorageArray[index].amount++;
          break;
          // mediumMatch = true;
        } else if (
          incomingProduct.name == localStorageArray[index].name &&
          incomingProduct.large == true &&
          localStorageArray[index].large == true
        ) {
          console.log(index + "Matched large!");
          localStorageArray[index].amount++;
          break;
          // largeMatch = true;
        } else {
          match = false;
          break;
        }
      }
    }
    // If there are items in the list. We want to check for matches. Upon matching, edit a products ".amount" and push, rather than pushing a new object.
    if (match == false) {
      console.log("No matching item, creating new one");
      incomingProduct.amount = parseInt(amountOfProducts.value);
      localStorageArray.push(incomingProduct);
    }
    let localStorageArrayStringify: string = JSON.stringify(localStorageArray);
    localStorage.setItem("cartList", localStorageArrayStringify);
    incomingProduct.small = false;
    incomingProduct.medium = false;
    incomingProduct.large = false;

    //Closes modal
    modalContainer.className = "";

    //Uppdaterar listan och startar om funktionen för att skapa nya HTML-element i dropdownen
    createProductsCheckout();
  });
}
