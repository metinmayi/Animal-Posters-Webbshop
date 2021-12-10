import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { addToWishlist } from "./functions/addToWishlist";
import { createProductsCheckout } from "./functions/createProductsCheckout";
import { productModalAddToCart } from "./functions/productModalAddToCart";
import { createProducts } from "./functions/productsDisplay";
window.onload = () => {
  //Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
  activateHamburgerMenu();

  //Visar alla prodoukter baserat på vår lista av produkter "products[]".
  createProducts();

  //Skapar en lista baserat på modalerna
  productModalAddToCart();

  //Aktiverar och skapar HTML i checkout-dropdownen
  // createProductsCheckout();
};
