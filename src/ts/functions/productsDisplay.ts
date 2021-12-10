import { Iproducts, products } from "../models/products";
import { addToWishlist } from "./addToWishlist";
import { displayProductModals } from "./productModalDisplay";

export function createProducts() {
  const mainProducts: HTMLDivElement = document.getElementById(
    "mainProducts"
  ) as HTMLDivElement;
  mainProducts.innerHTML = "";
  products.forEach((e, index) => {
    let productsDiv: HTMLDivElement = document.createElement("div");
    let imgWrapperDiv: HTMLDivElement = document.createElement("div");
    let heartDiv: HTMLDivElement = document.createElement("div");
    let newImg: HTMLImageElement = document.createElement("img");
    let p1: HTMLHeadingElement = document.createElement("p");
    let p2: HTMLHeadingElement = document.createElement("p");
    //Determines if the product is in the wishList or not.
    if (!localStorage.getItem("wishList")) {
      localStorage.setItem("wishList", JSON.stringify(products));
    } else {
      let wishList: string = localStorage.getItem("wishList");
      let wishListObj: Iproducts[] = JSON.parse(wishList);
      if (wishListObj[index].wishList == true)
        heartDiv.className = "heartContainer filledHeart";
      if (wishListObj[index].wishList == false) {
        heartDiv.className = "heartContainer emptyHeart";
      }
    }

    //Creates all of the products by iterating the array of products.
    productsDiv.className = "product";
    imgWrapperDiv.className = "imgWrapper";
    newImg.src = e.url;
    newImg.id = `${index}`;
    heartDiv.id = `${index}`;
    p1.innerHTML = e.name;
    p1.id = "productTitle";
    p2.innerHTML = `Fr. ${e.price.s}kr`;

    mainProducts.appendChild(productsDiv);
    productsDiv.appendChild(imgWrapperDiv);
    productsDiv.appendChild(heartDiv);
    imgWrapperDiv.appendChild(newImg);
    productsDiv.appendChild(p1);
    productsDiv.appendChild(p2);

    //Takes the ID of the clicked product and calls a function that displays a modal with the product which index equals the retrieved ID.
    imgWrapperDiv.addEventListener("click", (e) => {
      let newE: HTMLElement = e.target as HTMLElement;
      let id: number = parseInt(newE.id);
      displayProductModals(id);
    });

    heartDiv.addEventListener("click", () => {
      addToWishlist(e, index);
    });
  });
}
