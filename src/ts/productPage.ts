import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { productModalAddToCart } from "./functions/productModalAddToCart";
import { createProducts } from "./functions/productsDisplay";
window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();
  //Visar alla prodoukter baserat på vår lista av produkter "products[]".
  createProducts();
  productModalAddToCart();
};
