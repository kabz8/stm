export type Category = 'solar-panels' | 'batteries' | 'inverters' | 'combos' | 'accessories' | 'lighting';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  image?: string;
  features?: string[];
}

export const WHATSAPP_NUMBER = "254729471565";

export const products: Product[] = [
  // SOLAR PANELS
  {
    id: "sp-550",
    name: "550W Monocrystalline All-Weather Solar Panel",
    price: 18500,
    category: "solar-panels",
    description: "High-efficiency monocrystalline solar panel designed for all weather conditions in Kenya.",
    image: "/src/assets/images/solar-array.png"
  },
  {
    id: "sp-400",
    name: "400W Monocrystalline Solar Panel",
    price: 12000,
    category: "solar-panels",
    description: "Reliable power output for residential and small business applications.",
    image: "/src/assets/images/solar-array.png"
  },
  {
    id: "sp-250",
    name: "250W Polycrystalline Solar Panel",
    price: 7500,
    category: "solar-panels",
    description: "Cost-effective solar panel for basic home lighting and TV systems.",
    image: "/src/assets/images/solar-array.png"
  },
  {
    id: "sp-200",
    name: "200W Flexible Solar Panel",
    price: 9800,
    category: "solar-panels",
    description: "Lightweight and flexible, perfect for curved roofs, RVs, and temporary setups.",
    image: "/src/assets/images/solar-array.png"
  },

  // BATTERIES
  {
    id: "bat-250-gel",
    name: "250Ah Solar Gel Battery",
    price: 22000,
    category: "batteries",
    description: "Deep cycle maintenance-free gel battery for long-lasting solar storage.",
    image: "/src/assets/images/battery-system.png"
  },
  {
    id: "bat-200-agm",
    name: "200Ah Deep Cycle AGM Battery",
    price: 18500,
    category: "batteries",
    description: "Reliable AGM technology for daily cyclic applications.",
    image: "/src/assets/images/battery-system.png"
  },
  {
    id: "bat-100-lithium",
    name: "100Ah Lithium LiFePO4 Battery",
    price: 35000,
    category: "batteries",
    description: "Premium lithium iron phosphate battery with 10+ years lifespan and deep discharge capability.",
    image: "/src/assets/images/battery-system.png"
  },
  {
    id: "hithium-dock",
    name: "Hithium Home Power Dock",
    price: 185000,
    category: "batteries",
    description: "Premium modular home energy storage system with smart monitoring.",
    image: "/src/assets/images/battery-system.png"
  },

  // INVERTERS
  {
    id: "inv-600-1200",
    name: "600-1200W DC-AC Power Inverter",
    price: 8500,
    category: "inverters",
    description: "Basic modified sine wave inverter for lighting and small electronics."
  },
  {
    id: "inv-2000",
    name: "2000W Pure Sine Wave Inverter",
    price: 14000,
    category: "inverters",
    description: "Clean power output suitable for sensitive electronics like TVs and computers."
  },
  {
    id: "inv-5000-hybrid",
    name: "5000W Hybrid Inverter",
    price: 45000,
    category: "inverters",
    description: "Advanced hybrid inverter combining solar charge controller and AC inverter in one unit."
  },

  // COMBOS
  {
    id: "combo-550",
    name: "550W Solar System Combo",
    price: 68000,
    category: "combos",
    description: "Complete home system including panel, battery, inverter, and accessories.",
    features: [
      "550W Monocrystalline Panel",
      "250Ah Gel Battery",
      "600-1200W Inverter",
      "30A Charge Controller",
      "20M 4.0mm PV Cable",
      "6pcs 5W DC Bulbs",
      "FREE 50W Solar Floodlight"
    ]
  },
  {
    id: "combo-200",
    name: "200W Budget Solar Kit",
    price: 32000,
    category: "combos",
    description: "Affordable starter kit for basic home power needs.",
    features: [
      "200W Panel",
      "100Ah Battery",
      "600W Inverter",
      "20A Controller"
    ]
  },
  {
    id: "combo-1000",
    name: "1000W Business Power System",
    price: 125000,
    category: "combos",
    description: "Robust system for small businesses or demanding households.",
    features: [
      "2x 550W Panels",
      "200Ah Lithium Battery",
      "2000W Inverter",
      "40A Controller"
    ]
  },

  // ACCESSORIES
  {
    id: "acc-30a",
    name: "30A Solar Charge Controller",
    price: 2500,
    category: "accessories",
    description: "PWM charge controller to protect your batteries."
  },
  {
    id: "acc-20a-mppt",
    name: "20A MPPT Charge Controller",
    price: 4200,
    category: "accessories",
    description: "High-efficiency MPPT tracking for maximum solar yield."
  },
  {
    id: "acc-cable",
    name: "20M 4.0mm Auto PV Solar Cable",
    price: 1800,
    category: "accessories",
    description: "UV-resistant specialized solar cable."
  },
  {
    id: "acc-mc4",
    name: "MC4 Connector Kit",
    price: 450,
    category: "accessories",
    description: "Waterproof connectors for solar panel wiring."
  },

  // LIGHTING
  {
    id: "light-bulbs",
    name: "6pcs 5W DC Bulbs Set",
    price: 1200,
    category: "lighting",
    description: "Energy-efficient 12V DC LED bulbs for direct solar connection."
  },
  {
    id: "light-flood",
    name: "50W Solar Floodlight",
    price: 3500,
    category: "lighting",
    description: "Self-contained solar security light with remote control."
  }
];

export function getProductsByCategory(category: Category | 'all'): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getProductWhatsAppLink(productName: string): string {
  const text = `Hello! I'm interested in ${productName}. Please send me more details and pricing.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getGeneralWhatsAppLink(): string {
  const text = `Hello! I'd like to get a solar quote for my home/business.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function formatKES(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0
  }).format(amount);
}
