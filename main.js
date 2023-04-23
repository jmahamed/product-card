const bagImage = document.getElementById("bag-image");
const colorSelectors = document.querySelectorAll(".color-selector");
const productCard = document.querySelector(".bg");
const addToCartButton = document.getElementById("add-to-cart-button");

colorSelectors.forEach(selector => {
  selector.addEventListener("click", () => {
    const color = selector.id;
    const newImageSrc = `./images/${color}-bag.png`;
    bagImage.src = newImageSrc;
    bagImage.alt = `${color} bag`;
    productCard.setAttribute("id", color);
    colorSelectors.forEach(s => s.classList.remove("active"));
    selector.classList.add("active");
  });
});


addToCartButton.addEventListener("click", () => { // add this block
    const selectedColor = document.querySelector(".color-selector.active").id;
    alert(`${selectedColor} bag added to cart!`);
  });