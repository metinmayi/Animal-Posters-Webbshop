import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { createProductsCheckout } from "./functions/createProductsCheckout";
import { displayCart } from "./functions/displayCart";
import { wishList, refreshWishList } from "./functions/wishListDisplays";
window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();
  // Funktionen visar vad du har lagt i varukorgen
  displayCart();

  //Skapar eventlisteners för att öppna/stänga wishlist
  wishList();
  //Uppdaterar wishlist innehållet
  refreshWishList();
  //Aktiverar och skapar HTML i checkout-dropdownen
  createProductsCheckout();
};
