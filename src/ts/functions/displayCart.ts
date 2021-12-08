import { products } from "../models/products";
import { removeModal } from "../functions/removeModal";

export function displayCart() {
  //#region declarations
  let ul: HTMLUListElement = document.getElementById("ul") as HTMLUListElement;
  let li: HTMLLIElement = document.createElement("li");
  let product: HTMLDivElement = document.createElement("div");
  let productBoxLeft: HTMLDivElement = document.createElement("div");
  let imgBox: HTMLDivElement = document.createElement("div");
  let productImg: HTMLImageElement = document.createElement("img");
  let productFact: HTMLDivElement = document.createElement("div");
  let productName: HTMLHeadingElement = document.createElement("h4");
  let sizeBox: HTMLDivElement = document.createElement("div");
  let sizeSpan: HTMLSpanElement = document.createElement("span");
  let productPrice: HTMLParagraphElement = document.createElement("p");
  let productBoxRight: HTMLDivElement = document.createElement("div");
  let quantityBox: HTMLDivElement = document.createElement("div");
  let quantitySpan: HTMLSpanElement = document.createElement("span");
  //PLUS OCH MINUS
  let reduceButton: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  let increaseButton: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  //
  let quantityInput: HTMLInputElement = document.createElement("input");
  let flexBoxRight: HTMLDivElement = document.createElement("div");
  let removeButton: HTMLParagraphElement = document.createElement("p");
  //#endregion

  // id and classnames
  li.id = "li";
  product.id = "product";
  productBoxLeft.id = "product-box-left";
  imgBox.id = "imgBox";
  productImg.src = products[0].url;
  productImg.id = "productImg";
  productFact.id = "product-fact";
  productName.className = "product-name";
  sizeBox.id = "size-box";
  productPrice.className = "product-price";
  productBoxRight.id = "product-box-right";
  reduceButton.id = "reduce-button";
  increaseButton.id = "increase-button";
  quantityBox.id = "quantity-box";
  quantitySpan.id = "quantity-span";
  sizeSpan.id = "size-span";
  quantityInput.id = "quantity-input";
  flexBoxRight.id = "flex-box-right";
  removeButton.id = "remove";

  // innerHTML
  sizeSpan.innerHTML = "Storlek: ";
  reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
  increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
  //   quantitySpan.innerHTML = "Antal: ";
  removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>" + " Ta bort";
  productName.innerHTML = products[0].name;
  productPrice.innerHTML = "Pris: " + products[0].price.s.toString() + " sek";

  ul.appendChild(li);
  li.appendChild(product);
  product.appendChild(productBoxLeft);
  productBoxLeft.appendChild(imgBox);
  imgBox.appendChild(productImg);
  productBoxRight.appendChild(productFact);
  productFact.appendChild(productName);
  productFact.appendChild(productPrice);
  product.appendChild(productBoxRight);
  productBoxRight.appendChild(quantityBox);
  quantityBox.appendChild(quantitySpan);
  quantityBox.appendChild(reduceButton);
  quantityBox.appendChild(quantityInput);
  quantityBox.appendChild(increaseButton);
  sizeBox.appendChild(sizeSpan);
  flexBoxRight.appendChild(sizeBox);
  flexBoxRight.appendChild(quantityBox);
  flexBoxRight.appendChild(removeButton);
  productBoxRight.appendChild(flexBoxRight);

  removeButton.addEventListener("click", removeModal);

  // TOTALSUMMA
  let totalPrice: HTMLHeadingElement = document.getElementById(
    "total-price"
  ) as HTMLHeadingElement;
  totalPrice.innerHTML = "Totalt: " + products[0].price.s.toString() + " sek";
}
