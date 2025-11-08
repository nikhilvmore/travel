export interface TravelPackage {
  id: string;
  title: string;
  tagline: string;
  image: string;
  duration: string;
  dates: string[];
  countries: string[];
  price: number;
  currency: string;
  highlights: string[];
  included: string[];
}
