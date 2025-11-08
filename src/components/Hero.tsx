import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent mb-4">
                Explore Europe
              </h2>
              <p className="text-2xl text-teal-700 font-semibold">
                Experience Unforgettable Adventures
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Discover the charm, culture, and iconic landmarks of Europe. From romantic cities to breathtaking landscapes, our all-inclusive tours offer the perfect blend of comfort and affordability.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-gray-900">Why Travel With VoiceTravel?</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  Professional experienced tour managers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  All-inclusive packages with premium hotels
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  Travel insurance and visa assistance included
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                  Local meals and cultural experiences
                </li>
              </ul>
            </div>

            <a href="#packages" className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition font-semibold group">
              Explore Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-blue-200 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl animate-pulse"></div>
                <h3 className="text-xl font-bold text-gray-900">Featured Destinations</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Paris', 'Vienna', 'Rome', 'Alps', 'Amsterdam', 'Zurich'].map((city) => (
                    <div key={city} className="bg-blue-50 rounded-lg px-4 py-3 text-center font-medium text-gray-700 hover:bg-red-50 transition">
                      {city}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 text-center">And many more amazing places!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
