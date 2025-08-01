'use client';

export default function LoveMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 flex items-center justify-center bg-pink-100 rounded-full mx-auto mb-8">
            <i className="ri-heart-fill text-3xl text-pink-500"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-['Pacifico']">
            My Love Letter to You
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-10 md:p-12 rounded-2xl shadow-xl">
          <div className="text-left space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              My Dearest Love,
            </p>
            <p>
              On this special Girlfriend's Day, I want you to know that you are the most incredible gift life has given me. 
              From the moment you walked into my life, everything changed for the better.
            </p>
            <p>
              You make ordinary days feel extraordinary. Your presence turns simple moments into beautiful memories. 
              The way you laugh, the way you care, the way you love - everything about you amazes me every single day.
            </p>
            <p>
              I promise to always cherish you, support your dreams, and love you with all my heart. 
              You are not just my girlfriend; you are my best friend, my inspiration, and my forever person.
            </p>
            <p>
              Thank you for being you, for choosing to share your life with me, and for making every day brighter just by being in it.
            </p>
            <div className="text-right mt-8">
              <p className="italic">
                Forever yours,<br />
                With all my love ❤️
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-heart-fill text-3xl text-pink-400"></i>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-heart-2-fill text-3xl text-rose-400"></i>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <i className="ri-heart-fill text-3xl text-pink-400"></i>
          </div>
        </div>
        
        <p className="mt-8 text-2xl font-semibold text-gray-800 font-['Pacifico']">
          Happy Girlfriend's Day, Beautiful! 💕
        </p>
      </div>
    </section>
  );
}