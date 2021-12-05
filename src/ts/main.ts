import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { createProducts } from "./functions/createProducts";
import { randomQuotes } from "./functions/randomQuotes";

window.onload = function () {
  activateHamburgerMenu();
  randomQuotes();
};
