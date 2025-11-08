import { Users, Award, Globe, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            About <span className="text-red-700">VoiceTravel</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting unforgettable European adventures since day one
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                VoiceTravel is your trusted partner for discovering the magic of Europe. We believe that travel should be accessible, affordable, and absolutely unforgettable. Our mission is to create experiences that go beyond sightseeing—we craft memories that last a lifetime.
              </p>
              <p>
                With years of expertise in European tourism, our team has meticulously designed each package to balance adventure, comfort, and authentic cultural experiences. From the romantic streets of Paris to the Alpine peaks of Switzerland, we know Europe like no one else.
              </p>
              <p>
                What sets us apart is our commitment to personalized service, professional tour managers, and all-inclusive packages that eliminate hidden costs and travel stress. We handle the details so you can focus on the joy of exploration.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-blue-200 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-red-700 mb-2">500+</p>
                <p className="text-gray-700 font-semibold">Happy Travelers</p>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-700 font-semibold">Countries Explored</p>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-5xl font-bold text-teal-600 mb-2">12+</p>
                <p className="text-gray-700 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose <span className="text-red-700">VoiceTravel</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expert Guides</h3>
              <p className="text-gray-600">Professional and experienced tour managers dedicated to your comfort and enjoyment</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">All-Inclusive</h3>
              <p className="text-gray-600">Meals, accommodation, insurance, and activities all included for peace of mind</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Curated Routes</h3>
              <p className="text-gray-600">Thoughtfully designed itineraries hitting iconic landmarks and hidden gems</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Personalized Care</h3>
              <p className="text-gray-600">Your satisfaction is our priority, with support before, during, and after your trip</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Rajesh Kumar',
              role: 'Founder & CEO',
              desc: 'Passionate traveler with 15+ years of European tourism expertise'
            },
            {
              name: 'Priya Sharma',
              role: 'Head of Operations',
              desc: 'Ensures every tour runs flawlessly with meticulous planning'
            },
            {
              name: 'Marco Rossi',
              role: 'Chief Tour Manager',
              desc: 'Italian-born expert bringing authentic European experiences to life'
            }
          ].map((member) => (
            <div key={member.name} className="text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-red-200 to-blue-200 rounded-full mx-auto"></div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-red-700 font-semibold">{member.role}</p>
              <p className="text-gray-600">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
