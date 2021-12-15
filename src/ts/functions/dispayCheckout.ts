import { products } from "../models/products";
import { removeModal } from "../functions/removeModal";
import { Iprice, Iproducts, StorageProduct } from "../models/products";
import { isLength } from "cypress/types/lodash";

export function displayCheckout() {
  let ul: HTMLUListElement = document.getElementById("ul") as HTMLUListElement;
  let totalSum = 0;
  ul.innerHTML = "";

  if (!localStorage.getItem("cartList")) localStorage.setItem("cartList", "[]");

  if (localStorage.getItem("cartList").length == 2) {
    let wrapper: HTMLDivElement = document.getElementById(
      "shopping-container"
    ) as HTMLDivElement;
    let noListSpan: HTMLSpanElement = document.createElement(
      "span"
    ) as HTMLSpanElement;
    noListSpan.id = "no-list-span";
    noListSpan.innerHTML = "Det finns inga produkter i varukorgen";
    let x: HTMLHeadingElement = document.getElementById(
      "total-price"
    ) as HTMLDivElement;
    wrapper.insertBefore(noListSpan, x);
  } else {
    let productCartList: string = localStorage.getItem("cartList");
    let productCartListObject: StorageProduct[] = JSON.parse(productCartList);

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

      // ID and classnames
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
      productTitle.innerHTML = productCartListObject[i].Iproduct.name;
      quantityInput.value = productCartListObject[i].amount.toString();
      productImage.src = productCartListObject[i].Iproduct.url;
      productSize.innerHTML = "Storlek: " + productCartListObject[i].size;

      // Rätt pris och storlek på produkten
      if (productCartListObject[i].size == "s") {
        productPrice.innerHTML = `Pris: ${
          productCartListObject[i].Iproduct.price.s *
          productCartListObject[i].amount
        }kr (${productCartListObject[i].Iproduct.price.s}kr x ${
          productCartListObject[i].amount
        })`;
        totalSum +=
          productCartListObject[i].Iproduct.price.s *
          productCartListObject[i].amount;
      } else if (productCartListObject[i].size == "m") {
        productPrice.innerHTML = `Pris: ${
          productCartListObject[i].Iproduct.price.m *
          productCartListObject[i].amount
        }kr (${productCartListObject[i].Iproduct.price.m}kr x ${
          productCartListObject[i].amount
        }) `;
        totalSum +=
          productCartListObject[i].Iproduct.price.m *
          productCartListObject[i].amount;
      } else {
        productPrice.innerHTML = `Pris: ${
          productCartListObject[i].Iproduct.price.l *
          productCartListObject[i].amount
        }kr (${productCartListObject[i].Iproduct.price.l}kr x ${
          productCartListObject[i].amount
        })`;
        totalSum +=
          productCartListObject[i].Iproduct.price.l *
          productCartListObject[i].amount;
      }

      // Minska och öka antal
      increaseButton.addEventListener("click", () => {
        let currentValue: number = parseInt(quantityInput.value);
        if (currentValue < 15) currentValue++;
        quantityInput.value = currentValue.toString();
        productCartListObject[i].amount = currentValue;

        let productTostring = JSON.stringify(productCartListObject);
        localStorage.setItem("cartList", productTostring);

        displayCheckout();
      });

      reduceButton.addEventListener("click", () => {
        let currentValue: number = parseInt(quantityInput.value);
        if (currentValue > 1) currentValue--;
        quantityInput.value = currentValue.toString();
        productCartListObject[i].amount = currentValue;
        let productTostring = JSON.stringify(productCartListObject);
        localStorage.setItem("cartList", productTostring);

        displayCheckout();
      });

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

      let title = productCartListObject[i].Iproduct.name;
      let image = productCartListObject[i].Iproduct.url;

      // call the removeModal function
      removeButton.addEventListener("click", () => {
        removeModal(image, title, i, productCartListObject);
      });
    }
  }
  // Totalsum
  let totalPrice: HTMLHeadingElement = document.getElementById(
    "total-price"
  ) as HTMLHeadingElement;
  totalPrice.innerHTML = "Totalt: " + totalSum + " kr";
}

export function cantConfirmOrder() {
  let submitButton: HTMLButtonElement = document.getElementById(
    "submit-button"
  ) as HTMLButtonElement;
  if (localStorage.getItem("cartList").length == 2) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Du har inga varor i varukorgen");
    });
  }
}
