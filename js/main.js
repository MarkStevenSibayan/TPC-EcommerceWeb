document.addEventListener("DOMContentLoaded", () => {
  // Initialize the cart count
  updateCartCount()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
      navMenu?.classList.remove("active")
    }
  })

  // Load featured products
  const featuredProductsContainer = document.getElementById("featured-products")
  if (featuredProductsContainer) {
    const featuredProducts = window.getFeaturedProducts() // Declare or import getFeaturedProducts
    displayProducts(featuredProducts, featuredProductsContainer)
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')
      if (emailInput.value) {
        showNotification("Thank you for subscribing to our newsletter!", "success")
        emailInput.value = ""
      }
    })
  }
})

// Function to display products in a container
function displayProducts(products, container) {
  container.innerHTML = ""

  if (products.length === 0) {
    container.innerHTML = `
      <div class="no-products" style="text-align: center; padding: 3rem; color: var(--text-secondary);">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <p>No products found</p>
      </div>
    `
    return
  }

  products.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-category">${formatCategory(product.category)}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-actions">
          <a href="product-detail.html?id=${product.id}" class="btn btn-sm">View Details</a>
          <button class="btn btn-sm btn-secondary add-to-cart" data-id="${product.id}">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `

    container.appendChild(productCard)
  })

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = container.querySelectorAll(".add-to-cart")
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const productId = this.getAttribute("data-id")
      const product = window.getProductById(productId) // Declare or import getProductById

      if (product && product.stock > 0) {
        addToCart(productId, 1)
        showNotification(`${product.name} added to cart!`, "success")

        // Add visual feedback
        this.innerHTML = '<i class="fas fa-check"></i> Added!'
        this.disabled = true
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart'
          this.disabled = false
        }, 2000)
      } else {
        showNotification("Product is out of stock!", "error")
      }
    })
  })
}

// Utility function to format category names
function formatCategory(category) {
  const categoryMap = {
    cpu: "Processors",
    gpu: "Graphics Cards",
    ram: "Memory",
    storage: "Storage",
    motherboard: "Motherboards",
    "power-supply": "Power Supplies",
    cooling: "Cooling",
    case: "Cases",
    peripherals: "Peripherals",
  }
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1)
}

// Cart functions
function getCart() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
}

function addToCart(productId, quantity = 1) {
  const cart = getCart()
  const existingItem = cart.find((item) => item.id === Number.parseInt(productId))

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    const product = window.getProductById(productId)
    if (product) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        category: product.category,
      })
    }
  }

  saveCart(cart)
}

function removeFromCart(productId) {
  const cart = getCart()
  const updatedCart = cart.filter((item) => item.id !== Number.parseInt(productId))
  saveCart(updatedCart)
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart()
  const item = cart.find((item) => item.id === Number.parseInt(productId))

  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      saveCart(cart)
    }
  }
}

function updateCartCount() {
  const cart = getCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElements = document.querySelectorAll(".cart-count")

  cartCountElements.forEach((element) => {
    element.textContent = totalItems
    element.style.display = totalItems > 0 ? "flex" : "none"
  })
}

function getCartTotal() {
  const cart = getCart()
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

function clearCart() {
  localStorage.removeItem("cart")
  updateCartCount()
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${getNotificationIcon(type)}"></i>
      <span>${message}</span>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `

  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem;
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    min-width: 300px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `

  const content = notification.querySelector(".notification-content")
  content.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-primary);
  `

  const icon = notification.querySelector("i")
  icon.style.color = type === "success" ? "var(--success)" : type === "error" ? "var(--error)" : "var(--primary)"

  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.style.cssText = `
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.25rem;
    margin-left: auto;
  `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove after 5 seconds
  const autoRemove = setTimeout(() => {
    removeNotification(notification)
  }, 5000)

  // Close button functionality
  closeBtn.addEventListener("click", () => {
    clearTimeout(autoRemove)
    removeNotification(notification)
  })
}

function getNotificationIcon(type) {
  const icons = {
    success: "check-circle",
    error: "exclamation-circle",
    warning: "exclamation-triangle",
    info: "info-circle",
  }
  return icons[type] || "info-circle"
}

function removeNotification(notification) {
  notification.style.transform = "translateX(100%)"
  setTimeout(() => {
    notification.remove()
  }, 300)
}

// Smooth scrolling for anchor links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const targetId = e.target.getAttribute("href").substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
})

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[loading='lazy']").forEach((img) => {
    imageObserver.observe(img)
  })
}
