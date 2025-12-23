import { PenTool, Scissors, Flame, Settings, Hammer, Box } from 'lucide-react';

export const servicesData = [
  {
    id: "01",
    slug: "cad-engineering",
    title: "CAD Engineering",
    description: "Our innovative CAD wing bridges the gap between conceptual sketches and mechanical reality. Using industry-leading 2D and 3D computational software, we map every micron of your design before a single cut is made.",
    icon: PenTool,
    specs: ["Computational 3D Modeling", "BOM Integration", "Prototyping Simulations"]
  },
  {
    id: "02",
    slug: "laser-sheet-metal",
    title: "Laser & Sheet Metal",
    description: "Precision laser geometry for complex profiles in Aluminium, MS, SS, and GI. We achieve dazzlingly fast precision folding ranging from 0.5mm to 16mm thickness with fraction-of-degree accuracy over 4-meter lengths.",
    icon: Scissors,
    specs: ["0.5mm - 16mm Caliber", "4m Max Seamless Folding", "Ultra-High Tolerance Laser"]
  },
  {
    id: "03",
    slug: "heavy-fabrication",
    title: "Heavy Fabrication",
    description: "A fully synchronized welding ecosystem. We specialize in high-strength MIG, TIG, and spot-welded assemblies across MS, SS, and Aluminium—processing everything from thin sheets to heavy industrial plates.",
    icon: Flame,
    specs: ["MIG / TIG / Robotic Welding", "Alloy Specific Buffing", "Structural Load Testing"]
  },
  {
    id: "04",
    slug: "advanced-machining",
    title: "Advanced Machining",
    description: "High-torque machining toolsets for Turning, Milling, and DRO operations. Our manufacturing ecosystem integrates VMC and Rotary operations to deliver a 'one-roof' solution for complex mechanical components.",
    icon: Settings,
    specs: ["High-Precision VMC", "Multi-Axis Milling", "DRO Turning Ecosystem"]
  },
  {
    id: "05",
    slug: "ss-specialization",
    title: "SS Specialization",
    description: "Master-level stainless steel craftmanship. Our dedicated Argon welders provide premium surgical-grade finishes, from minor precision sheetmetal components to massive industrial assembly benches.",
    icon: Hammer,
    specs: ["Argon Inert Gas Welding", "Surgical Mirror Finishing", "Clean-room Compliant Units"]
  },
  {
    id: "06",
    slug: "assembly-metrology",
    title: "Assembly & Metrology",
    description: "The final touch of perfection. We utilize pneumatic and electric precision tools for stress-free assembly. Our surface finish suite includes sand blasting, high-caliber powder coating, and a 9-tank pre-treatment cycle.",
    icon: Box,
    specs: ["9-Tank Nano-Pretreatment", "Industrial Powder Coating", "Metrology Grade Inspection"]
  }
];