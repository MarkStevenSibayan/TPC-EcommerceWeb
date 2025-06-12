document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart count
  updateCartCount()

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!firstName || !lastName || !email || !subject || !message) {
        showNotification("Please fill in all required fields", "error")
        return
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        // Reset form
        contactForm.reset()

        // Show success message
        showNotification("Your message has been sent successfully! We'll get back to you soon.", "success")

        // Reset button
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }

  // FAQ toggle functionality
  const faqItems = document.querySelectorAll(".faq-item")
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Close other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      })
    })
  }

  // Smooth scroll for method links
  const methodLinks = document.querySelectorAll(".method-link")
  methodLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault()
        // Add custom functionality here if needed
      }
    })
  })
})

// Placeholder functions that would be defined in main.js
function updateCartCount() {
  // Implementation would be in main.js
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElements = document.querySelectorAll(".cart-count")

  cartCountElements.forEach((element) => {
    element.textContent = totalItems
    element.style.display = totalItems > 0 ? "flex" : "none"
  })
}

function showNotification(message, type) {
  // Implementation would be in main.js
  // For now, just use alert for testing
  if (typeof window.showNotification === "function") {
    window.showNotification(message, type)
  } else {
    alert(message)
  }
}
