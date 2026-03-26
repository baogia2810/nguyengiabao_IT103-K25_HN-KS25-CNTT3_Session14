let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
];

function render() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((p) => {
    let li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `<span>${p.name}</span> <span class="price">${p.price.toLocaleString()} VND</span>`;
    list.appendChild(li);
  });
}

document.getElementById("product-form").onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("product-name");
  const price = document.getElementById("product-price");
  if (name.value && price.value) {
    products.push({
      id: Date.now(),
      name: name.value,
      price: Number(price.value),
    });
    name.value = "";
    price.value = "";
    render();
  }
};
render();
