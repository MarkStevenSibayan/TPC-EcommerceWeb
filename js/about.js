document.addEventListener("DOMContentLoaded", () => {
  // Initialize cart count
  updateCartCount()

  // Testimonial slider functionality
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentTestimonial = 0

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach((card) => card.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    // Show current testimonial
    if (testimonialCards[index]) {
      testimonialCards[index].classList.add("active")
    }
    if (dots[index]) {
      dots[index].classList.add("active")
    }
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
    showTestimonial(currentTestimonial)
  }

  function prevTestimonial() {
    currentTestimonial = currentTestimonial === 0 ? testimonialCards.length - 1 : currentTestimonial - 1
    showTestimonial(currentTestimonial)
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", nextTestimonial)
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevTestimonial)
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonial = index
      showTestimonial(currentTestimonial)
    })
  })

  // Auto-play testimonials
  setInterval(nextTestimonial, 5000)

  // Animate stats on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number")
        statNumbers.forEach((stat) => {
          const finalValue = stat.textContent
          const numericValue = Number.parseInt(finalValue.replace(/\D/g, ""))
          animateNumber(stat, 0, numericValue, finalValue)
        })
        statsObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const heroStats = document.querySelector(".hero-stats")
  if (heroStats) {
    statsObserver.observe(heroStats)
  }

  function animateNumber(element, start, end, suffix) {
    const duration = 2000
    const startTime = performance.now()

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * progress)

      if (suffix.includes("K")) {
        element.textContent = current + "K+"
      } else if (suffix.includes("%")) {
        element.textContent = current + "%"
      } else {
        element.textContent = current + "+"
      }

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }
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
