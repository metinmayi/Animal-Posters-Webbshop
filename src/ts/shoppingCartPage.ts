import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { displayCart } from "./functions/displayCart";
import { createProductsCheckout } from "./functions/createProductsCheckout";

window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();
  // Funktionen visar vad du har lagt i varukorgen
  displayCart();

  //Aktiverar och skapar HTML i checkout-dropdownen
  // createProductsCheckout();
};
