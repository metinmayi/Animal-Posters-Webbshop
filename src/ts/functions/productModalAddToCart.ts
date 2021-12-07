import { products } from "../models/products";

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
  //#endregion
  addButton.addEventListener("click", (e) => {
    console.log(titleIdentifier.innerHTML + "!");
    let regex: RegExp = new RegExp(titleIdentifier.innerHTML);
    let correctProduct;

    products.forEach((e) => {
      regex.test(e.name) ? (correctProduct = e) : null;
    });
    console.log(correctProduct);

    if (!localStorage.getItem("cartList")) {
      localStorage.setItem("cartList", "[]");
    }

    let cartList: string = localStorage.getItem("cartList");
    let cartListArray: string[] = JSON.parse(cartList);
    for (let x = 0; x < parseInt(amountOfProducts.value); x++) {
      cartListArray.push(correctProduct);
    }
    let cartListArrayStringify: string = JSON.stringify(cartListArray);
    localStorage.setItem("cartList", cartListArrayStringify);

    //Closes modal
    modalContainer.className = "";
  });
}
