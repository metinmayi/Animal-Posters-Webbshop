import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { displayCheckout } from "./functions/dispayCheckout";
window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();
  // Funktionen visar vad du har lagt i varukorgen i checkout
  displayCheckout();
};
