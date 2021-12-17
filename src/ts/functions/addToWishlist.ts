import { createProducts } from "../functions/productsDisplay";
import { products, Iproducts } from "../models/products";
import { refreshWishList, wishList } from "./wishListDisplays";

export function addToWishlist(e, index) {
	let wishListFromStorage: string = localStorage.getItem("wishList");
	let wishListAsObject: Iproducts[] = JSON.parse(wishListFromStorage);
	let collectionOfHeartDivs: HTMLCollection = document.getElementsByClassName(
		"heartContainer"
	) as HTMLCollection;
	let arrayOfHeartDivs = Array.from(collectionOfHeartDivs);

	wishListAsObject.forEach((wishListItem) => {
		if (wishListItem.name == e.name) {
			wishListItem.wishList = !wishListItem.wishList;
		}
	});

	let toStorage: string = JSON.stringify(wishListAsObject);
	localStorage.setItem("wishList", toStorage);
	createProducts();
	refreshWishList();
}
