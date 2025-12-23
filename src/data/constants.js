import { 
  Settings, Cpu, Layers, Box, PenTool, 
  Scissors, Flame, Hammer, Zap, Factory, BadgeCheck 
} from 'lucide-react';

// --- NAVIGATION LINKS ---
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/products' },
  { name: 'Service', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

// --- APS-TECH DIVISIONS (GroupCompanies Data) ---
export const companies = [
  { 
    title: "APS-TECH Fabrication", 
    desc: "Full-scale metal fabrication and high-precision assembly services for industrial giants.", 
    icon: Factory,
    image: "APS-TECH Fabrication.jpg" 
  },
  { 
    title: "Robotics & Automation", 
    desc: "Smart industrial solutions and automated assembly line integration for modern factories.", 
    icon: Cpu,
    image: "Robotics & Automation.jpg"
  },
  { 
    title: "Medical Engineering", 
    desc: "Specialized manufacturing of LED X-Ray View Boxes and medical grade enclosures.", 
    icon: Zap,
    image: "Medical Engineering.jpg"
  },
  { 
    title: "Custom SPM Design", 
    desc: "Developing Special Purpose Machines tailored to specific customer design requirements.", 
    icon: Settings,
    image: "Custom SPM Design.jpg"
  },
  { 
    title: "Polymer Solutions", 
    desc: "High-quality Plastic Injection Molding for durable industrial components.", 
    icon: Layers,
    image: "Polymer Solutions.jpg"
  },
];

// --- SERVICES DATA (Services Section) ---
export const servicesData = [
  { 
    id: "01", slug: "cad-services", title: "CAD Services", 
    description: "Our innovative CAD team uses high-end 2D and 3D software to turn your ideas into reality. We integrate your design into our system from the ground up.", 
    icon: PenTool, color: "bg-[#0f1c15]", details: ["2D/3D Design", "Idea-to-Reality", "Resource Integration"],
    image: "CAD Services.jpg"
  },
  { 
    id: "02", slug: "sheet-metal", title: "Sheet-Metal", 
    description: "Precision laser cutting for Aluminium, MS, SS, and GI. We handle dazzlingly fast precision folding from 0.5mm to 16mm thickness.", 
    icon: Scissors, color: "bg-[#14261c]", details: ["0.5mm - 16mm Thickness", "4m Max Length", "High Accuracy Folding"],
    image: "Sheet-Metal.jpg"
  },
  { 
    id: "03", slug: "fabrication", title: "Fabrication", 
    description: "Fully equipped welding department with skilled welders. We accomplish MIG, TIG, and spot welding in MS, SS, and Aluminium.", 
    icon: Flame, color: "bg-[#0f1c15]", details: ["MIG / TIG / Spot Welding", "MS/SS/Aluminium", "In-house Polishing"],
    image: "Fabrication.jpg"
  },
  { 
    id: "04", slug: "machining-unit", title: "Machining Unit", 
    description: "Branded machine tools for Turning, Milling, and DRO. We also organize VMC, Grinding, and Rotary operations.", 
    icon: Settings, color: "bg-[#14261c]", details: ["Turning & Milling", "VMC Operations", "Precision Grinding"],
    image: "Machining Unit.jpg"
  },
  { 
    id: "05", slug: "ss-specialization", title: "SS Specialization", 
    description: "A team specialized for SS metal working with properly trained Argon welders for premium buffed finishes.", 
    icon: Hammer, color: "bg-[#0f1c15]", details: ["Argon Welding", "Assembly Benches", "Mirror Finishing"],
    image: "SS Specialization.jpg"
  },
  { 
    id: "06", slug: "assembly-finish", title: "Assembly & Finish", 
    description: "Skilled persons using pneumatic and electric tools for stress-free assembly and high-quality industrial powder coating.", 
    icon: Box, color: "bg-[#14261c]", details: ["9-Tank Pre-treatment", "Powder Coating", "Pneumatic Assembly"],
    image: "Assembly & Finish.jpg"
  }
];

// --- STATS DATA ---
export const stats = [
  { num: "250+", label: "Projects Completed" },
  { num: "50+", label: "Custom SPMs Built" },
  { num: "15+", label: "Industry Partners" },
];