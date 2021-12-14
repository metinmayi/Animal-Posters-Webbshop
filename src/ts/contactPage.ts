import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import {
  wishList,
  removeFromWishlist,
  refreshWishList,
} from "./functions/wishListDisplays";
import { createProductsCheckout } from "./functions/createProductsCheckout";

window.onload = function () {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();

  //Skapar eventlisteners för att öppna/stänga wishlist
  wishList();

  //Uppdaterar wishlist innehållet
  refreshWishList();

  //Aktiverar och skapar HTML i checkout-dropdownen
  createProductsCheckout();
};
