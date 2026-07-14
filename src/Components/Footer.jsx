import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans text-gray-700 pt-12">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Logo and Contact Details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img 
            src="/1.png" 
            alt="Nuceria Logo" 
            className="h-24 w-auto object-contain mb-2"
          />
          <div className="text-sm space-y-1 text-gray-600">
            <p>7500 NW 25th St. Suite 106</p>
            <p>Miami, FL 33122</p>
            <p>(786) 756-8292</p>
          </div>
          <div className="text-sm pt-2 text-gray-600">
            <p>Call: (786) 756-8292</p>
            <p>Email: <a href="mailto:notifications@mynuceria.com" className="hover:text-[#4c49a6] transition-colors">notifications@mynuceria.com</a></p>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[#4c49a6] font-semibold text-xl mb-4">Company</h3>
          <ul className="space-y-3 text-sm font-medium">
            {[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'About US', path: '/about' },
              { label: 'Blog', path: '/blog' }
            ].map((link, idx) => (
              <li key={idx} className="flex items-center justify-center md:justify-start gap-2 hover:translate-x-1 transition-transform duration-200">
                <span className="text-[#4c49a6] font-bold text-xs">&gt;</span>
                <Link to={link.path} className="hover:text-[#4c49a6] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[#4c49a6] font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            {[
              { label: 'For Men', path: '/for-men' },
              { label: 'For Women', path: '/for-women' },
              { label: 'Supplements', path: '/supplements' },
              { label: 'Products', path: '/products' }
            ].map((link, idx) => (
              <li key={idx} className="flex items-center justify-center md:justify-start gap-2 hover:translate-x-1 transition-transform duration-200">
                <span className="text-[#4c49a6] font-bold text-xs">&gt;</span>
                <Link to={link.path} className="hover:text-[#4c49a6] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Recent Posts */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[#4c49a6] font-semibold text-xl mb-4">Recent Posts</h3>
          <div className="space-y-6 text-sm">
            <div className="hover:text-[#4c49a6] transition-colors cursor-pointer">
              <Link to="/blog/exosome-therapy">
                <p className="font-medium text-gray-800 hover:text-[#4c49a6]">Exosome Therapy: Advancing Skin and Hair Rejuvenation</p>
                <p className="text-gray-500 mt-1">The Art and Science of Lipofilling</p>
              </Link>
            </div>
            <div className="hover:text-[#4c49a6] transition-colors cursor-pointer">
              <Link to="/blog/baby-botox">
                <p className="font-medium text-gray-799 hover:text-[#4c49a6]">Baby Botox: A Subtle and Natural Approach to Anti-Aging</p>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#2E3192] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <p className="text-center md:text-left">
            Copyrights © 2026 All Rights Reserved by Nuceria
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5C12 5.67 12.5 5 13.5 5H15V2h-2.5C10.5 2 9 3.5 9 5.5V8z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* Yelp / Other Icon */}
            <a href="#" className="hover:opacity-80">
              <span className="font-bold text-sm">Y</span>
            </a>
            {/* Apple */}
            <a href="#" className="hover:opacity-80">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
              </svg>
            </a>
            {/* Android */}
            <a href="#" className="hover:opacity-80">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3l1.807 3.13a.563.563 0 1 1-.975.563l-1.83-3.17a10.99 10.99 0 0 1-9.05 0l-1.83 3.17a.562.562 0 1 1-.975-.563l1.807-3.13C3.54 13.56 1.5 10.53 1.5 7h21c0 3.53-2.04 6.56-4.977 8.3zM7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;