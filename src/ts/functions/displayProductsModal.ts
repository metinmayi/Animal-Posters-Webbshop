import { products } from "../models/products";

export function displayProductModals(Id: number) {
	console.log("Modal was clicked!");
	//Opens the Modal
	let modalContainer: HTMLDivElement = document.getElementById(
		"modalContainer"
	) as HTMLDivElement;
	modalContainer.className = "showProductModal";

	let modalBody: HTMLDivElement = document.getElementById(
		"modalBody"
	) as HTMLDivElement;
	// let modalWrapper: HTMLDivElement = document.getElementById(
	// 	"modalWrapper"
	// ) as HTMLDivElement;
	// let label: HTMLLabelElement = document.getElementById(
	// 	"sizeLabel"
	// ) as HTMLLabelElement;
	// let newImg: HTMLImageElement = document.createElement("img");
	// let newP: HTMLParagraphElement = document.createElement("p");

	// newImg.src = products[Id].url;
	// newP.innerText = products[Id].name;
	// newP.id = "modalTitle";

	// modalWrapper.appendChild(newImg);
	// modalBody.insertBefore(newP, label);

	let closeProductsModal: HTMLButtonElement = document.getElementById(
		"closeProductsModal"
	) as HTMLButtonElement;
	closeProductsModal.addEventListener("click", (e) => {
		modalContainer.className = "";
		console.log("Button was clicked!");
	});
}
