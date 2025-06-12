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

  // Load featured products
  const featuredProductsContainer = document.getElementById("featured-products")
  if (featuredProductsContainer) {
    const featuredProducts = getFeaturedProducts()
    displayProducts(featuredProducts, featuredProductsContainer)
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')
      if (emailInput.value) {
        alert("Thank you for subscribing to our newsletter!")
        emailInput.value = ""
      }
    })
  }
})

// Function to display products in a container
function displayProducts(products, container) {
  container.innerHTML = ""

  products.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <a href="product-detail.html?id=${product.id}" class="btn btn-sm">View Details</a>
                    <button class="btn btn-sm btn-secondary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `

    container.appendChild(productCard)
  })

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = container.querySelectorAll(".add-to-cart")
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id")
      addToCart(productId, 1)
      alert("Product added to cart!")
    })
  })
}

// Cart functions
function getCart() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.\
