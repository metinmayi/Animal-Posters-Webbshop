import { products, Iprice, Iproducts } from "../models/products";

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
    console.log(incomingProduct);
    //Sets the size that the user selected.
    //If there´s no list in LS, it creates one
    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    }

    let cartList: string = localStorage.getItem("cartList");
    let localStorageArray: Iproducts[] = JSON.parse(cartList);

    let localStorageArrayStringify: string = JSON.stringify(localStorageArray);
    localStorage.setItem("cartList", localStorageArrayStringify);

    //Closes modal
    modalContainer.className = "";
  });
}
