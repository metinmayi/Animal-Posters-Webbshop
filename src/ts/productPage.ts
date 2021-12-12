import { activateHamburgerMenu } from "./functions/activateHamburgerMenu";
import { addToWishlist } from "./functions/addToWishlist";
import { createProductsCheckout } from "./functions/createProductsCheckout";
import { productModalAddToCart } from "./functions/productModalAddToCart";
import { createProducts } from "./functions/productsDisplay";
import { refreshWishList, wishList } from "./functions/wishListDisplays";
window.onload = () => {
	//Funktionen aktiverar och avaktiverar hamburgarmenyn med hjälp av "click"
	activateHamburgerMenu();

	//Visar alla prodoukter baserat på vår lista av produkter "products[]".
	createProducts();

	//Skapar en lista baserat på modalerna
	productModalAddToCart();

	//Aktiverar och skapar HTML i checkout-dropdownen
	// createProductsCheckout();

	//Skapar eventlisteners för att öppna/stänga wishlist
	wishList();
	//Uppdaterar wishlist innehållet
	refreshWishList();
};
