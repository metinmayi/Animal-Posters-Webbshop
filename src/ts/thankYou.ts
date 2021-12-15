import { StorageProduct } from "../ts/models/products";

window.onload = function () {
  let cartListLS: string = localStorage.getItem("cartList");
  let amountList: StorageProduct[] = JSON.parse(cartListLS);

  let heading: HTMLHeadingElement = document.createElement("h1");
  heading.innerHTML = "Tack för din beställning!";
  let totalOrder: HTMLParagraphElement = document.createElement("p");
  let totalOrderNumber: number = 0;

  if (amountList === null) {
    totalOrder.innerHTML =
      "Din beställning på 0 stycken posters är beställd och skickas snart från vårat lager!";
  } else {
    for (let i = 0; i < amountList.length; i++) {
      totalOrderNumber += amountList[i].amount;
    }

    totalOrder.innerHTML =
      "Din beställning på " +
      totalOrderNumber +
      " stycken posters är beställd och skickas snart från vårat lager!";
  }

  document.getElementById("order-details").appendChild(heading);
  document.getElementById("order-details").appendChild(totalOrder);
};
