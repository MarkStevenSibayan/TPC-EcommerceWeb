// Product data with updated image paths and expanded to 20+ products
const products = [
  {
    id: 1,
    name: "AMD Ryzen 9 5900X",
    category: "cpu",
    price: 499.99,
    image: "/images/ryzen-9-5900x.png",
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
    image: "/images/intel-i9-12900k.png",
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
    image: "/images/rtx-4080.png",
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
    image: "/images/rx-7900-xtx.png",
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
    image: "/images/corsair-ram.png",
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
    image: "/images/gskill-ram.png",
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
    image: "/images/samsung-ssd.png",
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
    image: "/images/wd-ssd.png",
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
    image: "/images/asus-motherboard.png",
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
    image: "/images/msi-motherboard.png",
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
    image: "/images/corsair-psu.png",
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
    image: "/images/nzxt-cooler.png",
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
  {
    id: 13,
    name: "AMD Ryzen 7 5800X3D",
    category: "cpu",
    price: 449.99,
    image: "/images/ryzen-9-5900x.png",
    description:
      "8-core, 16-thread processor with 3D V-Cache technology. Base clock of 3.4GHz and boost clock up to 4.5GHz. Gaming powerhouse.",
    stock: 10,
    vendor: "AMD",
    specs: {
      cores: "8 cores / 16 threads",
      baseFrequency: "3.4 GHz",
      boostFrequency: "4.5 GHz",
      cache: "96MB",
      tdp: "105W",
    },
  },
  {
    id: 14,
    name: "Intel Core i5-13600K",
    category: "cpu",
    price: 329.99,
    image: "/images/intel-i9-12900k.png",
    description:
      "14-core (6P+8E), 20-thread processor with a base clock of 3.5GHz and boost clock up to 5.1GHz. Excellent mid-range gaming CPU.",
    stock: 15,
    vendor: "Intel",
    specs: {
      cores: "14 cores (6P+8E) / 20 threads",
      baseFrequency: "3.5 GHz",
      boostFrequency: "5.1 GHz",
      cache: "24MB",
      tdp: "125W",
    },
  },
  {
    id: 15,
    name: "NVIDIA GeForce RTX 4070 Ti",
    category: "gpu",
    price: 799.99,
    image: "/images/rtx-4080.png",
    description:
      "High-performance graphics card with 12GB GDDR6X memory. Great for 1440p and 4K gaming with ray tracing and DLSS 3.0.",
    stock: 8,
    vendor: "NVIDIA",
    specs: {
      memory: "12GB GDDR6X",
      coreClock: "2310 MHz",
      memorySpeed: "21 Gbps",
      interface: "PCIe 4.0 x16",
      powerConnector: "16-pin",
    },
  },
  {
    id: 16,
    name: "AMD Radeon RX 6800 XT",
    category: "gpu",
    price: 649.99,
    image: "/images/rx-7900-xtx.png",
    description:
      "High-performance graphics card with 16GB GDDR6 memory. Excellent for 1440p and 4K gaming with ray tracing support.",
    stock: 6,
    vendor: "AMD",
    specs: {
      memory: "16GB GDDR6",
      coreClock: "2015 MHz",
      memorySpeed: "16 Gbps",
      interface: "PCIe 4.0 x16",
      powerConnector: "2x 8-pin",
    },
  },
  {
    id: 17,
    name: "Kingston Fury Beast 64GB",
    category: "ram",
    price: 249.99,
    image: "/images/corsair-ram.png",
    description:
      "64GB (2x32GB) DDR4-3200MHz CL16 memory kit. High-capacity memory for workstations and content creation.",
    stock: 7,
    vendor: "Kingston",
    specs: {
      capacity: "64GB (2x32GB)",
      type: "DDR4",
      speed: "3200MHz",
      timing: "CL16",
      voltage: "1.35V",
    },
  },
  {
    id: 18,
    name: "Crucial P5 Plus 2TB",
    category: "storage",
    price: 219.99,
    image: "/images/samsung-ssd.png",
    description:
      "2TB PCIe 4.0 NVMe SSD with read speeds up to 6,600 MB/s. Reliable storage for gaming and productivity.",
    stock: 12,
    vendor: "Crucial",
    specs: {
      capacity: "2TB",
      interface: "PCIe 4.0 x4",
      readSpeed: "6,600 MB/s",
      writeSpeed: "5,000 MB/s",
      form: "M.2 2280",
    },
  },
  {
    id: 19,
    name: "Seagate Barracuda 8TB",
    category: "storage",
    price: 179.99,
    image: "/images/wd-ssd.png",
    description:
      "8TB 3.5-inch HDD with 7200 RPM and 256MB cache. High-capacity storage for archiving and media libraries.",
    stock: 20,
    vendor: "Seagate",
    specs: {
      capacity: "8TB",
      interface: "SATA 6Gb/s",
      rpm: "7200 RPM",
      cache: "256MB",
      form: "3.5-inch",
    },
  },
  {
    id: 20,
    name: "Gigabyte B650 AORUS Elite AX",
    category: "motherboard",
    price: 229.99,
    image: "/images/asus-motherboard.png",
    description:
      "Feature-rich ATX motherboard for AMD Ryzen 7000 processors with PCIe 5.0, DDR5 support, and WiFi 6E connectivity.",
    stock: 11,
    vendor: "Gigabyte",
    specs: {
      socket: "AM5",
      chipset: "AMD B650",
      memorySlots: "4x DDR5",
      pcie: "PCIe 5.0 x16",
      formFactor: "ATX",
    },
  },
  {
    id: 21,
    name: "EVGA SuperNOVA 1000 G6",
    category: "power-supply",
    price: 199.99,
    image: "/images/corsair-psu.png",
    description:
      "1000W fully modular power supply with 80+ Gold certification. High-capacity PSU for high-end gaming rigs and workstations.",
    stock: 9,
    vendor: "EVGA",
    specs: {
      wattage: "1000W",
      efficiency: "80+ Gold",
      modular: "Fully Modular",
      fanSize: "140mm",
      warranty: "10 Years",
    },
  },
  {
    id: 22,
    name: "Cooler Master Hyper 212 RGB",
    category: "cooling",
    price: 49.99,
    image: "/images/nzxt-cooler.png",
    description:
      "Air CPU cooler with RGB lighting and 120mm fan. Affordable cooling solution with excellent performance for mid-range CPUs.",
    stock: 25,
    vendor: "Cooler Master",
    specs: {
      type: "Air Cooler",
      fans: "1x 120mm RGB",
      heatpipes: "4 Direct Contact",
      noise: "8-27 dBA",
      compatibility: "Intel & AMD",
    },
  },
  {
    id: 23,
    name: "Lian Li O11 Dynamic EVO",
    category: "case",
    price: 169.99,
    image: "/images/nzxt-cooler.png",
    description:
      "Premium mid-tower case with tempered glass panels and excellent airflow. Supports E-ATX motherboards and multiple radiators.",
    stock: 8,
    vendor: "Lian Li",
    specs: {
      formFactor: "Mid Tower",
      motherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      expansion: "7 slots",
      fans: "Up to 10x 120mm",
      radiators: "360mm top, side, bottom",
    },
  },
  {
    id: 24,
    name: "Logitech G Pro X Superlight",
    category: "peripherals",
    price: 149.99,
    image: "/images/corsair-ram.png",
    description:
      "Ultra-lightweight wireless gaming mouse weighing less than 63g. HERO 25K sensor and up to 70 hours of battery life.",
    stock: 15,
    vendor: "Logitech",
    specs: {
      sensor: "HERO 25K",
      dpi: "100-25,600",
      weight: "63g",
      battery: "70 hours",
      connectivity: "LIGHTSPEED Wireless",
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
