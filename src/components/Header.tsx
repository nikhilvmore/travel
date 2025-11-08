import { Mic2 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
            <Mic2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-900">VoiceTravel</h1>
            <p className="text-xs text-gray-600">voicetraveling.co.in</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#packages" className="text-gray-700 hover:text-red-700 font-medium transition">Packages</a>
          <a href="#about" className="text-gray-700 hover:text-red-700 font-medium transition">About</a>
          <a href="#contact" className="text-gray-700 hover:text-red-700 font-medium transition">Contact</a>
        </nav>
        <button className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition font-medium">
          Book Now
        </button>
      </div>
    </header>
  );
}
