import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    src: '/b2.png',
    title: 'MORPHEUS VS. ENDOLIFT: SKIN REJUVENATION TECHNOLOGIES',
    author: 'Tracey Wilson',
    date: 'August 30, 2023',
    avatar: '👨‍⚕️'
  },
  {
    src: '/b3.png',
    title: 'EXOSOME THERAPY: ADVANCING SKIN AND HAIR REJUVENATION',
    author: 'Jason Francisco',
    date: 'August 28, 2023',
    avatar: '👩‍⚕️'
  },
  {
    src: '/b4.png',
    title: 'FOOD SENSITIVITY TESTING FROM AN ALTERNATIVE MEDICINE CENTER',
    author: 'Elizabeth Mavle',
    date: 'August 20, 2023',
    avatar: '🩺'
  },
  {
    src: '/b5.png',
    title: 'YOUTHFUL CHEEKS: SKINVIVE BY JUVEDERM IN MIAMI, FL',
    author: 'Ernie Smith',
    date: 'August 30, 2023',
    avatar: '💊'
  },
  {
    src: '/b6.png',
    title: 'FACIAL REJUVENATION: ACCUTITE VS. ENDOLIFT COMPARISON',
    author: 'Ernie Smith',
    date: 'August 28, 2023',
    avatar: '💊'
  },
  {
    src: '/b7.png',
    title: 'TRANSFORM YOUR SKIN: EXPLORE THE POWER OF CHEMICAL PEELS',
    author: 'Tracey Wilson',
    date: 'August 30, 2023',
    avatar: '👨‍⚕️'
  },
  {
    src: '/b8.png',
    title: 'BENEFITS OF HORMONE REPLACEMENT THERAPY',
    author: 'Jason Francisco',
    date: 'August 28, 2023',
    avatar: '👩‍⚕️'
  },
  {
    src: '/b9.png',
    title: 'ALL ABOUT WATERJET ASSISTED LIPOSUCTION',
    author: 'Elizabeth Mavle',
    date: 'August 20, 2023',
    avatar: '👩‍⚕️'
  },
  {
    src: '/b10.png',
    title: 'BENEFITS OF VITAMIN INJECTION FOR WOMEN',
    author: 'Ernie Smith',
    date: 'August 30, 2023',
    avatar: '💊'
  }
];

export default function Blog() {
  return (
    <section className="py-12 bg-white text-gray-900 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. TOP MAIN FEATURED POST (b1.png) */}
        <Link 
          to="/blogdetails" 
          className="relative block rounded-2xl overflow-hidden aspect-[21/9] min-h-[340px] md:min-h-[520px] shadow-sm border border-gray-100 mb-12 group"
        >
          <img 
            src="/b1.png" 
            alt="Featured Post" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Content Over Main Post */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 space-y-4">
            <div>
              <span className="bg-[#00c5a2] hover:bg-[#00b090] text-white text-xs sm:text-sm font-black px-4 py-2 rounded-md uppercase tracking-wider transition-colors inline-block shadow-md">
                Read More
              </span>
            </div>
            
            <h2 className="text-white text-lg sm:text-3xl lg:text-4xl font-black uppercase tracking-wide max-w-4xl leading-tight">
              HOW TESTOSTERONE THERAPY IS USED FOR SEXUAL WELLNESS
            </h2>
            
            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-300">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">👤</span>
              <span>Tracey Wilson</span>
              <span className="opacity-40">•</span>
              <span>August 30, 2023</span>
            </div>
          </div>
        </Link>

        {/* 2. REGULAR BLOG POSTS GRID (b2.png to b10.png) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, idx) => (
            <Link 
              to="/blogdetails" 
              key={idx} 
              className="flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-xs hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Post Thumbnail Image */}
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] w-full bg-white mb-5">
                <img 
                  src={post.src} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-black px-3.5 py-1.5 rounded-md uppercase tracking-wider shadow-sm hover:bg-[#00c5a2] hover:text-white transition-all duration-200">
                  Read More
                </span>
              </div>

              {/* Title Content */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-sm sm:text-base font-black text-gray-900 leading-snug line-clamp-2 uppercase tracking-wide group-hover:text-[#00c5a2] transition-colors">
                  {post.title}
                </h3>

                {/* Author Metadata Footer */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400 font-bold">
                  <span className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-base shadow-xs select-none border border-gray-100">
                    {post.avatar}
                  </span>
                  <div>
                    <p className="text-gray-800 font-extrabold leading-none mb-1">{post.author}</p>
                    <p className="text-[10px] text-gray-400 font-medium leading-none">{post.date}</p>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* 3. BOTTOM LOAD MORE BUTTON */}
        <div className="flex justify-center mt-16">
          <button
            type="button"
            className="border-2 border-gray-300 hover:border-[#00c5a2] hover:bg-[#00c5a2] hover:text-white text-gray-700 font-black text-xs sm:text-sm px-8 py-3 rounded-lg shadow-xs tracking-wider transition-all duration-200 uppercase"
          >
            Load More
          </button>
        </div>

      </div>
    </section>
  );
}