import { products } from "../models/products";

export function displayProductModals(Id: number) {
	console.log("Modal was clicked!");
	//Opens the Modal
	let modalContainer: HTMLDivElement = document.getElementById(
		"modalContainer"
	) as HTMLDivElement;
	modalContainer.className = "showProductModal";

	//Produces the modal product based on which product was clicked on the website.
	let modalBody: HTMLDivElement = document.getElementById(
		"modalBody"
	) as HTMLDivElement;
	let modalImgWrapper: HTMLDivElement = document.getElementById(
		"modalImgWrapper"
	) as HTMLDivElement;
	let modalImg: HTMLImageElement = document.getElementById(
		"modalImg"
	) as HTMLImageElement;
	let modalTitle: HTMLParagraphElement = document.getElementById(
		"modalTitle"
	) as HTMLParagraphElement;
	let modalTotalPrice: HTMLParagraphElement = document.getElementById(
		"modalTotal"
	) as HTMLParagraphElement;

	// let newImg: HTMLImageElement = document.createElement("img");

	modalImg.src = products[Id].url;
	modalTitle.innerText = products[Id].name;
	modalTotalPrice.innerText = `Totalbelopp: ${products[Id].price.s}kr`;

	// modalImgWrapper.appendChild(newImg);

	//Closes the Modal
	let closeProductsModal: HTMLButtonElement = document.getElementById(
		"closeProductsModal"
	) as HTMLButtonElement;
	closeProductsModal.addEventListener("click", (e) => {
		modalContainer.className = "";
		console.log("Button was clicked!");
	});
}
