import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { randomQuotes } from "./functions/randomQuotes";
import { createProductsCheckout } from "./functions/createProductsCheckout";

window.onload = function () {
	//Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
	activateHamburgerMenu();

	//Slumpar fram citat om våra produkter, som står på index-sidan, byts vid refresh
	randomQuotes();

	//Aktiverar och skapar HTML i checkout-dropdownen
	createProductsCheckout();
};
