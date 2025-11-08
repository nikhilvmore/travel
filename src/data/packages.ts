import type { TravelPackage } from '../types/package';

export const packages: TravelPackage[] = [
  {
    id: 'classic-europe',
    title: 'Classic Europe',
    tagline: 'Explore 10 Countries in 14 Days',
    image: '/IMG-20251026-WA0001.jpg',
    duration: '14 Days',
    dates: ['22nd Nov', '23rd Dec'],
    countries: ['France', 'Belgium', 'Germany', 'Netherlands', 'Austria', 'Italy', 'Switzerland', 'Vatican City', 'Luxembourg', 'Liechtenstein'],
    price: 2700,
    currency: '€',
    highlights: [
      'All Meals with Local Treats',
      'Travel insurance',
      'Schengen visa assistance',
      '13 nights in premium hotels',
      'Entry tickets to mentioned attractions',
      'Private coach transportation across Europe',
      'Professional and Experienced Tour Manager',
      'Guide and Driver Tips',
      '500ml Water Bottle Per Person Per Day'
    ],
    included: [
      'Romantic cities',
      'Breathtaking landscapes',
      'Iconic landmarks',
      'Cultural experiences',
      'All-inclusive comfort'
    ]
  },
  {
    id: 'wanderlust-europe',
    title: 'Wanderlust Europe',
    tagline: 'Turn your dream vacation into reality',
    image: '/IMG-20251026-WA0002.jpg',
    duration: '10 Days',
    dates: ['22nd Nov', '23rd Dec'],
    countries: ['France', 'Belgium', 'Netherlands', 'Luxembourg', 'Germany', 'Switzerland'],
    price: 2160,
    currency: '€',
    highlights: [
      'All Meals with Local Treats',
      'Travel insurance',
      'Schengen visa assistance',
      '9 nights in premium hotels',
      'Entry tickets to mentioned attractions',
      'Private coach transportation across Europe',
      'Professional and Experienced Tour Manager',
      'Guide and Driver Tips',
      '500ml Water Bottle Per Person Per Day'
    ],
    included: [
      'European charm',
      'Cultural immersion',
      'Premium accommodations',
      'Guided experiences',
      'Affordable luxury'
    ]
  },
  {
    id: 'alpine-rhapsody',
    title: 'Alpine Rhapsody',
    tagline: "It's Time to Travel",
    image: '/IMG-20251026-WA0003.jpg',
    duration: '8 Days',
    dates: ['1st Nov', '28th Nov', '29th Dec'],
    countries: ['Switzerland', 'Austria', 'Italy', 'Liechtenstein', 'Vatican'],
    price: 1800,
    currency: '€',
    highlights: [
      'All Meals with Local Treats',
      'Travel insurance',
      'Schengen visa assistance',
      '7 nights in premium hotels',
      'Entry tickets to mentioned attractions',
      'Private coach transportation across Europe',
      'Professional and Experienced Tour Manager',
      'Guide and Driver Tips',
      '500ml Water Bottle Per Person Per Day'
    ],
    included: [
      'Alpine scenery',
      'Mountain experiences',
      'Historic cities',
      'Cultural landmarks',
      'Intimate group experiences'
    ]
  }
];
