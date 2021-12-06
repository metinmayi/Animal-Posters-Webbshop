export function activateCheckout() {
  document.getElementById("shopping-cart").addEventListener("click", () => {
    document.getElementById("checkout-dropdown").style.display = "block";
    document.getElementById("mainProducts").style.opacity = "20%";
    document.getElementById("header-wrapper").style.opacity = "20%";
    document.getElementById("footer-container").style.opacity = "20%";
  });

  document.getElementById("close-checkout").addEventListener("click", () => {
    document.getElementById("checkout-dropdown").style.display = "none";
    document.getElementById("mainProducts").style.opacity = "100%";
    document.getElementById("header-wrapper").style.opacity = "100%";
    document.getElementById("footer-container").style.opacity = "100%";
  });
}
