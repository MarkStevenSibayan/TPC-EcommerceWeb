document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart count
  updateCartCount()

  // Display cart items
  displayCartItems()

  // Display cart summary
  displayCartSummary()
})

function updateCartCount() {
  // Implementation for updating cart count
}

function getCart() {
  // Implementation for getting cart items
}

function formatCategory(category) {
  // Implementation for formatting category
}

function removeFromCart(productId) {
  // Implementation for removing item from cart
}

function showNotification(message, type) {
  // Implementation for showing notification
}

function updateCartQuantity(productId, quantity) {
  // Implementation for updating cart quantity
}

function getProductById(productId) {
  // Implementation for getting product by ID
}

function getCartTotal() {
  // Implementation for getting cart total
}

function displayCartItems() {
  const container = document.getElementById("cart-items")
  const cart = getCart()

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
        <a href="products.html" class="btn">Continue Shopping</a>
      </div>
    `

    // Hide checkout button
    const checkoutBtn = document.getElementById("checkout-btn")
    if (checkoutBtn) {
      checkoutBtn.style.display = "none"
    }

    return
  }

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>${formatCategory(item.category)}</p>
      </div>
      <div class="cart-item-quantity">
        <div class="quantity-controls">
          <button class="quantity-btn decrease-cart-qty" data-id="${item.id}">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
          <button class="quantity-btn increase-cart-qty" data-id="${item.id}">+</button>
        </div>
      </div>
      <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
      <div class="cart-item-remove" data-id="${item.id}">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  `,
    )
    .join("")

  // Add event listeners
  setupCartEventListeners()
}

function setupCartEventListeners() {
  // Remove item buttons
  document.querySelectorAll(".cart-item-remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.getAttribute("data-id")
      removeFromCart(productId)
      displayCartItems()
      displayCartSummary()
      showNotification("Item removed from cart", "info")
    })
  })

  // Quantity decrease buttons
  document.querySelectorAll(".decrease-cart-qty").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.getAttribute("data-id")
      const cart = getCart()
      const item = cart.find((item) => item.id === Number.parseInt(productId))
      if (item && item.quantity > 1) {
        updateCartQuantity(productId, item.quantity - 1)
        displayCartItems()
        displayCartSummary()
      }
    })
  })

  // Quantity increase buttons
  document.querySelectorAll(".increase-cart-qty").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.currentTarget.getAttribute("data-id")
      const cart = getCart()
      const item = cart.find((item) => item.id === Number.parseInt(productId))
      const product = getProductById(productId)
      if (item && product && item.quantity < product.stock) {
        updateCartQuantity(productId, item.quantity + 1)
        displayCartItems()
        displayCartSummary()
      } else if (item && item.quantity >= product.stock) {
        showNotification("Maximum stock reached", "warning")
      }
    })
  })

  // Quantity input changes
  document.querySelectorAll(".cart-item-quantity .quantity-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const productId = e.target.getAttribute("data-id")
      const newQuantity = Number.parseInt(e.target.value)
      const product = getProductById(productId)

      if (newQuantity <= 0) {
        removeFromCart(productId)
        displayCartItems()
        displayCartSummary()
      } else if (product && newQuantity <= product.stock) {
        updateCartQuantity(productId, newQuantity)
        displayCartItems()
        displayCartSummary()
      } else {
        e.target.value = product.stock
        updateCartQuantity(productId, product.stock)
        displayCartItems()
        displayCartSummary()
        showNotification("Quantity adjusted to available stock", "warning")
      }
    })
  })
}

function displayCartSummary() {
  const container = document.getElementById("cart-summary")
  const cart = getCart()

  if (cart.length === 0) {
    container.innerHTML = ""
    return
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  container.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row">
      <span>Subtotal:</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Shipping:</span>
      <span>${shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Tax:</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>Total:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
    ${subtotal < 100 ? `<p class="shipping-notice"><i class="fas fa-info-circle"></i> Add $${(100 - subtotal).toFixed(2)} more for free shipping!</p>` : ""}
  `
}
