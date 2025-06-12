document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products-container")
  const categoryFilter = document.getElementById("category-filter")
  const sortFilter = document.getElementById("sort-filter")

  // Declare functions before using them
  function getAllProducts() {
    // Implementation to get all products
  }

  function updateCartCount() {
    // Implementation to update cart count
  }

  function getProductsByCategory(category) {
    // Implementation to filter products by category
  }

  function displayProducts(products, container) {
    // Implementation to display products
  }

  function sortProducts(products, sortBy) {
    // Implementation to sort products
  }

  let currentProducts = getAllProducts()

  // Initialize cart count
  updateCartCount()

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search)
  const categoryParam = urlParams.get("category")

  // Set initial category filter if provided in URL
  if (categoryParam && categoryFilter) {
    categoryFilter.value = categoryParam
    currentProducts = getProductsByCategory(categoryParam)
  }

  // Display initial products
  displayProducts(currentProducts, productsContainer)

  // Category filter event listener
  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      const selectedCategory = e.target.value
      currentProducts = getProductsByCategory(selectedCategory)

      // Apply current sort
      if (sortFilter) {
        currentProducts = sortProducts(currentProducts, sortFilter.value)
      }

      displayProducts(currentProducts, productsContainer)
    })
  }

  // Sort filter event listener
  if (sortFilter) {
    sortFilter.addEventListener("change", (e) => {
      const sortBy = e.target.value
      currentProducts = sortProducts(currentProducts, sortBy)
      displayProducts(currentProducts, productsContainer)
    })
  }
})
