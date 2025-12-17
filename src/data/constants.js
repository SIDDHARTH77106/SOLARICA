import { Sun, Battery, Zap, PenTool, Truck } from 'lucide-react';

// 💥 UPDATED NAVLINKS 💥
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/#products" }, 
  { name: "Finance", path: "/#scheme" }, 
  { name: "Projects", path: "/#projects" }, 
  { name: "About Us", path: "/about" }, // <-- YAHAN CHANGE KIYA HAI (Naya Route)
  { name: "Contact", path: "/contact" } 
];

export const companies = [
  { title: "Solarica Energy India", desc: "Leading renewable energy revolution. Large-scale solar installations.", icon: Sun },
  { title: "Solarica Systems", desc: "Advanced solar systems integration and smart technology.", icon: Zap },
  { title: "Solarica Industries", desc: "Industrial-scale solar manufacturing. High-quality panels.", icon: Battery },
  { title: "Solarica Fabtech", desc: "Strategic investments in renewable energy innovation.", icon: PenTool },
  { title: "Solarica Greenwheels", desc: "Future mobility and green transportation solutions.", icon: Truck },
];

export const productDetails = [
  // Image 1: Solar Street Lights
  { name: "Solar Street Lights", path: "/solar-street-1.avif", desc: "High-efficiency street lighting." },
  
  // Image 2: Solar Water Pumps
  { name: "Solar Water Pumps", path: "/solar-water-1.png", desc: "Reliable irrigation solutions." },
  
  // Image 3: Solar Panels
  { name: "Solar Panels", path: "/solar-panel-1.jpg", desc: "Monocrystalline PV modules." },
  
  // Image 4: Solar Inverter (Original file path theek tha)
  { name: "Solar Inverter", path: "/solar-street-2.jpg", desc: "Smart grid tie and off-grid inverters." },
  
  // Image 5: Solar Garden Lights
  { name: "Solar Garden Lights", path: "/solar-street-3.jpg", desc: "Aesthetic and durable garden lighting." },
  
  // Image 6: Solar Flood Lights (Original file path theek tha)
  { name: "Solar Flood Lights", path: "/solar-panel-2.jpg", desc: "Powerful outdoor flood lighting." },
];

export const products = productDetails.map(p => p.name); 

export const testimonials = [
  { name: "Rohan Mehta", role: "Operations Head", text: "Solarica provided end‑to‑end solutions. Smooth execution." },
  { name: "Priya Sharma", role: "Plant Manager", text: "Professionalism and proactive project management. Impressive." },
  { name: "Anil Verma", role: "Project Engineer", text: "Their passion for environmental stewardship helped us achieve compliance." },
];

export const stats = [
  { num: "500+", label: "kW Power Projects" },
  { num: "100+", label: "Solar Water Pumps" },
  { num: "5+", label: "Years Experience" },
];