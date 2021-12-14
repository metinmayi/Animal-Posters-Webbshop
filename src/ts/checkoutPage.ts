import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { displayCheckout } from "./functions/dispayCheckout";
import { refreshWishList, wishList } from "./functions/wishListDisplays";
window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();
  // Funktionen visar vad du har lagt i varukorgen i checkout
  displayCheckout();
  //Shows wishList
  wishList();
  refreshWishList();
};
