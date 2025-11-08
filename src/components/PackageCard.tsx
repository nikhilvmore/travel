import { MapPin, Calendar, Check } from 'lucide-react';
import type { TravelPackage } from '../types/package';

interface PackageCardProps {
  pkg: TravelPackage;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-80 overflow-hidden bg-gray-200">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-3xl font-bold text-white mb-1">{pkg.title}</h3>
          <p className="text-sm text-gray-100">{pkg.tagline}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Calendar className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600 font-medium">Duration</p>
              <p className="font-semibold text-gray-900">{pkg.duration}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600 font-medium">Countries</p>
              <p className="font-semibold text-gray-900">{pkg.countries.length} Nations</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-gray-600 font-medium mb-3">DESTINATIONS</p>
          <div className="flex flex-wrap gap-2">
            {pkg.countries.map((country) => (
              <span
                key={country}
                className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-gray-600 font-medium mb-3">WHAT'S INCLUDED</p>
          <div className="space-y-2">
            {pkg.highlights.slice(0, 4).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{highlight}</span>
              </div>
            ))}
            {pkg.highlights.length > 4 && (
              <p className="text-xs text-gray-500 pl-6 pt-1">+ {pkg.highlights.length - 4} more benefits</p>
            )}
          </div>
        </div>

        <div className="pt-4 border-t flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 font-medium">Price Per Person</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-red-700">{pkg.currency}{pkg.price}</span>
            </div>
          </div>
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition font-semibold text-sm">
            Book Now
          </button>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-gray-500">Dates: {pkg.dates.join(' • ')}</p>
        </div>
      </div>
    </div>
  );
}
