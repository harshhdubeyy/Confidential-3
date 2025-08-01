
'use client';

const memories = [
  {
    title: "Our Perfect Moment",
    description: "This beautiful memory captured between us - a moment I'll treasure forever, showing our pure happiness together.",
    image: "https://static.readdy.ai/image/67a0617b23c29f02051201e236d33f24/6cd3286a67b6efb31006b7f9e693619d.jfif"
  },
  {
    title: "Vintage Love Story",
    description: "Like a scene from a classic romance movie - our timeless love captured in this perfect retro moment, where every glance and smile tells our beautiful story.",
    image: "https://static.readdy.ai/image/67a0617b23c29f02051201e236d33f24/af304a6a9d8cd75d75d63b4584f328bd.jfif"
  },
  {
    title: "Our First Trip",
    description: "The adventure that brought us even closer together - exploring new places, creating unforgettable memories, and falling deeper in love with every mile we traveled side by side.",
    image: "https://static.readdy.ai/image/67a0617b23c29f02051201e236d33f24/d93e110a130caf1d8dfdc675e9b1189c.jfif"
  },
  {
    title: "Cozy Bus Travel",
    description: "Those sweet moments during our journey together - sharing smiles, making heart gestures, and enjoying each other's company while traveling to new adventures.",
    image: "https://static.readdy.ai/image/67a0617b23c29f02051201e236d33f24/337fefad68aae3a981e43ecb47ed7eeb.jfif"
  }
];

export default function MemoryGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-[\'Pacifico\']">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every moment with you becomes a treasured memory that I'll cherish forever
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {memory.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {memory.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-heart-fill text-lg text-pink-500"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
