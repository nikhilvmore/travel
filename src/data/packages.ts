import type { TravelPackage } from '../types/package';

export const packages: TravelPackage[] = [
  {
    id: 'classic-europe',
    title: 'Blooming Japan',
    tagline: 'CHERRY BLOSSOM SPECIAL',
    image: '/IMG-20251026-WA0001.jpg',
    duration: '07 NIGHTS / 08 DAYS  ',
    dates: ['25TH MARCH’2026' , '8TH APRIL’2026'],
    countries: ['01N Narita' , '02N Tokyo' , '03N Kyoto' , '01N Kansai'],
    price: 100000,
    currency: 'INR',
    highlights: [
      'Take in breathtaking views from the Tokyo Skytree, one of the world’s tallest towers.',
      'Witness spring magic with cherry blossoms in full bloom at Ueno Park, Tokyo',
      'Step into a futuristic digital wonderland at teamLab Planets Tokyo',
      'Enjoy a serene Meguro River Cruise, surrounded by iconic sakura blossoms',
      'Marvel at the majestic beauty of Mount Fuji, Japan’s timeless symbol',
      'Discover volcanic wonders at Owakudani Valley, famous for its steaming vents',
      'Relax with a scenic journey across Lake Ashi on a tranquil cruise',
      'Experience the thrill of traveling on the legendary Shinkansen Bullet Train',
      'Reflect on history at Hiroshima’s Peace Memorial Park, a moving tribute to peace',
      'Stand before the symbolic Atomic Bomb Dome, a UNESCO World Heritage site',
      'Wander through the enchanting Arashiyama Bamboo Grove in Kyoto',
      'Relish a nostalgic ride on the Sagano Romantic Train through Kyoto’s landscapes',
      'Discover Japan’s tradition at a Sake Brewery Tour with tastings',
      'Admire the architectural beauty of Kiyomizu-dera Temple in Kyoto',
      'Embrace culture by dressing in a traditional Japanese Kimono',
      'Walk through the endless vermilion gates at Fushimi Inari Taisha Shrine',
      'Meet the friendly deer at Nara Park, a symbol of harmony with nature',
      'Visit Todaiji Temple in Nara, home to the Great Buddha statue',
      'Shop and explore Osaka’s vibrant Shinsaibashi Shopping Area',
      'Professional Multilingual Indian Tour Manager throughout the tour', 
      'Stay in superior 4* Star Hotels',
      'Indulge in a Delectable Array of Jain*, Vegetarian, and Non-Vegetarian Indian Cuisine, Complemented by Local Culinary Delights as Per Your Itinerary',
      'Jain meal options in Japan are very limited — carrying ready-to-eat alternatives is advised'

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
    title: 'Best of Australia',
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
