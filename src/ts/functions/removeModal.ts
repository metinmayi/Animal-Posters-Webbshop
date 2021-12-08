export function removeModal() {
  //#region Declarations to "remove" modal
  let removeModalContainer: HTMLDivElement = document.getElementById(
    "container-modal"
  ) as HTMLDivElement;
  let removeModal: HTMLDivElement = document.getElementById(
    "remove-moadl"
  ) as HTMLDivElement;
  let removeModalHeading: HTMLHeadingElement = document.getElementById(
    "remove-heading"
  ) as HTMLHeadingElement;
  let modalImageContainer: HTMLDivElement = document.getElementById(
    "modal-img-container"
  ) as HTMLDivElement;
  let productImage: HTMLImageElement = document.createElement(
    "image"
  ) as HTMLImageElement;
  let productTitle: HTMLParagraphElement = document.getElementById(
    "product-title"
  ) as HTMLParagraphElement;
  let modalButtonContainer: HTMLDivElement = document.getElementById(
    "modal-button-container"
  ) as HTMLDivElement;
  let cancelButton: HTMLButtonElement = document.getElementById(
    "cancel"
  ) as HTMLButtonElement;
  let confirmButton: HTMLButtonElement = document.getElementById(
    "confirm"
  ) as HTMLButtonElement;
  //#endregion

  //Opens Modal
  removeModalContainer.className = "show-container-modal";

  //Close the Modal
  cancelButton.addEventListener("click", () => {
    removeModalContainer.className = "";
  });
}
