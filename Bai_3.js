let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
];

function render() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach((p, index) => {
    let li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `
                    <span>${p.name} - ${p.price.toLocaleString()} VND</span>
                    <button class="btn-delete" onclick="del(${index})">Xóa</button>
                `;
    list.appendChild(li);
  });
}

function del(index) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    products.splice(index, 1);
    render();
  }
}
render();
