document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart count
  updateCartCount()

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
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
      const answer = item.querySelector(".faq-answer")

      // Initially hide answers
      answer.style.display = "none"

      question.addEventListener("click", () => {
        // Toggle active class
        item.classList.toggle("active")

        // Toggle answer visibility
        if (answer.style.display === "none") {
          answer.style.display = "block"
        } else {
          answer.style.display = "none"
        }
      })
    })
  }
})

// Placeholder functions that would be defined in main.js
function updateCartCount() {
  // Implementation would be in main.js
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
