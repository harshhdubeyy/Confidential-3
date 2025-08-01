'use client';

const reasons = [
  {
    title: "Your Beautiful Smile",
    description: "Your smile lights up my entire world and makes even the darkest days bright and beautiful.",
    icon: "ri-emotion-happy-line"
  },
  {
    title: "Your Kind Heart",
    description: "The way you care for everyone around you shows what a beautiful soul you have.",
    icon: "ri-heart-3-line"
  },
  {
    title: "Your Laugh",
    description: "Your laughter is my favorite sound in the world - it's pure magic and joy.",
    icon: "ri-music-2-line"
  },
  {
    title: "Your Strength",
    description: "You inspire me every day with your courage and determination to face any challenge.",
    icon: "ri-award-line"
  },
  {
    title: "Your Love",
    description: "The love you give makes me feel like the luckiest person alive. You complete me.",
    icon: "ri-hearts-line"
  },
  {
    title: "Just Being You",
    description: "Everything about you is perfect. You are my dream come true and my forever love.",
    icon: "ri-star-smile-line"
  }
];

export default function LoveReasons() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Pacifico']">
            Reasons Why I Love You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            There are countless reasons, but here are just a few that make my heart skip a beat
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-200 rounded-full mb-6 mx-auto">
                <i className={`${reason.icon} text-2xl text-pink-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}