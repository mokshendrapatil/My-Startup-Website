document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".products");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p><strong>${product.price}</strong></p>
    `;
    container.appendChild(card);
  });
});
