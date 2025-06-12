document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart count
  updateCartCount()

  const cart = getCart()

  // Redirect if cart is empty
  if (cart.length === 0) {
    window.location.href = "cart.html"
    return
  }

  // Display checkout items
  displayCheckoutItems(cart)

  // Display checkout summary
  displayCheckoutSummary(cart)

  // Setup form validation
  setupCheckoutForm()
})

function updateCartCount() {
  // Placeholder for updateCartCount function
  console.log("Cart count updated")
}

function getCart() {
  // Placeholder for getCart function
  return [
    { name: "Item 1", image: "image1.jpg", price: 10, quantity: 2 },
    { name: "Item 2", image: "image2.jpg", price: 20, quantity: 1 },
  ]
}

function getCartTotal(cart) {
  // Placeholder for getCartTotal function
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

function displayCheckoutItems(cart) {
  const container = document.getElementById("checkout-items")

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="checkout-item">
      <div class="checkout-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="checkout-item-details">
        <h4>${item.name}</h4>
        <p>Qty: ${item.quantity}</p>
      </div>
      <div class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  `,
    )
    .join("")
}

function displayCheckoutSummary(cart) {
  const container = document.getElementById("checkout-summary")

  const subtotal = getCartTotal(cart)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  container.innerHTML = `
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
  `
}

function setupCheckoutForm() {
  const form = document.getElementById("checkout-form")

  // Format card number input
  const cardNumberInput = document.getElementById("card-number")
  cardNumberInput.addEventListener("input", (e) => {
    const value = e.target.value.replace(/\s/g, "").replace(/[^0-9]/gi, "")
    const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value
    e.target.value = formattedValue
  })

  // Format expiry date input
  const expiryInput = document.getElementById("expiry")
  expiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4)
    }
    e.target.value = value
  })

  // CVV input validation
  const cvvInput = document.getElementById("cvv")
  cvvInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").substring(0, 4)
  })

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateCheckoutForm()) {
      processOrder()
    }
  })
}

function validateCheckoutForm() {
  const requiredFields = [
    "fullname",
    "email",
    "phone",
    "address",
    "city",
    "state",
    "zip",
    "country",
    "card-name",
    "card-number",
    "expiry",
    "cvv",
  ]

  let isValid = true

  requiredFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId)
    if (!field.value.trim()) {
      field.style.borderColor = "var(--error)"
      isValid = false
    } else {
      field.style.borderColor = "var(--border)"
    }
  })

  // Validate email
  const email = document.getElementById("email")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "var(--error)"
    isValid = false
  }

  // Validate card number (basic check)
  const cardNumber = document.getElementById("card-number")
  if (cardNumber.value.replace(/\s/g, "").length < 13) {
    cardNumber.style.borderColor = "var(--error)"
    isValid = false
  }

  // Validate expiry date
  const expiry = document.getElementById("expiry")
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
  if (!expiryRegex.test(expiry.value)) {
    expiry.style.borderColor = "var(--error)"
    isValid = false
  }

  // Validate CVV
  const cvv = document.getElementById("cvv")
  if (cvv.value.length < 3) {
    cvv.style.borderColor = "var(--error)"
    isValid = false
  }

  if (!isValid) {
    showNotification("Please fill in all required fields correctly", "error")
  }

  return isValid
}

function showNotification(message, type) {
  // Placeholder for showNotification function
  alert(message)
}

function processOrder() {
  // Show loading state
  const submitBtn = document.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...'
  submitBtn.disabled = true

  // Simulate order processing
  setTimeout(() => {
    // Clear cart
    clearCart()

    // Show success message
    showNotification("Order placed successfully!", "success")

    // Redirect to success page or show success modal
    setTimeout(() => {
      alert("Thank you for your order! You will receive a confirmation email shortly.")
      window.location.href = "index.html"
    }, 2000)
  }, 3000)
}

function clearCart() {
  // Placeholder for clearCart function
  console.log("Cart cleared")
}
