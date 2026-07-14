import React, { useState } from 'react';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Executive Team', 'Medical Team', 'Office Team'];

  const teamMembers = [
    {
      id: 1,
      name: 'FLORENCE MUELLER',
      role: 'Lead UX Designer at Google',
      rating: '5.0',
      reviews: '94 reviews',
      desc: 'Ullamcorper in pulvinar varius turpis amet ornare ut mattis id urna a inceptos donec venenatis.',
      img: '/j1.png',
      category: 'Executive Team'
    },
    {
      id: 2,
      name: 'MISS DIANNA POLLICH',
      role: 'Copywriter at Facebook',
      rating: '5.0',
      reviews: '94 reviews',
      desc: 'Purus faucibus platea sagittis ullamcorper. Pellentesque varius condimentum elementum facilisis posuere molestie.',
      img: '/j2.png',
      category: 'Medical Team'
    },
    {
      id: 3,
      name: 'LYNN PREDOVIC II',
      role: 'IOS Developer at Amazon',
      rating: '5.0',
      reviews: '94 reviews',
      desc: 'Ullamcorper in pulvinar varius turpis amet ornare ut mattis id urna a inceptos donec venenatis.',
      img: '/j3.png',
      category: 'Office Team'
    },
    {
      id: 4,
      name: 'EULA BECHTELAR',
      role: 'UI Designer at Azure',
      rating: '5.0',
      reviews: '94 reviews',
      desc: 'Purus faucibus platea sagittis ullamcorper. Pellentesque varius condimentum elementum facilisis posuere molestie.',
      img: '/j4.png',
      category: 'Executive Team'
    },
    {
      id: 5,
      name: 'KAREN STROMAN',
      role: 'UI Designer at Google',
      rating: '5.0',
      reviews: '94 reviews',
      desc: 'Purus faucibus platea sagittis ullamcorper. Pellentesque varius condimentum elementum facilisis posuere molestie.',
      img: '/j5.png',
      category: 'Medical Team'
    },
    {
      id: 6,
      name: 'DELLA SAWAYN',
      role: 'Lead UX Designer at Atlassian',
      rating: '5.0',
      reviews: '94 reviews',
      desc: 'Ullamcorper in pulvinar varius turpis amet ornare ut mattis id urna a inceptos donec venenatis.',
      img: '/j6.png',
      category: 'Office Team'
    },
    {
      id: 7,
      name: 'ANDRE BRADTKE',
      role: 'Android Developer at Facebook',
      rating: '4.8',
      reviews: '94 reviews',
      desc: 'Purus faucibus platea sagittis ullamcorper. Pellentesque varius condimentum elementum facilisis posuere molestie.',
      img: '/j7.png',
      category: 'Executive Team'
    },
    {
      id: 8,
      name: 'MELODY FADEL',
      role: 'Lead UI Designer at Apple',
      rating: '3.8',
      reviews: '94 reviews',
      desc: 'Ullamcorper in pulvinar varius turpis amet ornare ut mattis id urna a inceptos donec venenatis.',
      img: '/j8.png',
      category: 'Medical Team'
    }
  ];

  // Filter logic
  const filteredTeam = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  return (
    <section className="bg-white text-[#1E293B] font-sans px-4 py-12 md:py-16 max-w-7xl mx-auto">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <h2 className="text-3xl md:text-4.5xl font-extrabold text-[#1E2022] tracking-tight">
          Our Team
        </h2>
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-gray-400">
          {filters.map((filter, index) => (
            <React.Fragment key={filter}>
              <button
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors duration-200 hover:text-[#3B449B] font-medium ${
                  activeFilter === filter ? 'text-[#3B449B] font-semibold' : ''
                }`}
              >
                {filter}
              </button>
              {index < filters.length - 1 && (
                <span className="text-gray-300 hidden sm:inline">—</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {filteredTeam.map((member) => (
          <div key={member.id} className="group flex flex-col">
            
            {/* Image Container with Arrow Link */}
            <div className="relative overflow-hidden rounded-3xl aspect-[4/4.5] mb-5">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Arrow Button (Diagonal Link Icon Style) */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-colors duration-200 hover:bg-[#3B449B] group/btn">
                <svg
                  className="w-4 h-4 text-gray-7xl transition-colors duration-200 group-hover/btn:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            {/* Member Info */}
            <h3 className="text-[#3B449B] font-bold text-sm tracking-wider uppercase mb-1">
              {member.name}
            </h3>
            <p className="text-xs text-gray-400 font-medium mb-3">
              {member.role}
            </p>

            {/* Rating Section */}
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-3xl font-extrabold text-[#3B449B]">
                {member.rating}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                / {member.reviews}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              {member.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Team;