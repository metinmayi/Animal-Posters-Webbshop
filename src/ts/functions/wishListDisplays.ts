import { StorageProduct, Iproducts } from "../models/products";
import { createProducts } from "./productsDisplay";
export function wishList() {
  //Toggles the window and changes the icon. One mobile and one desktop
  //#region Declarations
  const wishListSwitch: HTMLDivElement = document.querySelector(
    ".wishlist"
  ) as HTMLDivElement;
  const wishListDropDown: HTMLDivElement = document.querySelector(
    ".wishlistDropDown"
  ) as HTMLDivElement;
  const mobileDropdown: HTMLDivElement = document.querySelector(
    ".wishlistDropDownMobile"
  ) as HTMLDivElement;
  const toggleIcon: HTMLDivElement = document.getElementById(
    "toggleWishlist"
  ) as HTMLDivElement;
  const mobileSwitch: HTMLDivElement = document.getElementById(
    "mobileToggleWishlist"
  ) as HTMLDivElement;
  let emptyHeart: boolean = true;
  //#endregion
  wishListSwitch.addEventListener("click", (e) => {
    wishListDropDown.classList.toggle("showDropDown");
    if (emptyHeart === true) {
      toggleIcon.className = "fas fa-heart";
      emptyHeart = false;
    } else {
      toggleIcon.className = "far fa-heart";
      emptyHeart = true;
    }
  });
  mobileSwitch.addEventListener("click", (e) => {
    mobileDropdown.classList.toggle("showDropDown");
    if (emptyHeart === true) {
      mobileSwitch.className = "fas fa-heart";
      emptyHeart = false;
    } else {
      mobileSwitch.className = "far fa-heart";
      emptyHeart = true;
    }
  });
}

export function refreshWishList() {
  //Displays all products from the LocalStorage that have .wishlist set to true
  //#region Declarations
  const desktopBody: HTMLCollection = document.getElementsByClassName(
    "wishlistBody"
  ) as HTMLCollection;
  const localStorageWishlist: Iproducts[] = JSON.parse(
    localStorage.getItem("wishList")
  );
  const h3 = document.createElement("h3");
  const h3x2 = document.createElement("h3");
  //#endregion
  desktopBody[0].innerHTML = "";
  desktopBody[1].innerHTML = "";

  h3.innerHTML = "Wishlist";
  h3x2.innerHTML = "Wishlist";
  desktopBody[0].appendChild(h3);
  desktopBody[1].appendChild(h3x2);
  let trueCount = 0;
  localStorageWishlist.forEach((item, index) => {
    if (item.wishList === true) {
      trueCount++;
      const image = document.createElement("div");
      const heartContainer = document.createElement("div");
      const heart = document.createElement("i");

      image.className = "wishlistImageContainer";
      image.style.backgroundImage = `url(${item.url})`;
      heartContainer.className = "wishlistHeartContainer";
      heart.className = "fas fa-heart fa-2x";

      desktopBody[0].appendChild(image);
      image.appendChild(heartContainer);
      heartContainer.appendChild(heart);

      image.addEventListener("click", (e) => {
        removeFromWishlist(desktopBody, index);
      });
    }
  });
  localStorageWishlist.forEach((item, index) => {
    if (item.wishList === true) {
      const image = document.createElement("div");
      const heartContainer = document.createElement("div");
      const heart = document.createElement("i");

      image.className = "wishlistImageContainer";
      image.style.backgroundImage = `url(${item.url})`;
      heartContainer.className = "wishlistHeartContainer";
      heart.className = "fas fa-heart fa-2x";

      desktopBody[1].appendChild(image);
      image.appendChild(heartContainer);
      heartContainer.appendChild(heart);
      image.addEventListener("click", (e) => {
        removeFromWishlist(desktopBody, index);
      });
    }
  });
  if (trueCount == 0) {
    const h5 = document.createElement("h5");
    h5.id = "h5";
    h5.innerHTML = "Du har tyvärr inga produkter i din önskelista!";
    desktopBody[0].appendChild(h5);
    const h5x2 = document.createElement("h5");
    h5x2.id = "h5x2";
    h5x2.innerHTML = "Du har tyvärr inga produkter i din önskelista!";
    desktopBody[1].appendChild(h5x2);
  }
  trueCount = 0;
}

export function removeFromWishlist(desktopBody, index: number) {
  desktopBody[0].innerHTML = "";
  desktopBody[1].innerHTML = "";
  let localStorageArray: Iproducts[] = JSON.parse(
    localStorage.getItem("wishList")
  );
  localStorageArray[index].wishList = false;
  localStorage.setItem("wishList", JSON.stringify(localStorageArray));
  refreshWishList();
  createProducts();
}
