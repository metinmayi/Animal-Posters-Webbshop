import { products, Iprice, Iproducts } from "../models/products";
import { displayProductModals } from "./productModalDisplay";

export function createProducts() {
	const mainProducts: HTMLDivElement = document.getElementById(
		"mainProducts"
	) as HTMLDivElement;
	products.forEach((e, index) => {
		//Creates all of the products by iterating the array of products.
		let productsDiv: HTMLDivElement = document.createElement("div");
		let imgWrapperDiv: HTMLDivElement = document.createElement("div");
		let heartDiv: HTMLDivElement = document.createElement("div");
		let newImg: HTMLImageElement = document.createElement("img");
		let p1: HTMLHeadingElement = document.createElement("p");
		let p2: HTMLHeadingElement = document.createElement("p");

		if (!localStorage.getItem("wishList"))
			heartDiv.className = "heartContainer emptyHeart";
		else {
			let wishList: string = localStorage.getItem("wishList");
			let wishListObj: Iproducts[] = JSON.parse(wishList);
			wishListObj.forEach((i) => {
				e.name == i.name
					? (heartDiv.className = "heartContainer filledHeart")
					: (heartDiv.className = "heartContainer emptyHeart");
			});
		}

		productsDiv.className = "product";
		imgWrapperDiv.className = "imgWrapper";
		newImg.src = e.url;
		newImg.id = `${index}`;
		p1.innerHTML = e.name;
		p1.id = "productTitle";
		p2.innerHTML = `Fr. ${e.price.s}kr`;

		mainProducts.appendChild(productsDiv);
		productsDiv.appendChild(imgWrapperDiv);
		imgWrapperDiv.appendChild(heartDiv);
		imgWrapperDiv.appendChild(newImg);
		productsDiv.appendChild(p1);
		productsDiv.appendChild(p2);

		//Takes the ID of the clicked product and calls a function that displays a modal with the product which index equals the retrieved ID.
		imgWrapperDiv.addEventListener("click", (e) => {
			let newE: HTMLElement = e.target as HTMLElement;
			let id: number = parseInt(newE.id);
			displayProductModals(id);
			console.log(id);
		});
	});
}
