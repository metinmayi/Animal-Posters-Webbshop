import { StorageProduct } from "./models/products";
window.onload = function () {
	let amountOfProducts = 0;
	const cartList: StorageProduct[] = JSON.parse(
		localStorage.getItem("cartList")
	);
	cartList.forEach((e) => {
		amountOfProducts += e.amount;
	});
	let heading: HTMLHeadingElement = document.createElement("h1");
	heading.innerHTML = "Tack för din beställning!";

	let totalOrder: HTMLParagraphElement = document.createElement("p");
	totalOrder.innerHTML = `Din beställning på ${amountOfProducts} stycken posters är beställd och skickas snart från vårat lager!`;

	document.getElementById("order-details").appendChild(heading);
	document.getElementById("order-details").appendChild(totalOrder);
};
