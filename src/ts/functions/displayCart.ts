import { removeModal } from "../functions/removeModal";
import { Iprice, Iproducts, StorageProduct } from "../models/products";

export function displayCart() {
  let ul: HTMLUListElement = document.getElementById("ul") as HTMLUListElement;
  let totalSum = 0;

  ul.innerHTML = "";

  // create/get cartList from localstorage
  if (!localStorage.getItem("cartList")) {
    localStorage.setItem("cartList", "[]");
  }

  if (localStorage.getItem("cartList").length == 2) {
    let wrapper: HTMLDivElement = document.getElementById(
      "wrapper"
    ) as HTMLDivElement;
    let noListSpan: HTMLSpanElement = document.createElement(
      "span"
    ) as HTMLSpanElement;
    noListSpan.className = "no-list-span";
    noListSpan.innerHTML = "Det finns inga produkter i varukorgen";
    let x: HTMLDivElement = document.getElementById(
      "total-container"
    ) as HTMLDivElement;
    wrapper.insertBefore(noListSpan, x);
  } else {
    let productCartList: string = localStorage.getItem("cartList");
    let productCartListObj: StorageProduct[] = JSON.parse(productCartList);

    for (let i = 0; i < productCartListObj.length; i++) {
      //#region declarations
      let li: HTMLLIElement = document.createElement("li");
      let product: HTMLDivElement = document.createElement("div");
      let productBoxLeft: HTMLDivElement = document.createElement("div");
      let imgBox: HTMLDivElement = document.createElement("div");
      let productImg: HTMLImageElement = document.createElement("img");
      let productFact: HTMLDivElement = document.createElement("div");
      let productName: HTMLHeadingElement = document.createElement("h4");
      let productPrice: HTMLParagraphElement = document.createElement("p");
      let productBoxRight: HTMLDivElement = document.createElement("div");
      let sizeBox: HTMLDivElement = document.createElement("div");
      let sizeSpan: HTMLSpanElement = document.createElement("span");
      let quantityBox: HTMLDivElement = document.createElement("div");
      let reduceButton: HTMLDivElement = document.createElement(
        "div"
      ) as HTMLDivElement;
      let increaseButton: HTMLDivElement = document.createElement(
        "div"
      ) as HTMLDivElement;
      let quantityInput: HTMLInputElement = document.createElement("input");
      let flexBoxRight: HTMLDivElement = document.createElement("div");
      let removeButton: HTMLParagraphElement = document.createElement("p");
      //#endregion

      // ID and classnames
      li.className = "li-shopping-cart";
      product.className = "product-shopping-cart";
      productBoxLeft.className = "product-box-left";
      imgBox.className = "imgBox";
      productImg.className = "productImg";
      productFact.className = "product-fact-shop-cart";
      productName.className = "product-name";
      sizeBox.className = "size-box";
      productPrice.className = "product-price";
      productBoxRight.className = "product-box-right";
      reduceButton.className = "reduce-button";
      increaseButton.className = "increase-button";
      quantityBox.className = "quantity-box";
      sizeSpan.className = "size-span";
      flexBoxRight.className = "flex-box-right";
      removeButton.className = "remove-button-shop-cart";
      quantityInput.className = "quantity-input";

      // innerHTML, value, src
      productImg.src = productCartListObj[i].Iproduct.url;
      productName.innerHTML = productCartListObj[i].Iproduct.name;
      quantityInput.value = productCartListObj[i].amount.toString();
      quantityInput.setAttribute("readonly", "true");
      reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
      increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
      removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>" + " Ta bort";
      sizeSpan.innerHTML = "Storlek: " + productCartListObj[i].size;

      // Display right size and price on product
      if (productCartListObj[i].size == "s") {
        productPrice.innerHTML = `Pris: ${
          productCartListObj[i].Iproduct.price.s * productCartListObj[i].amount
        }kr (${productCartListObj[i].Iproduct.price.s}kr x ${
          productCartListObj[i].amount
        })`;
        totalSum +=
          productCartListObj[i].Iproduct.price.s * productCartListObj[i].amount;
      } else if (productCartListObj[i].size == "m") {
        productPrice.innerHTML = `Pris: ${
          productCartListObj[i].Iproduct.price.m * productCartListObj[i].amount
        }kr (${productCartListObj[i].Iproduct.price.m}kr x ${
          productCartListObj[i].amount
        }) `;
        totalSum +=
          productCartListObj[i].Iproduct.price.m * productCartListObj[i].amount;
      } else {
        productPrice.innerHTML = `Pris: ${
          productCartListObj[i].Iproduct.price.l * productCartListObj[i].amount
        }kr (${productCartListObj[i].Iproduct.price.l}kr x ${
          productCartListObj[i].amount
        })`;
        totalSum +=
          productCartListObj[i].Iproduct.price.l * productCartListObj[i].amount;
      }

      // appendChild
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
      quantityBox.appendChild(reduceButton);
      quantityBox.appendChild(quantityInput);
      quantityBox.appendChild(increaseButton);
      sizeBox.appendChild(sizeSpan);
      flexBoxRight.appendChild(sizeBox);
      flexBoxRight.appendChild(quantityBox);
      flexBoxRight.appendChild(removeButton);
      productBoxRight.appendChild(flexBoxRight);

      // increase quantity button
      increaseButton.addEventListener("click", () => {
        let currentValue: number = parseInt(quantityInput.value);
        if (currentValue < 15) currentValue++;
        quantityInput.value = currentValue.toString();
        productCartListObj[i].amount = currentValue;
        let productTostring = JSON.stringify(productCartListObj);
        localStorage.setItem("cartList", productTostring);

        displayCart();
      });

      // reduce quantity
      reduceButton.addEventListener("click", () => {
        let currentValue: number = parseInt(quantityInput.value);
        if (currentValue > 1) currentValue--;
        quantityInput.value = currentValue.toString();
        productCartListObj[i].amount = currentValue;
        let productTostring = JSON.stringify(productCartListObj);
        localStorage.setItem("cartList", productTostring);

        displayCart();
      });

      let title = productCartListObj[i].Iproduct.name;
      let image = productCartListObj[i].Iproduct.url;

      // call the removeModal function
      removeButton.addEventListener("click", () => {
        removeModal(image, title, i, productCartListObj);
      });
    }
  }

  // Totalsum
  let totalPrice: HTMLHeadingElement = document.getElementById(
    "total-price"
  ) as HTMLHeadingElement;
  totalPrice.innerHTML = "Totalt: " + totalSum + " kr";
}
