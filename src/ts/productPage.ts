import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { createProducts } from "./functions/createProducts";
window.onload = () => {
	//Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
	activateHamburgerMenu();
	//Visar alla prodoukter baserat på vår lista av produkter "products[]".
	createProducts();
};
