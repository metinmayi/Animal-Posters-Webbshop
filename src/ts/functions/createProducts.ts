import { products } from "../models/products";
export function createProducts() {
	products.forEach((e) => {
		let newDiv: HTMLDivElement = document.createElement("div");
		let newImg: HTMLImageElement = document.createElement("img");
		let newH4: HTMLHeadingElement = document.createElement("h4");
		let newH6: HTMLHeadingElement = document.createElement("h6");

		newImg.src = e.url;
		console.log(e.url);
		newH4.innerHTML = e.name;
		newH6.innerHTML = `Fr ${e.price.s}kr`;

		document.body.appendChild(newDiv);
		newDiv.appendChild(newImg);
		newDiv.appendChild(newH4);
		newDiv.appendChild(newH6);
	});
}
