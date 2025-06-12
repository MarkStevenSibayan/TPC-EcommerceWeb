// Product data
const products = [
  {
    id: 1,
    name: "AMD Ryzen 9 5900X",
    category: "cpu",
    price: 499.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=Ryzen+9+5900X",
    description:
      "12-core, 24-thread processor with a base clock of 3.7GHz and boost clock up to 4.8GHz. Perfect for gaming and content creation.",
    stock: 15,
    vendor: "AMD",
    specs: {
      cores: "12 cores / 24 threads",
      baseFrequency: "3.7 GHz",
      boostFrequency: "4.8 GHz",
      cache: "70MB",
      tdp: "105W",
    },
  },
  {
    id: 2,
    name: "Intel Core i9-12900K",
    category: "cpu",
    price: 589.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=i9-12900K",
    description:
      "16-core (8P+8E), 24-thread processor with a base clock of 3.2GHz and boost clock up to 5.2GHz. Intel's flagship gaming CPU.",
    stock: 8,
    vendor: "Intel",
    specs: {
      cores: "16 cores (8P+8E) / 24 threads",
      baseFrequency: "3.2 GHz",
      boostFrequency: "5.2 GHz",
      cache: "30MB",
      tdp: "125W",
    },
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 4080",
    category: "gpu",
    price: 1199.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=RTX+4080",
    description:
      "High-end graphics card with 16GB GDDR6X memory. Perfect for 4K gaming and content creation with ray tracing and DLSS support.",
    stock: 5,
    vendor: "NVIDIA",
    specs: {
      memory: "16GB GDDR6X",
      coreClock: "2205 MHz",
      memorySpeed: "22.4 Gbps",
      interface: "PCIe 4.0 x16",
      powerConnector: "16-pin",
    },
  },
  {
    id: 4,
    name: "AMD Radeon RX 7900 XTX",
    category: "gpu",
    price: 999.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=RX+7900+XTX",
    description:
      "High-performance graphics card with 24GB GDDR6 memory. Excellent for 4K gaming and professional workloads.",
    stock: 3,
    vendor: "AMD",
    specs: {
      memory: "24GB GDDR6",
      coreClock: "1855 MHz",
      memorySpeed: "20 Gbps",
      interface: "PCIe 4.0 x16",
      powerConnector: "2x 8-pin",
    },
  },
  {
    id: 5,
    name: "Corsair Vengeance RGB Pro 32GB",
    category: "ram",
    price: 129.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=Corsair+RAM",
    description: "32GB (2x16GB) DDR4-3600MHz CL18 memory kit with RGB lighting. Perfect for gaming and multitasking.",
    stock: 20,
    vendor: "Corsair",
    specs: {
      capacity: "32GB (2x16GB)",
      type: "DDR4",
      speed: "3600MHz",
      timing: "CL18",
      voltage: "1.35V",
    },
  },
  {
    id: 6,
    name: "G.Skill Trident Z5 RGB 32GB",
    category: "ram",
    price: 189.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=G.Skill+RAM",
    description:
      "32GB (2x16GB) DDR5-6000MHz CL36 memory kit with RGB lighting. High-performance memory for next-gen systems.",
    stock: 12,
    vendor: "G.Skill",
    specs: {
      capacity: "32GB (2x16GB)",
      type: "DDR5",
      speed: "6000MHz",
      timing: "CL36",
      voltage: "1.35V",
    },
  },
  {
    id: 7,
    name: "Samsung 980 Pro 2TB",
    category: "storage",
    price: 249.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=Samsung+SSD",
    description: "2TB PCIe 4.0 NVMe SSD with read speeds up to 7,000 MB/s. Perfect for gaming and content creation.",
    stock: 15,
    vendor: "Samsung",
    specs: {
      capacity: "2TB",
      interface: "PCIe 4.0 x4",
      readSpeed: "7,000 MB/s",
      writeSpeed: "5,100 MB/s",
      form: "M.2 2280",
    },
  },
  {
    id: 8,
    name: "WD Black SN850X 1TB",
    category: "storage",
    price: 159.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=WD+SSD",
    description:
      "1TB PCIe 4.0 NVMe SSD with read speeds up to 7,300 MB/s. Designed for gaming and high-performance computing.",
    stock: 18,
    vendor: "Western Digital",
    specs: {
      capacity: "1TB",
      interface: "PCIe 4.0 x4",
      readSpeed: "7,300 MB/s",
      writeSpeed: "6,300 MB/s",
      form: "M.2 2280",
    },
  },
  {
    id: 9,
    name: "ASUS ROG Strix Z690-E Gaming",
    category: "motherboard",
    price: 399.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=ASUS+Motherboard",
    description:
      "High-end ATX motherboard for Intel 12th Gen processors with PCIe 5.0, DDR5 support, and robust VRM for overclocking.",
    stock: 7,
    vendor: "ASUS",
    specs: {
      socket: "LGA 1700",
      chipset: "Intel Z690",
      memorySlots: "4x DDR5",
      pcie: "PCIe 5.0 x16",
      formFactor: "ATX",
    },
  },
  {
    id: 10,
    name: "MSI MPG X570S Carbon Max WiFi",
    category: "motherboard",
    price: 349.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=MSI+Motherboard",
    description: "Feature-rich ATX motherboard for AMD Ryzen processors with PCIe 4.0, WiFi 6E, and premium audio.",
    stock: 9,
    vendor: "MSI",
    specs: {
      socket: "AM4",
      chipset: "AMD X570",
      memorySlots: "4x DDR4",
      pcie: "PCIe 4.0 x16",
      formFactor: "ATX",
    },
  },
  {
    id: 11,
    name: "Corsair RM850x",
    category: "power-supply",
    price: 149.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=Corsair+PSU",
    description:
      "850W fully modular power supply with 80+ Gold certification. Features silent operation and high-quality Japanese capacitors.",
    stock: 14,
    vendor: "Corsair",
    specs: {
      wattage: "850W",
      efficiency: "80+ Gold",
      modular: "Fully Modular",
      fanSize: "135mm",
      warranty: "10 Years",
    },
  },
  {
    id: 12,
    name: "NZXT Kraken X73 RGB",
    category: "cooling",
    price: 199.99,
    image: "https://via.placeholder.com/300x300/1a1a1a/cccccc?text=NZXT+Cooler",
    description:
      "360mm AIO liquid CPU cooler with RGB lighting. Features a customizable infinity mirror pump cap and three 120mm fans.",
    stock: 6,
    vendor: "NZXT",
    specs: {
      radiatorSize: "360mm",
      fans: "3x 120mm Aer RGB",
      pumpSpeed: "800-2,800 RPM",
      noise: "21-36 dBA",
      compatibility: "Intel & AMD",
    },
  },
]

// Function to get all products
function getAllProducts() {
  return products
}

// Function to get product by ID
function getProductById(id) {
  return products.find((product) => product.id === Number.parseInt(id))
}

// Function to get products by category
function getProductsByCategory(category) {
  if (category === "all") {
    return products
  }
  return products.filter((product) => product.category === category)
}

// Function to get featured products (first 4 products)
function getFeaturedProducts() {
  return products.slice(0, 4)
}

// Function to get related products (same category, excluding the current product)
function getRelatedProducts(productId, limit = 4) {
  const currentProduct = getProductById(productId)
  if (!currentProduct) return []

  return products
    .filter((product) => product.category === currentProduct.category && product.id !== currentProduct.id)
    .slice(0, limit)
}

// Function to search products
function searchProducts(query) {
  query = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.vendor.toLowerCase().includes(query),
  )
}

// Function to sort products
function sortProducts(productList, sortBy) {
  const sortedProducts = [...productList]

  switch (sortBy) {
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price)
    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price)
    case "name":
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sortedProducts
  }
}
