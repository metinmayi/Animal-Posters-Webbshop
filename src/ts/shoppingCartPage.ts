import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { createProductsCheckout } from "./functions/createProductsCheckout";
import { displayCart } from "./functions/displayCart";
window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();
  // Funktionen visar vad du har lagt i varukorgen
  displayCart();
};
