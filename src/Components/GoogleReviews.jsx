import { Star } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "John Smith",
      role: "CEO, Tech Innovations Inc",
      avatarLetter: "J",
      date: "Posted on March 1, 2024",
      rating: 5,
      text: "Exceptional service! The team exceeded our expectations and delivered a top-notch product on time."
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, Bright Solutions",
      avatarLetter: "S",
      date: "Posted on February 15, 2024",
      rating: 5,
      text: "Working with this company was a game-changer. Their attention to detail are unmatched!"
    },
    {
      name: "Michael Brown",
      role: "Founder, Brown & Co.",
      avatarLetter: "M",
      date: "Posted on January 10, 2024",
      rating: 5,
      text: "A fantastic experience from start to finish. Highly recommended for anyone looking for quality work!"
    },
    {
      name: "Emily Davis",
      role: "HR Director, Global Enterprises",
      avatarLetter: "E",
      date: "Posted on December 20, 2023",
      rating: 5,
      text: "Great customer support and seamless service. The team truly cares about their clients."
    }
  ];

  return (
    <section className="w-full bg-[#fafbfe] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2d8e] mb-2">
            What our customers say
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-normal">
            You Are Our Business
          </p>
        </div>

        {/* ================= GOOGLE RATING OVERALL BADGE ================= */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-12">
          {/* Left Side: Rating Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* Google Styled Text */}
            <div className="text-2xl font-bold flex items-center gap-1">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-gray-700 ml-2 font-medium">Rating</span>
            </div>

            {/* Stars and Count */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:border-l sm:border-gray-200 sm:pl-4">
              <span className="text-lg font-extrabold text-gray-800">5.0</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">420 reviews</span>
            </div>
          </div>

          {/* Right Side: Action Button */}
          <button className="bg-[#243194] hover:bg-[#1a2471] text-white font-medium text-xs sm:text-sm px-8 py-3 rounded-full transition duration-300 shadow-md transform hover:-translate-y-0.5">
            Write A Review
          </button>
        </div>

        {/* ================= REVIEWS CARDS GRID ================= */}
        {/* Mobile par 1, Tablet par 2, Large screens par 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100/60 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[350px]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center justify-center gap-0.5 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Paragraph */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 px-1">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info Area (Sticky to bottom) */}
              <div className="w-full flex flex-col items-center">
                {/* Rounded Monogram Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#8c1bab] text-white font-bold flex items-center justify-center text-sm mb-3">
                  {item.avatarLetter}
                </div>

                {/* Author Details */}
                <h4 className="text-gray-800 font-bold text-sm mb-0.5">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-xs mb-3 truncate max-w-[200px]">
                  {item.role}
                </p>

                {/* Date & Google Watermark */}
                <span className="text-gray-400 text-[9px] mb-2">{item.date}</span>
                
                {/* Mini Google Logo */}
                <div className="text-xs font-bold flex items-center gap-0.5 mt-1">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}