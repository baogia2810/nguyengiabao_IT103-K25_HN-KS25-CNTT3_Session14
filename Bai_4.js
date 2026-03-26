let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
];

function render() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((p, index) => {
    let li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `
                    <span>${p.name} - ${p.price.toLocaleString()} VND</span>
                    <button class="btn-edit" onclick="edit(${index})">Sửa giá</button>
                `;
    list.appendChild(li);
  });
}

function edit(index) {
  let p = prompt("Nhập giá mới:", products[index].price);
  if (p !== null && p.trim() !== "") {
    products[index].price = Number(p);
    render();
  }
}
render();
