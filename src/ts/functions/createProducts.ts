import { products } from "../models/products";

export function createProducts() {
	const mainProducts: HTMLDivElement = document.getElementById(
		"mainProducts"
	) as HTMLDivElement;
	products.forEach((e) => {
		let productsDiv: HTMLDivElement = document.createElement("div");
		let imgWrapperDiv: HTMLDivElement = document.createElement("div");
		let emptyHeartDiv: HTMLDivElement = document.createElement("div");
		let newImg: HTMLImageElement = document.createElement("img");
		let p1: HTMLHeadingElement = document.createElement("p");
		let p2: HTMLHeadingElement = document.createElement("p");

		productsDiv.className = "product";
		imgWrapperDiv.className = "imgWrapper";
		newImg.src = e.url;
		p1.innerHTML = e.name;
		p1.id = "productTitle";
		p2.innerHTML = `Fr. ${e.price.s}kr`;

		mainProducts.appendChild(productsDiv);
		productsDiv.appendChild(imgWrapperDiv);
		imgWrapperDiv.appendChild(emptyHeartDiv);
		imgWrapperDiv.appendChild(newImg);
		productsDiv.appendChild(p1);
		productsDiv.appendChild(p2);
	});
}
