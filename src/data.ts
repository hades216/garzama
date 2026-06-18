import { ServiceItem, PortfolioProject, Testimonial } from './types';

export const LogoUrl = "https://lh3.googleusercontent.com/aida/AP1WRLsHJfshsXZAn88-QspDMHXnBl3434M35--0xwhgTuD2-Elb80xogSNOl7y2tHjHNV531It2K_xIZSBBZ5ZvdgZS4tSHeo4Sv5fHQ56cYelHIANKBDgFkqcGUy9xqiss55YtIk7GZ8PeXzlNypUndCY-M4Nj-_ZJgsLxe4Chl5QlYwEdnx4_eXAmmsLkBFQw7SayqXoqCubMO33NuLXnuxdIDkWV8g5Uh4M2qfZrJZKY2tnvue4q1n8vqy4";
export const HeroImageUrl = "/images/modern_roof_4k_1781720414684.jpg";

export const servicesData: ServiceItem[] = [
  {
    id: 'roofing',
    num: '01',
    title: 'Roofing Systems',
    description: "Precision installation of high-end shingles, slate, and metal roofing designed for Laredo's heavy heat and sudden convective storms.",
    fullDesc: "We provide complete roofing teardowns, custom engineered deck installations, leak prevention underlayments, and masterfully placed surface systems. Our specialized ventilation technologies reduce attic heat by up to thirty degrees, delivering dramatic cooling relief for South Texas properties.",
    iconName: 'Home',
    benefits: [
      "Heavy wind protection (certified up to 130mph)",
      "High UV reflectivity to lower summer cooling bills",
      "Leak-proof edge-metal and secure transition valley configurations"
    ],
    materials: ["Premium Architectural Shingles", "Heavy-gauge Standing Seam Metal", "Natural Spanish Slate", "Hand-laid Terracotta & Energy Tiles"],
    warranty: "Lifetime Craftsmanship Warranty + 50-Year Manufacturer Material System coverage"
  },
  {
    id: 'remodeling',
    num: '02',
    title: 'Home Remodeling',
    description: "Luxury kitchen, bathroom, master suite, and full-home renovations that redefine custom living with hand-tailored finishes.",
    fullDesc: "From custom oak cabinets to imported marble countertops, we redesign living spaces to enhance spatial geometry and custom beauty. Our master craftsmen handle lighting layouts, high-precision tiling, glass system installations, and architectural layout expansions.",
    iconName: 'Building',
    benefits: [
      "Professional custom layout rendering",
      "Fine cabinet building and finish carpentry",
      "Ultra-modern kitchen layout and custom dual spa configurations"
    ],
    materials: ["Imported Brazilian Quartzite", "Custom Solid Red Oak & Walnut", "Solid Brass Fixtures", "Waterproof Wet-room Membrane Systems"],
    warranty: "5-Year Structural Integrity and Complete Builder Finish Warranty"
  },
  {
    id: 'storm-damage',
    num: '03',
    title: 'Storm Damage',
    description: "Expert restoration, rapid response securing, and digital insurance claim assistance for direct hail and wind recovery.",
    fullDesc: "When heavy South Texas storms hit Laredo, sudden damage can threaten your home's integrity. We arrive with immediate waterproofing tarps, provide complimentary 4K drone surveys for evidence, and coordinate directly with your homeowner insurance adjuster.",
    iconName: 'CloudRain',
    benefits: [
      "Emergency 24/7 tarping and structure isolation",
      "Comprehensive digital claims auditing package",
      "Rapid post-assessment material delivery within 48 hours"
    ],
    materials: ["Asphalt Emergency Tarp Systems", "Slick Ice & Water Shield Barriers", "Premium Impact-Rated Shingles", "Heavier Trim Boards"],
    warranty: "Fully backed by our elite storm-defense material warranties"
  }
];

export const portfolioData: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'The Del Mar Modern Manor',
    category: 'Roofing',
    location: 'Del Mar Hills, Laredo TX',
    imageUrl: HeroImageUrl, // Use the user's gorgeous modern home image as a primary featured project!
    stats: {
      year: '2025',
      duration: '14 Days',
      scope: 'Standing Seam Metal Roof'
    },
    highlight: 'Seamless matte black premium metal panels coupled with heavy-heat ventilation shafts that elevate the property aesthetic blockwide.'
  },
  {
    id: 'p2',
    title: 'Alexander Estate Grand Kitchen',
    category: 'Remodeling',
    location: 'Alexander Area, Laredo TX',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    stats: {
      year: '2024',
      duration: '4 Weeks',
      scope: 'Gourmet Kitchen Remodeling'
    },
    highlight: 'Handcrafted custom cabinetry, integrated double-waterfall marble island, designer ambient copper lighting system, and built-in hidden pantry.'
  },
  {
    id: 'p3',
    title: 'San Isidro Storm Reconstruction',
    category: 'Storm Damage',
    location: 'San Isidro Parkway, Laredo TX',
    imageUrl: '/images/storm_roof_restoration_1781766963502.jpg',
    stats: {
      year: '2024',
      duration: '6 Days',
      scope: 'Hail Mitigation and Roof Upgrade'
    },
    highlight: 'Reconstruction of 4,200 sqft roof using Class-4 impact-resistant luxury architectural shingles with complete copper flashing replacements.'
  },
  {
    id: 'p4',
    title: 'The Plantation Spa Sanctuary',
    category: 'Remodeling',
    location: 'The Plantation, Laredo TX',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
    stats: {
      year: '2025',
      duration: '3 Weeks',
      scope: 'Luxury Bathroom Renovation'
    },
    highlight: 'Floor-to-ceiling heated porcelain tiles, custom floating double quartz vanity, a zero-threshold glass rainfall shower, and custom skylight panel.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    initials: 'RD',
    name: 'Roberto D.',
    location: 'Del Mar Resident',
    rating: 5,
    quote: "The team at V.L. Garza transformed our Laredo home. Their attention to detail on our new roof was unmatched. Professional from start to finish.",
    projectType: 'Premium Metal Roof Installation'
  },
  {
    id: 't2',
    initials: 'MA',
    name: 'Maria A.',
    location: 'Alexander Area',
    rating: 5,
    quote: "After the storm, they were on-site immediately. They worked with our insurance and made the remodeling process stress-free.",
    projectType: 'Storm Damage & Insurance Recovery'
  },
  {
    id: 't3',
    initials: 'JH',
    name: 'Javier H.',
    location: 'Winfield Estates',
    rating: 5,
    quote: "Our master-bathroom and kitchen remodel exceeded everything my family expected. The custom cabinets feel solid, and the workers kept the house immaculate.",
    projectType: 'Full Kitchen & Bath Renovation'
  }
];

export const contactInfo = {
  address: "Tilden Ave, Laredo, TX 78041",
  coordinates: "27.5342° N, 99.4939° W",
  phone: "956-242-7000",
  email: "office@vlgarzabuilds.com",
  license: "TX-R-80421-A"
};
