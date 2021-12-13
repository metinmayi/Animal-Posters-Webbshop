import { products } from "../models/products";
import { removeModal } from "../functions/removeModal";
import { Iprice, Iproducts } from "../models/products";
import { isLength } from "cypress/types/lodash";

export function displayCheckout() {
  let ul: HTMLUListElement = document.getElementById("ul") as HTMLUListElement;
  let totalSum = 0;
  ul.innerHTML = "";

  if (!localStorage.getItem("cartList")) {
    let wrapper: HTMLDivElement = document.getElementById(
      "wrapper"
    ) as HTMLDivElement;
    let noListSpan: HTMLSpanElement = document.createElement(
      "span"
    ) as HTMLSpanElement;
    noListSpan.id = "no-list-span";
    noListSpan.innerHTML = "Det finns inga produkter i varukorgen";
    let x: HTMLDivElement = document.getElementById(
      "total-container"
    ) as HTMLDivElement;
    wrapper.insertBefore(noListSpan, x);
  } else {
    let productCartList: string = localStorage.getItem("cartList");
    let productCartListObject: Iproducts[] = JSON.parse(productCartList);

    for (let i = 0; i < productCartListObject.length; i++) {
      let li: HTMLLIElement = document.createElement("li");
      let productContainer: HTMLDivElement = document.createElement("div");
      let productContainerLeft: HTMLDivElement = document.createElement("div");
      let imageContainer: HTMLDivElement = document.createElement("div");
      let productImage: HTMLImageElement = document.createElement("img");
      let productFactContainer: HTMLDivElement = document.createElement("div");
      let productTitle: HTMLHeadingElement = document.createElement("h4");
      let productSize: HTMLParagraphElement = document.createElement("p");
      let productPrice: HTMLParagraphElement = document.createElement("p");
      let productContainerRight: HTMLDivElement = document.createElement("div");
      let quantityBox: HTMLDivElement = document.createElement("div");
      let quantityInput: HTMLInputElement = document.createElement("input");
      let reduceButton: HTMLDivElement = document.createElement("div");
      let increaseButton: HTMLDivElement = document.createElement("div");
      let removeButton: HTMLParagraphElement = document.createElement("p");
      let FactContainer: HTMLDivElement = document.createElement("div");
      let flexContainer: HTMLDivElement = document.createElement("div");
      // ID
      li.id = "id";
      productContainer.id = "product";
      productContainerLeft.id = "product-box-left";
      imageContainer.id = "img";
      productImage.id = "product-image";
      productFactContainer.id = "product-fact";
      productTitle.className = "product-name";
      productSize.className = "product-size";
      productPrice.className = "product-price";
      productContainerRight.id = "product-box-right";
      quantityBox.id = "quantity-box";
      quantityInput.id = "quantity-input";
      reduceButton.id = "reduce-button";
      increaseButton.id = "increase-button";
      removeButton.id = "remove";
      flexContainer.id = "flex-container";
      FactContainer.id = "fact-container";

      //innerHTML , value, src
      reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
      increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
      removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>" + " Ta bort";
      productTitle.innerHTML = productCartListObject[i].name;
      quantityInput.value = productCartListObject.length.toString();
      productImage.src = productCartListObject[i].url;
      productSize.innerHTML = "Storlek: ";

      //appendChild
      ul.appendChild(li);
      li.appendChild(productContainer);
      productContainer.appendChild(productContainerLeft);
      productContainer.appendChild(productFactContainer);
      productContainer.appendChild(productContainerRight);
      productContainerLeft.appendChild(imageContainer);
      imageContainer.appendChild(productImage);
      productContainerRight.appendChild(productFactContainer);
      productContainerRight.appendChild(flexContainer);
      productFactContainer.appendChild(productTitle);
      productFactContainer.appendChild(productPrice);
      flexContainer.appendChild(productSize);
      flexContainer.appendChild(quantityBox);
      flexContainer.appendChild(removeButton);
      quantityBox.appendChild(reduceButton);
      quantityBox.appendChild(quantityInput);
      quantityBox.appendChild(increaseButton);
    }
  }
}
