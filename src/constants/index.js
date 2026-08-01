import profileImg from "/shifa_profile.png";
import emeraldNecklace from "/royal_emerald_necklace.png";
import sapphireRing from "/sapphire_diamond_ring.png";
import peacockEarrings from "/peacock_earrings.png";

export const PERSONAL_INFO = {
  name: "FATHIMA SHIFA A P",
  title: "3D Jewelry CAD Designer & Creative Specialist",
  tagline: "Bridging artistic hand sketching with high-precision Rhino 8 3D CAD modeling for commercial & luxury fine jewelry.",
  phone: "9846823509",
  phoneFormatted: "+91 9846823509",
  email: "Shifafathima1928@gmail.com",
  location: "Kerala, India",
  profileImage: profileImg,
};

export const HERO_DATA = {
  // Cloudinary video URL with quality optimization flags
  videoUrl: "https://res.cloudinary.com/r8wxo05i/video/upload/q_auto:best,f_auto/v1785597320/Cinematic_macro_pan_across_a_s_1_dxpyrx.mp4",
  headline: "PRECISION IN 3D CAD JEWELRY DESIGN",
  subtitle: "Transforming complex concepts into production-ready luxury 3D models with Rhino 8 precision.",
  ctaText: "Explore Projects",
  ctaResume: "Digital CV"
};

export const ABOUT_DATA = {
  heading: "About Fathima Shifa",
  subtitle: "Specialist 3D Jewelry CAD Designer",
  body: "Specialist 3D Jewelry CAD Designer with expertise in complex parametric surface modeling, gem setting allocations, and high-precision casting-ready geometry. Turning high-fashion luxury concepts into executable digital blueprints for leading commercial and haute joaillerie brands.",
  extendedBio: "Over 2 years of professional industry practice at Sulu (authorized vendor for Titan), transitioning from intensive 3-month On-the-Job Training (OJT) through a 1-year probationary period to full-time CAD Designer. Proficient in operating Rhino 8 to construct complex 3D jewelry models, optimizing stone setting clearances (prong, bezel, pave, channel), and ensuring 100% CAM/3D printing and investment casting success.",
  subDetails: [
    { label: "Industry Role", value: "CAD Specialist | Sulu (Vendor for Titan)" },
    { label: "Design Education", value: "Diploma in Gems & Jewellery Design (IGJ)" },
    { label: "Academic Degree", value: "Pondicherry University (Distance BBA)" },
    { label: "Primary Software", value: "Rhino 8, MatrixGold, Keyshot, AutoCAD" }
  ],
  stats: [
    { number: "2+", label: "Years Experience" },
    { number: "100+", label: "3D CAD Models" },
    { number: "99.8%", label: "Casting Yield" },
    { number: "Rhino 8", label: "CAD Engine" }
  ]
};

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Haute Diamond & Emerald Neckwear",
    category: "High Jewelry",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw34fea93c/images/hi-res/50D6SMFAFAA26_1.jpg?sw=640&sh=640",
    metal: "18K Yellow Gold & Platinum",
    weight: "48.5 grams",
    gemstones: "Pear Cut Emeralds & Micro-Pave Diamonds",
    specs: "Rhino 8 | 0.25mm Casting Shrinkage Allowance",
    description: "Intricate statement neckpiece engineered with articulated links for ergonomic neck curvature and back-gallery weight optimization."
  },
  {
    id: 2,
    title: "Precision Solitaire Engagement Ring",
    category: "Engagement Rings",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/50D5D2DAQADA02_1.jpg?sw=480&sh=480",
    metal: "Platinum 950",
    weight: "6.8 grams",
    gemstones: "3.2ct Solitaire Diamond",
    specs: "4-Prong Setting | Comfort Fit Band",
    description: "High-precision engagement ring CAD model with tapered prongs and under-bezel gallery scrollwork detailing."
  },
  {
    id: 3,
    title: "Solitaire Band Side Profile CAD",
    category: "Engagement Rings",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/50D5D2DAQADA02_2.jpg?sw=480&sh=480",
    metal: "Platinum 950",
    weight: "6.8 grams",
    gemstones: "Brilliant Cut Diamond",
    specs: "Parametric Surface CAD | 0.20mm Seat Depth",
    description: "Detailed side elevation showing claw angle tapering and exact finger size 14 tolerance."
  },
  {
    id: 4,
    title: "Royal Emerald & Diamond Drop Choker",
    category: "High Jewelry",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/50D5H3HSRAAA26_1.jpg?sw=640&sh=640",
    metal: "22K Gold & Platinum",
    weight: "52.0 grams",
    gemstones: "Zambian Emeralds & Round Diamonds",
    specs: "22K Gold | Articulated Hinges | CAM Ready",
    description: "Luxurious choker constructed with flexible gold segments for flawless drape and high-end elegance."
  },
  {
    id: 5,
    title: "Contemporary Geometric Diamond Ring",
    category: "Commercial Line",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9315c5f0/images/hi-res/3024YAQ.jpg?sw=640&sh=640",
    metal: "18K Yellow Gold",
    weight: "8.2 grams",
    gemstones: "Baguette & Round Diamonds",
    specs: "Channel & Pave Setting | Weight Optimized",
    description: "Modern architectural geometry engineered for Titan daily wear commercial collection."
  },
  {
    id: 6,
    title: "Modern Architectural Band",
    category: "Commercial Line",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa6cf5b2a/images/hi-res/3024YAR.jpg?sw=480&sh=480",
    metal: "18K Rose Gold",
    weight: "5.5 grams",
    gemstones: "Micro-Pave Halo Diamonds",
    specs: "MatrixGold Surface Fillets | CAM Printing",
    description: "Ergonomic unisex band with chamfered edges and tight-tolerance diamond channel seats."
  },
  {
    id: 7,
    title: "Heritage Ruby & Gold Bangle",
    category: "Heritage & Bangles",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/50O5M21JKABA09_1.jpg?sw=480&sh=480",
    metal: "22K Yellow Gold",
    weight: "34.0 grams",
    gemstones: "Oval Rubies & Seed Pearls",
    specs: "Bezel Setting | Precision Hinge Lock",
    description: "Traditional Indian heritage bangle featuring intricate filigree wirework translated into 3D CAD."
  },
  {
    id: 8,
    title: "Delicate Diamond Pendant & Chain",
    category: "Pendants & Chains",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3c/images/Mia/hi-res/3025NLL_1.jpg?sw=480&sh=480",
    metal: "18K Rose Gold",
    weight: "3.8 grams",
    gemstones: "Solitaire Halo Diamond",
    specs: "Micro-Pave Halo | Light Weight CAD",
    description: "Sleek everyday pendant crafted with minimal gold weight for Mia by Tanishq commercial style."
  },
  {
    id: 9,
    title: "Royal Emerald Haute Choker (Keyshot Render)",
    category: "High Jewelry",
    image: emeraldNecklace,
    metal: "18K Gold & Platinum",
    weight: "48.5 grams",
    gemstones: "Oval Emeralds & Round Diamonds",
    specs: "Keyshot Photorealistic 3D CAD Render",
    description: "Full Keyshot 3D CAD visualization showing polished metal reflectivity and gemstone refractions."
  },
  {
    id: 10,
    title: "Oval Sapphire & Pave Halo Ring",
    category: "Engagement Rings",
    image: sapphireRing,
    metal: "Platinum 950",
    weight: "6.8 grams",
    gemstones: "Royal Blue Sapphire & Micro-Pave Halo",
    specs: "Rhino 8 | 4-Prong Center | Micro-Pave",
    description: "Macro render of platinum ring showing 0.15mm diamond spacing in double halo arrangement."
  },
  {
    id: 11,
    title: "Peacock Motif Heritage Earrings (CAD Draft)",
    category: "Heritage & Bangles",
    image: peacockEarrings,
    metal: "22K Yellow Gold",
    weight: "18.2 grams / pair",
    gemstones: "Rubies, Emeralds & Seed Pearls",
    specs: "Hand Sketch to Rhino 8 CAD Conversion",
    description: "Custom peacock motif earrings rendered with hollow-back weight optimization and secure posts."
  }
];

export const STONE_SETTINGS = [
  {
    name: "Prong Setting",
    cadTolerance: "0.20mm - 0.35mm seat depth",
    description: "Classic claw hold engineered to maximize gemstone brilliance while guaranteeing zero gem movement.",
    bestFor: "Solitaires & Oval Cut Gemstones"
  },
  {
    name: "Micro-Pave Setting",
    cadTolerance: "0.15mm stone spacing",
    description: "Densely arranged gemstones held by micro-beads for maximum light reflection and seamless halo surfaces.",
    bestFor: "Halos & Diamond Accent Bands"
  },
  {
    name: "Bezel Setting",
    cadTolerance: "0.25mm rim overlap",
    description: "A continuous protective metal collar wrapped around the gem perimeter for smooth modern finishes.",
    bestFor: "Geometric Pendants & Daily Rings"
  },
  {
    name: "Channel Setting",
    cadTolerance: "0.10mm groove clearance",
    description: "Gemstones set in a smooth continuous metal channel without individual prongs.",
    bestFor: "Eternity Bands & Sleek Bracelets"
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Senior 3D CAD Jewelry Designer",
    company: "Sulu (Authorized Vendor for Titan)",
    period: "2024 - Present (2 Years Total)",
    highlights: [
      "Designed production-ready 3D CAD models for Titan commercial and haute joaillerie lines using Rhino 8.",
      "Successfully completed 3-month intensive On-the-Job Training (OJT) starting in August and 1-year probation.",
      "Engineered stone setting seats (Prong, Bezel, Micro-Pave, Channel) and calculated gold/platinum shrinkage for investment casting.",
      "Optimized metal wall thickness and hollow-back galleries for gold weight reduction and ergonomic comfort."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Diploma in Gems and Jewellery Design (1 Year)",
    institution: "Institute of Gems and Jewellery (IGJ)",
    details: "Specialized post Plus Two diploma focusing on 3D CAD modeling, professional hand sketching, gemology, and production planning."
  },
  {
    degree: "Bachelor's Degree (Distance BBA)",
    institution: "Pondicherry University",
    details: "Currently in 1st Year (Ongoing academic development)."
  }
];

export const TECHNICAL_SKILLS = [
  { name: "Rhino 8 (Advanced 3D CAD)", level: 96 },
  { name: "MatrixGold / Gemvision Matrix", level: 90 },
  { name: "Keyshot Photorealistic 3D Rendering", level: 88 },
  { name: "Professional Hand Sketching", level: 94 },
  { name: "Stone Setting Mechanics (Prong, Pave)", level: 95 },
  { name: "CAM / 3D Printing Tolerances & Casting", level: 93 },
  { name: "Gold & Platinum Weight Optimization", level: 92 }
];

export const CV_SUMMARY = {
  name: "FATHIMA SHIFA A P",
  title: "3D JEWELRY CAD DESIGNER",
  phone: "+91 9846823509",
  email: "Shifafathima1928@gmail.com",
  location: "Kerala, India",
  summary: "Specialist 3D Jewelry CAD Designer with 2 years of professional experience modeling for Titan through vendor Sulu. Expert in Rhino 8, gemstone setting calculations, metal weight optimization, and casting-ready 3D geometry."
};
