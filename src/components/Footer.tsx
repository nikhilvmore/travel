import { Mic2, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
                <Mic2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl">VoiceTravel</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for unforgettable European travel experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#packages" className="hover:text-red-400 transition">Packages</a></li>
              <li><a href="#about" className="hover:text-red-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-red-400 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition">Tour Packages</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Visa Assistance</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Custom Itineraries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                <span>+91-XXXX-XXXX-XX</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                <span>info@voicetraveling.co.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-400" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2024 VoiceTravel. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
