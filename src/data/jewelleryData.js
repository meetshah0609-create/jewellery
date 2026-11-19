export const CATEGORIES = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'];

export const jewelleryItems = [
  {
    id: 1,
    name: 'Aurelia Kundan Choker Set',
    category: 'Necklaces',
    purity: '22K BIS Hallmarked Gold',
    weight: '34.5g',
    price: 245000,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted 22K yellow gold choker set with uncut polki stones and freshwater pearl drops.'
  },
  {
    id: 2,
    name: 'Celeste Solitaire Diamond Ring',
    category: 'Rings',
    purity: '18K Rose Gold • VVS1',
    weight: '4.2g',
    price: 78500,
    badge: 'IGI Certified',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    description: 'Classic four-prong 0.50 carat round brilliant solitaire set in warm 18K rose gold.'
  },
  {
    id: 3,
    name: 'Zoya Chandbali Drop Earrings',
    category: 'Earrings',
    purity: '22K Yellow Gold',
    weight: '14.8g',
    price: 108000,
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    description: 'Intricate filigree crescent earrings accented with emerald beads and micro-gold granulation.'
  },
  {
    id: 4,
    name: 'Noor Tennis Diamond Bracelet',
    category: 'Bracelets',
    purity: '18K White Gold • EF-VVS',
    weight: '11.4g',
    price: 164000,
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
    description: 'Flexible box-clasp tennis bracelet lined with 42 matched round-cut natural diamonds.'
  },
  {
    id: 5,
    name: 'Veda Layered Heritage Necklace',
    category: 'Necklaces',
    purity: '22K Antique Gold',
    weight: '28.0g',
    price: 198500,
    badge: null,
    image: 'https://images.unsplash.com/photo-1601121141797-c7d2447a1ff6?auto=format&fit=crop&w=800&q=80',
    description: 'Temple-inspired double-strand gold necklace with delicate ruby cabochon highlights.'
  },
  {
    id: 6,
    name: 'Elara Emerald Eternity Band',
    category: 'Rings',
    purity: '18K Yellow Gold',
    weight: '3.8g',
    price: 62000,
    badge: null,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    description: 'Alternating baguette emeralds and pavé diamonds crafted for effortless everyday stacking.'
  },
  {
    id: 7,
    name: 'Saira Pearl & Gold Jhumkas',
    category: 'Earrings',
    purity: '22K BIS Hallmarked Gold',
    weight: '12.1g',
    price: 89000,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional dome jhumkas finished with hand-strung Basra-style pearl fringes.'
  },
  {
    id: 8,
    name: 'Meera Sculpted Gold Kada',
    category: 'Bracelets',
    purity: '22K Yellow Gold',
    weight: '22.6g',
    price: 158000,
    badge: null,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    description: 'Hinged oval bangle featuring fine floral engraving and a concealed safety lock.'
  }
];

export const formatINR = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);