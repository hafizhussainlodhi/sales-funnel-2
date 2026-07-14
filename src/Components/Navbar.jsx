import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState('/n2.png'); // Default state is n2.png

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectFlag = (flagPath) => {
    setSelectedFlag(flagPath);
    setShowLanguageDropdown(false);
  };

  const navLinks = [
    { name: 'For Men', path: '/for-men' },
    { name: 'For Women', path: '/for-women' },
    { name: 'Supplements', path: '/supplements' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full font-sans select-none relative z-50">
      {/* 1. TOP BLUE BAR */}
      <div className="bg-[#1e2d8e] text-white text-[11px] sm:text-xs md:text-sm py-2 px-4 md:px-8 flex justify-between items-center gap-2">
        {/* Contact Info (Left aligned on mobile & desktop) */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="tel:3052656226" className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition">
            <Phone size={12} className="rotate-90" />
            <span>305.265.6226</span>
          </a>
          <a href="mailto:example@gmail.com" className="hidden xs:flex items-center gap-1 sm:gap-2 hover:opacity-80 transition">
            <Mail size={12} />
            <span>example@gmail.com</span>
          </a>
        </div>

        {/* Social Icons (Right aligned on mobile & desktop) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* YouTube */}
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3h-4V6c0-.5.5-1 1-1h3V1H13c-3.3 0-6 2.7-6 6v1H9z"/>
            </svg>
          </a>
          {/* Twitter / X */}
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white border-b border-gray-100 px-4 md:px-8 py-3 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Link */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/1.png" 
              alt="Nuceria Logo" 
              className="h-10 md:h-14 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-200 ${
                    isActive 
                      ? 'text-[#1e2d8e] font-bold border-b-2 border-[#1e2d8e]' 
                      : 'text-gray-600 hover:text-[#1e2d8e]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 relative">
            {/* Login Button */}
            <Link 
              to="/login" 
              className="hidden sm:inline-block bg-[#1e2d8e] hover:bg-opacity-90 text-white font-medium text-sm px-6 py-2.5 rounded-full transition duration-300 shadow-sm"
            >
              Login Here
            </Link>

            {/* Dynamic Language Flag Selector with Dropdown */}
            <div className="relative">
              <div 
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center border border-gray-300 rounded-full px-2.5 py-1.5 gap-1.5 cursor-pointer hover:bg-gray-50 transition"
              >
                <img 
                  src={selectedFlag} 
                  alt="Selected Flag" 
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span className="text-gray-600 text-[10px]">&#9662;</span>
              </div>

              {/* Language Selector Dropdown */}
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-150 rounded-lg shadow-lg py-1 w-24 z-50">
                  <button 
                    onClick={() => selectFlag('/n2.png')}
                    className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-gray-100 transition text-xs"
                  >
                    <img src="/n2.png" alt="n2 flag" className="w-5 h-4 object-cover rounded-sm" />
                    <span>USA</span>
                  </button>
                  <button 
                    onClick={() => selectFlag('/n5.png')}
                    className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-gray-100 transition text-xs"
                  >
                    <img src="/n5.png" alt="n5 flag" className="w-5 h-4 object-cover rounded-sm" />
                    <span>ESA</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 text-gray-600 hover:text-[#1e2d8e] focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 lg:hidden py-4 px-6 transition duration-300 ease-in-out">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 transition duration-200 border-b border-gray-50 ${
                      isActive ? 'text-[#1e2d8e] font-bold' : 'text-gray-600 hover:text-[#1e2d8e]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Login Link for Mobile Menu */}
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="sm:hidden block text-center bg-[#1e2d8e] text-white font-medium py-3 rounded-full mt-2"
              >
                Login Here
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}