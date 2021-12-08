export function activateCheckout() {
  document.getElementById("shopping-cart").addEventListener("click", () => {
    document.getElementById("checkout-dropdown").style.display = "block";
  });
  document
    .getElementById("shopping-cart-phone")
    .addEventListener("click", () => {
      document.getElementById("checkout-dropdown").style.display = "block";
    });

  document.getElementById("close-checkout").addEventListener("click", () => {
    document.getElementById("checkout-dropdown").style.display = "none";
  });
}
