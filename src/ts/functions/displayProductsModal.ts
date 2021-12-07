import { products } from "../models/products";

export function displayProductModals(Id: number) {
  //#region Declarations
  let modalContainer: HTMLDivElement = document.getElementById(
    "modalContainer"
  ) as HTMLDivElement;
  let modalImg: HTMLImageElement = document.getElementById(
    "modalImg"
  ) as HTMLImageElement;
  let modalTitle: HTMLParagraphElement = document.getElementById(
    "modalTitle"
  ) as HTMLParagraphElement;
  let modalTotalPrice: HTMLParagraphElement = document.getElementById(
    "modalTotal"
  ) as HTMLParagraphElement;
  let sizeInput: HTMLSelectElement = document.getElementById(
    "productModalSize"
  ) as HTMLSelectElement;
  let amountInput: HTMLInputElement = document.getElementById(
    "productModalAmount"
  ) as HTMLInputElement;
  let closeProductsModal: HTMLButtonElement = document.getElementById(
    "closeProductsModal"
  ) as HTMLButtonElement;
  //#endregion

  //Opens the Modal
  modalContainer.className = "showProductModal";

  //Produces the modal product based on which product was clicked on the website.
  modalImg.src = products[Id].url;
  modalTitle.innerText = products[Id].name;
  modalTotalPrice.innerText = `Totalbelopp: ${products[Id].price.s}kr`;
  //Calculates and updates the totalprice based on product size and amount of products.
  let totalprice: number;
  sizeInput.addEventListener("input", (e) => {
    if (!amountInput.value) return;
    if (sizeInput.value == "s")
      totalprice = parseInt(amountInput.value) * products[Id].price.s;
    if (sizeInput.value == "m")
      totalprice = parseInt(amountInput.value) * products[Id].price.m;
    if (sizeInput.value == "l")
      totalprice = parseInt(amountInput.value) * products[Id].price.l;
    modalTotalPrice.innerText = `Totalbelopp: ${totalprice}kr`;
    console.log("Registered");
  });
  amountInput.addEventListener("input", (e) => {
    if (!amountInput.value) return;
    if (sizeInput.value == "s")
      totalprice = parseInt(amountInput.value) * products[Id].price.s;
    if (sizeInput.value == "m")
      totalprice = parseInt(amountInput.value) * products[Id].price.m;
    if (sizeInput.value == "l")
      totalprice = parseInt(amountInput.value) * products[Id].price.l;
    modalTotalPrice.innerText = `Totalbelopp: ${totalprice}kr`;
    console.log("Registered");
  });

  console.log(sizeInput.value, amountInput.value, totalprice);

  //Closes the Modal

  closeProductsModal.addEventListener("click", (e) => {
    modalContainer.className = "";
  });
}
