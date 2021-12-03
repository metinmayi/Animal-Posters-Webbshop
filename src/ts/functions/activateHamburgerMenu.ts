export function activateHamburgerMenu() {
  document.getElementById("hamburger-icon").addEventListener("click", () => {
    document.getElementById("hamburger").style.display = "block";
  });

  document.getElementById("close").addEventListener("click", () => {
    document.getElementById("hamburger").style.display = "none";
  });
}
