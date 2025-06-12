document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")

  // Initialize cart count
  updateCartCount()

  if (!productId) {
    window.location.href = "products.html"
    return
  }

  const product = getProductById(productId)

  if (!product) {
    window.location.href = "products.html"
    return
  }

  // Update breadcrumb
  const breadcrumb = document.getElementById("product-breadcrumb")
  if (breadcrumb) {
    breadcrumb.textContent = product.name
  }

  // Display product details
  displayProductDetail(product)

  // Load related products
  const relatedProductsContainer = document.getElementById("related-products")
  if (relatedProductsContainer) {
    const relatedProducts = getRelatedProducts(product.id)
    displayProducts(relatedProducts, relatedProductsContainer)
  }
})

function displayProductDetail(product) {
  const container = document.getElementById("product-detail")

  container.innerHTML = `
    <div class="product-gallery">
      <div class="product-main-image">
        <img src="${product.image}" alt="${product.name}" id="main-image">
      </div>
    </div>
    <div class="product-details">
      <div class="product-category-detail">${formatCategory(product.category)}</div>
      <h1>${product.name}</h1>
      <div class="product-price-detail">$${product.price.toFixed(2)}</div>
      <p class="product-description">${product.description}</p>
      
      <div class="product-meta">
        ${Object.entries(product.specs)
          .map(
            ([key, value]) => `
          <div class="product-meta-item">
            <span class="meta-label">${formatSpecLabel(key)}:</span>
            <span class="meta-value">${value}</span>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <div class="quantity-selector">
        <label>Quantity:</label>
        <div class="quantity-controls">
          <button class="quantity-btn" id="decrease-qty">-</button>
          <input type="number" class="quantity-input" id="quantity" value="1" min="1" max="${product.stock}">
          <button class="quantity-btn" id="increase-qty">+</button>
        </div>
      </div>
      
      <div class="product-actions-detail">
        <button class="btn" id="add-to-cart-detail" data-id="${product.id}">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn btn-secondary" id="buy-now" data-id="${product.id}">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>
      
      <div class="product-info-extra">
        <p><i class="fas fa-truck"></i> Free shipping on orders over $100</p>
        <p><i class="fas fa-shield-alt"></i> 2-year warranty included</p>
        <p><i class="fas fa-undo"></i> 30-day return policy</p>
        ${
          product.stock > 0
            ? `<p class="stock-status in-stock"><i class="fas fa-check-circle"></i> In Stock (${product.stock} available)</p>`
            : `<p class="stock-status out-of-stock"><i class="fas fa-times-circle"></i> Out of Stock</p>`
        }
      </div>
    </div>
  `

  // Add event listeners
  setupProductDetailEvents(product)
}

function setupProductDetailEvents(product) {
  const quantityInput = document.getElementById("quantity")
  const decreaseBtn = document.getElementById("decrease-qty")
  const increaseBtn = document.getElementById("increase-qty")
  const addToCartBtn = document.getElementById("add-to-cart-detail")
  const buyNowBtn = document.getElementById("buy-now")

  // Quantity controls
  decreaseBtn.addEventListener("click", () => {
    const currentValue = Number.parseInt(quantityInput.value)
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1
    }
  })

  increaseBtn.addEventListener("click", () => {
    const currentValue = Number.parseInt(quantityInput.value)
    if (currentValue < product.stock) {
      quantityInput.value = currentValue + 1
    }
  })

  quantityInput.addEventListener("change", () => {
    const value = Number.parseInt(quantityInput.value)
    if (value < 1) quantityInput.value = 1
    if (value > product.stock) quantityInput.value = product.stock
  })

  // Add to cart
  addToCartBtn.addEventListener("click", () => {
    const quantity = Number.parseInt(quantityInput.value)
    if (product.stock > 0) {
      addToCart(product.id, quantity)
      showNotification(`${quantity} x ${product.name} added to cart!`, "success")

      // Visual feedback
      addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart!'
      addToCartBtn.disabled = true
      setTimeout(() => {
        addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart'
        addToCartBtn.disabled = false
      }, 2000)
    } else {
      showNotification("Product is out of stock!", "error")
    }
  })

  // Buy now
  buyNowBtn.addEventListener("click", () => {
    const quantity = Number.parseInt(quantityInput.value)
    if (product.stock > 0) {
      // Clear cart and add this product
      clearCart()
      addToCart(product.id, quantity)
      window.location.href = "checkout.html"
    } else {
      showNotification("Product is out of stock!", "error")
    }
  })
}

function formatSpecLabel(key) {
  const labelMap = {
    cores: "Cores",
    baseFrequency: "Base Frequency",
    boostFrequency: "Boost Frequency",
    cache: "Cache",
    tdp: "TDP",
    memory: "Memory",
    coreClock: "Core Clock",
    memorySpeed: "Memory Speed",
    interface: "Interface",
    powerConnector: "Power Connector",
    capacity: "Capacity",
    type: "Type",
    speed: "Speed",
    timing: "Timing",
    voltage: "Voltage",
    readSpeed: "Read Speed",
    writeSpeed: "Write Speed",
    form: "Form Factor",
    socket: "Socket",
    chipset: "Chipset",
    memorySlots: "Memory Slots",
    pcie: "PCIe",
    formFactor: "Form Factor",
    wattage: "Wattage",
    efficiency: "Efficiency",
    modular: "Modular",
    fanSize: "Fan Size",
    warranty: "Warranty",
    radiatorSize: "Radiator Size",
    fans: "Fans",
    pumpSpeed: "Pump Speed",
    noise: "Noise Level",
    compatibility: "Compatibility",
  }
  return labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1)
}

// Declare functions that were previously undeclared
function updateCartCount() {
  // Implementation for updateCartCount
}

function getProductById(id) {
  // Implementation for getProductById
}

function getRelatedProducts(id) {
  // Implementation for getRelatedProducts
}

function displayProducts(products, container) {
  // Implementation for displayProducts
}

function formatCategory(category) {
  // Implementation for formatCategory
}

function addToCart(id, quantity) {
  // Implementation for addToCart
}

function showNotification(message, type) {
  // Implementation for showNotification
}

function clearCart() {
  // Implementation for clearCart
}
