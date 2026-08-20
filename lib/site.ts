export const site = {
  name: "Goldshield",
  registered: "GOLDSHIELD®",
  distributor: "Atroum GS",
  domain: "goldshieldtech.co.uk",
  tagline:
    "The world's first antimicrobial products that fully harness the power of water and are revolutionising long-lasting protection – without all the harsh chemicals.",
  shortTagline: "Patented, water-stabilised antimicrobial protection.",
  contact: {
    address: {
      line1: "Unit 2C, Churnet Park",
      line2: "James Brindley Road",
      city: "Leek",
      region: "Staffordshire",
      regionShort: "Staffs",
      postcode: "ST13 8YH",
      country: "United Kingdom",
    },
    email: "info@atriumgs.co.uk",
    phone: "+44 (0) 1908 973260",
    phoneHref: "tel:+441908973260",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "Air Conditioning", href: "/air-conditioning" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const trustItems = [
  {
    icon: "safe",
    title: "Safe to Use",
    desc: "EN, EPA & FDA registered",
  },
  {
    icon: "clock",
    title: "Long Lasting",
    desc: "Protects between uses",
  },
  {
    icon: "document",
    title: "Patented & Proven",
    desc: "65+ evidence based studies",
  },
  {
    icon: "molecule",
    title: "Non-Leaching",
    desc: "Won't leach into the bloodstream",
  },
] as const;

export const accreditationLogos = [
  { src: "/img/legacy/logo-3.png", alt: "EPA Registered", w: 240, h: 111 },
  { src: "/img/legacy/logo-2.png", alt: "FDA Registered", w: 237, h: 59 },
  { src: "/img/legacy/logo-1.png", alt: "European Commission Approved", w: 160, h: 111 },
  { src: "/img/legacy/logo-4.png", alt: "Goldshield", w: 307, h: 183 },
] as const;

export const approvalTable = [
  { product: "Goldshield 5 Antimicrobial Surface Protectant (Concentrate)", approval: "EPA Registration # 85556-1" },
  { product: "Goldshield 75 Antimicrobial Surface Protectant (Ready-to-use)", approval: "EPA Registration # 85556-2" },
  { product: "Goldshield 24 Antimicrobial & Antiseptic Moisturising Hand Sanitiser", approval: "NDC Code 40092-500-12" },
  { product: "Goldshield 5 Laundry Protector (Concentrate)", approval: "EN 14476, EN 1650, EN 1656, EN 1647" },
  { product: "Goldshield 75 14 Day Surface Disinfectant & Protector (Ready-to-use)", approval: "EN 14476" },
  { product: "Goldshield 24 24 Hour Hand Sanitiser", approval: "EN 1656, EN 1657, EN 1276, EN 1500" },
  { product: "Goldshield GO36 FFP3 Mask", approval: "CE-PC-210208-054-01-9A" },
] as const;

export const productCategories = [
  {
    id: "hands",
    slug: "Hands",
    title: "24 Hour Hand Sanitiser",
    desc: "The world's first water-based antimicrobial hand sanitiser that provides residual protection for up to 24 hours — without alcohol, methanol or harsh chemicals.",
    cols: 4,
    items: [
      { image: "1041-Litre-Tote-Hand-Sanitiser.webp", title: "Sanitiser & Protectant", size: "1041 Litre Tote" },
      { image: "Hand-Sanitiser-5L-Jerry-Can.webp", title: "Sanitiser & Protectant", size: "5L Container" },
      { image: "Hand-Sanitiser-500ml-Pump-Action-Foamer.webp", title: "Sanitiser & Protectant", size: "500ml Bottle" },
      { image: "Hand-Sanitiser-50ml-Pump-Action-Foamer.webp", title: "Sanitiser & Protectant", size: "50ml Bottle" },
    ],
  },
  {
    id: "surfaces",
    slug: "Surfaces",
    title: "Surface Disinfectant",
    desc: "Goldshield 75 provides up to 14 days of surface protection per application — bonding to surfaces at a molecular level to continuously destroy harmful bacteria and viruses.",
    cols: 3,
    items: [
      { image: "1041-Litre-Tote-Surface-Protector.webp", title: "Surfaces Product", size: "1041 Litre Tote" },
      { image: "Surface-Protector-5L-Jerry-Can.webp", title: "Surfaces Product", size: "5L Container" },
      { image: "Surface-Protector-750ml-Trigger-Spray.webp", title: "Surfaces Product", size: "750ml Bottle" },
    ],
  },
  {
    id: "laundry",
    slug: "Laundry",
    title: "Laundry Protector",
    desc: "Add Goldshield to any laundry wash cycle to impart lasting antimicrobial protection to uniforms, linens and textiles — proven effective wash after wash.",
    cols: 3,
    items: [
      { image: "1041-Litre-Tote-Laundry-Protector.webp", title: "Laundry Product", size: "1041 Litre Tote" },
      { image: "Laundry-Protector-5L-Jerry-Can.webp", title: "Laundry Product", size: "5L Container" },
      { image: "Laundry-Protector-1L-Bottle.webp", title: "Laundry Product", size: "1 Litre Bottle" },
    ],
  },
  {
    id: "masks",
    slug: "Masks",
    title: "FFP3 Antiviral & Antibacterial Mask",
    desc: "The Goldshield GO36 is an FFP3-rated face mask with built-in antimicrobial treatment — providing superior protection against airborne pathogens in healthcare, industrial and high-risk environments.",
    cols: 1,
    items: [
      { image: "mask-outer.webp", title: "FFP3 Antiviral and Antibacterial Mask", size: "G036S" },
    ],
  },
] as const;

export const markets = [
  { id: "healthcare", name: "Healthcare", image: "health-image.webp", subs: ["Dr. Offices", "Hospitals", "Nursing Care"], detail: "Hospitals, Doctors Surgeries, Care Homes, Nursing Care Facilities" },
  { id: "government", name: "Government & Military", image: "government-image.webp", subs: ["Bases", "Municipal", "Offices"], detail: "Offices, Town & City Centres, Prisons, Bases, Recreation Parks" },
  { id: "hospitality", name: "Hospitality", image: "hospitality-image.webp", subs: ["Airbnb", "Hotels", "Vacation Rentals"], detail: "Hotels, Airbnb, Holiday Rentals" },
  { id: "veterinary", name: "Veterinary", image: "veterinary-image.webp", subs: ["Animal Hospitals", "Groomers"], detail: "Animal Hospitals, Vets & Groomers" },
  { id: "travel", name: "Travel", image: "Travel.webp", subs: ["Airlines", "Cruise Liners"], detail: "Airlines, Cruise Liners" },
  { id: "transportation", name: "Transportation", image: "Transportation.webp", subs: ["Buses", "Cabs", "Subways"], detail: "Buses, Taxis, Underground Trains, Uber, Lyft" },
  { id: "sports", name: "Sports", image: "Sports.webp", subs: ["Arenas", "Facilities", "Stadiums"], detail: "Arenas, Facilities, Stadiums" },
  { id: "schools", name: "Schools", image: "Schools.webp", subs: ["K-12", "Universities"], detail: "K-12, Universities" },
  { id: "retail", name: "Retail", image: "Retail.webp", subs: ["Malls", "Cinemas", "Stores"], detail: "Stores, Shopping Centres, Cinemas" },
  { id: "outdoor", name: "Outdoor", image: "Outdoor.webp", subs: ["Boating", "Camping"], detail: "Camping, Boating / Marine" },
  { id: "office", name: "Office & Commercial", image: "office.webp", subs: ["Surfaces", "Reception", "Lifts"], detail: "Surfaces, Lifts, Reception Areas & Toilets" },
  { id: "laundry", name: "Laundry & Textiles", image: "Laundry.webp", subs: ["Uniforms", "Linens"], detail: "Uniforms & Linens" },
  { id: "hvac", name: "HVAC", image: "HVAC.webp", subs: ["New Construction", "Service"], detail: "New Construction, Service" },
  { id: "home", name: "Home", image: "Home.webp", subs: ["Bath", "Kitchen", "Living Room"], detail: "Kitchen, Bath, Living Rooms, Hands, Surfaces" },
  { id: "food", name: "Food & Beverage", image: "Food.webp", subs: ["Cafeterias", "Restaurants"], detail: "Restaurants, Cafes, Catering" },
  { id: "fitness", name: "Fitness", image: "Fitness.webp", subs: ["Gyms", "Trampoline Parks", "Yoga Studios"], detail: "Gyms, Yoga Studios, MMA, Trampoline Parks" },
  { id: "events", name: "Events & Conventions", image: "Events.webp", subs: ["Convention Centres", "Music Venues"], detail: "Convention Centres, Fayres, Music Venues" },
  { id: "cleaning", name: "Cleaning & Applicators", image: "Cleaning.webp", subs: ["Commercial Cleaning"], detail: "Commercial Cleaning Companies" },
  { id: "cannabis", name: "Cannabis & Horticulture", image: "Cannabis.webp", subs: ["Grow Houses", "Vegetables"], detail: "Grow Houses, Fruit Farms, Vegetables" },
  { id: "agriculture", name: "Agriculture", image: "Agriculture.webp", subs: ["Livestock", "Poultry"], detail: "Poultry, Livestock, Processing, Feed & Grain" },
] as const;

export const sectorOptions = [
  "Healthcare", "Government & Military", "Hospitality", "Veterinary", "Travel", "Transportation",
  "Sports", "Schools & Universities", "Retail", "Outdoor", "Office & Commercial", "Laundry & Textiles",
  "HVAC", "Home", "Food & Beverage", "Fitness", "Events & Conventions", "Cleaning & Applicators",
  "Cannabis & Horticulture", "Agriculture", "Other",
] as const;

export const featureBoxes = [
  {
    title: "Safe to Use",
    items: [
      "EN, EPA & FDA registered",
      "Water-based formula",
      "Approved for hospitals",
      "Alcohol, methanol, bleach & phosphate-free",
      "Non-flammable, combustible or corrosive",
    ],
  },
  {
    title: "Long Lasting",
    items: [
      "Protects between uses once applied",
      "Select products proven effective against COVID-19",
      "Up to 99.99% effective against illness-causing germs",
      "Effective against bacteria, fungi, mould, mildew, algae and yeast",
    ],
  },
  {
    title: "Patented & Proven",
    items: [
      "Patent # USA 9,089,138",
      "65+ evidence-based studies",
      "Approved for hospitals",
      "4 key third-party peer-reviewed publications",
      "Published in the American Journal of Infection Control",
    ],
  },
  {
    title: "Non-Leaching",
    items: [
      "Forms a non-migrating bond",
      "Won't leach into the bloodstream",
      "Does not pose the risk of creating \"super-bugs\"",
      "Safe for skin, surfaces and textiles",
    ],
  },
] as const;

export const acServices = [
  {
    icon: "molecule",
    title: "Component Dip Treatment",
    desc: "Filters, coils and other removable AC components are taken out of the unit, fully immersed in Goldshield's antimicrobial solution, and reinstalled — protecting the airflow path from microbial growth for longer than standard products.",
  },
  {
    icon: "wind",
    title: "Airflow Path Protection",
    desc: "The same covalently-bonded technology used across Goldshield's product line keeps working long after treatment, continuously protecting the surfaces air actually passes over.",
  },
  {
    icon: "clock",
    title: "Scheduled Re-Treatment",
    desc: "AC systems are treated on a recurring schedule aligned with routine servicing, so protection never lapses between visits.",
  },
] as const;

export const about = {
  philosophy: [
    "With the rise of \"superbugs\", COVID-19 [SARS CoV2], MRSA, Staph, and mould spores, there has never been a stronger awareness in the public mind about infections and the devastation that a global pandemic can bring to bear on us all. Each organisation must now balance the health and safety of their employees, adhere to new and rapidly-changing government guidelines and provide peace of mind.",
    "Goldshield is here to help and we can help you make a real impact with transparency, confidence and comfort — safe in the knowledge that our global research and ground-breaking technology is available today and at your disposal. Combined with the powerful residual protection of Goldshield, you can be assured you're providing the most effective, safe, and eco-friendly germ control system the world has to offer.",
    "Goldshield is the only technology to be peer-reviewed on 4 separate occasions and without doubt our patented technology is now widely recognised as the most versatile and safest antimicrobial on the market.",
  ],
  story: [
    "In the middle of years of research on antimicrobial technology, our co-founder, Tom Higgins' father passed away from a hospital-acquired infection. He found himself newly driven toward developing technologies that would eliminate the possibilities of germs — when improperly cleaned with ineffective, poor performing products — killing another person's loved one.",
    "With the help of his partner, Ted Shlisky and a former Dean of Harvard Medical School, in 2008 the Goldshield Formula was born. Through a process of non-stop research and development of innovative residual technology for hands, surfaces, laundry, FFP3 face masks and many more, Goldshield today is proud to deliver the best protection possible.",
    "The family continues to work tirelessly towards the dream of spreading this safe protection to every corner of the world.",
  ],
  storyCaption: "Original 8oz. GS24 Hand Sanitiser & 32oz. GS75 Surface Protectant",
  science: [
    "Goldshield safely and quickly bonds to any surface or textile. It protects against everything from microbial contamination to drug-resistant biologics, mould and mildew — eliminating the need for exhaustive disinfectant re-applications.",
    "The structure of Goldshield resembles a nano-size \"bed of spikes\". When germs are drawn towards a Goldshield-protected surface they are impaled and an electrostatic charge kills them.",
    "When Goldshield is sprayed on a surface or fabric it actually breaks through the surface tension and creates a strong covalent bond — in essence, Goldshield becomes a part of the surface. They stick so strongly together that Goldshield won't be washed or rubbed off by subsequent cleanings.",
    "Goldshield's nitrogen molecule creates an electrostatic charge that attracts negatively charged bacteria and viruses, destroying them on contact.",
  ],
  difference: "The scientists at Goldshield have spent years perfecting the science of antimicrobial protection in a nano-assembly. The results of our proactive, residual performing technologies provide safer environments as well as time and cost savings.",
  differenceHighlight: "Our products are the world's only patented, water-stabilised antimicrobial formulation that breaks down surface tension and imparts a durable, antimicrobial protective shield to nearly all surfaces, textiles, and skin.",
  approvalsIntro: "Our products adhere to the strictest guidelines outlined within these organisations.",
} as const;
