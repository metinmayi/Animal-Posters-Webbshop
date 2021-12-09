import { products } from "../models/products";
import { removeModal } from "../functions/removeModal";
import { Iprice, Iproducts } from "../models/products";

export function displayCart() {
  console.log("Hey");
  let ul: HTMLUListElement = document.getElementById("ul") as HTMLUListElement;

  let totalSum = 0;

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
    let productCartListObj: Iproducts[] = JSON.parse(productCartList);

    console.log(productCartListObj);

    for (let i = 0; i < productCartListObj.length; i++) {
      //#region declarations
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

      // id and classnames
      li.id = "li";
      product.id = "product";
      productBoxLeft.id = "product-box-left";
      imgBox.id = "imgBox";

      productImg.id = "productImg";
      productFact.id = "product-fact";
      productName.className = "product-name";
      sizeBox.id = "size-box";
      productPrice.className = "product-price";
      productBoxRight.id = "product-box-right";
      reduceButton.id = "reduce-button";
      increaseButton.id = "increase-button";
      quantityBox.id = "quantity-box";
      sizeSpan.id = "size-span";
      flexBoxRight.id = "flex-box-right";
      removeButton.id = "remove";

      //
      productImg.src = productCartListObj[i].url;
      productName.innerHTML = productCartListObj[i].name;
      quantityInput.id = "quantity-input";

      quantityInput.value = productCartListObj.length.toString();
      // console.log(productCartListObj.id)
      //
      if (productCartListObj[i].small == true) {
        sizeSpan.innerHTML = "Storlek:" + " " + "small";
        productPrice.innerHTML = `Pris: ${productCartListObj[i].price.s} kr`;
        totalSum += productCartListObj[i].price.s;
      }
      if (productCartListObj[i].medium == true) {
        sizeSpan.innerHTML = `Storlek: medium`;
        productPrice.innerHTML =
          productPrice.innerHTML = `Pris: ${productCartListObj[i].price.m} kr`;
        totalSum += productCartListObj[i].price.m;
      }
      if (productCartListObj[i].large == true) {
        sizeSpan.innerHTML = `Storlek: large`;
        productPrice.innerHTML =
          productPrice.innerHTML = `Pris: ${productCartListObj[i].price.l} kr`;
        totalSum += productCartListObj[i].price.l;
      }

      reduceButton.innerHTML = "<i class='fas fa-angle-left'></i>";
      increaseButton.innerHTML = "<i class='fas fa-angle-right'></i>";
      removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>" + " Ta bort";

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

      removeButton.addEventListener("click", removeModal);
    }
  }

  // Totalsum
  let totalPrice: HTMLHeadingElement = document.getElementById(
    "total-price"
  ) as HTMLHeadingElement;
  totalPrice.innerHTML = "Totalt: " + totalSum + " kr";
}
