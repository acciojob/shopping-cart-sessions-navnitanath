// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage or initialize empty array
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = ${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>;
    productList.appendChild(li);
  });

  // Add event listeners for Add to Cart buttons
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.dataset.id);
      addToCart(productId);
    });
  });
}

function renderCart() {
  cartList.innerHTML = ""; // Clear previous cart list
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = ${item.name} - $${item.price};
    cartList.appendChild(li);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function clearCart() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Event listener for Clear Cart button
clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderProducts();
renderCart();