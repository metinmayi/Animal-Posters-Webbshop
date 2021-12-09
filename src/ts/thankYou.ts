window.onload = function () {
  let heading: HTMLHeadingElement = document.createElement("h1");
  heading.innerHTML = "Tack för din beställning!";

  let totalOrder: HTMLParagraphElement = document.createElement("p");
  totalOrder.innerHTML =
    "Din beställning på " +
    window.localStorage.length +
    " stycken posters är beställd och skickas snart från vårat lager!";

  document.getElementById("order-details").appendChild(heading);
  document.getElementById("order-details").appendChild(totalOrder);
};
