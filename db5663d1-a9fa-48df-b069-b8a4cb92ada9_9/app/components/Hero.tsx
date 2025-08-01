
'use client';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://static.readdy.ai/image/67a0617b23c29f02051201e236d33f24/f555fac09db45519ac6b5ff1238bd614.jfif')`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <div className="mb-8">
          <i className="ri-heart-fill text-6xl text-pink-300 mb-6 block"></i>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Pacifico']">
          Happy Girlfriend's Day
        </h1>
        <h2 className="text-2xl md:text-4xl mb-8 font-light">
          To My Beautiful Angel
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          This special day is dedicated to celebrating you - the most amazing person in my life. 
          Every moment with you feels like a beautiful dream come true.
        </p>
        <div className="flex justify-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-heart-fill text-3xl text-pink-300"></i>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-heart-fill text-3xl text-rose-300"></i>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-heart-fill text-3xl text-pink-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
