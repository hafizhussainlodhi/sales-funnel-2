import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopProducts = () => {
  // Categories List
  const categories = [
    { name: "BHRT For Women", checked: true },
    { name: "Enclolit", checked: false },
    { name: "HRT For Men", checked: false },
    { name: "Injectables", checked: false },
    { name: "IV Ozone Therapy", checked: false },
    { name: "IV Therapy", checked: false },
    { name: "Laboratory Testing", checked: false },
    { name: "Laser Hair Removal", checked: false },
    { name: "Medical Screening", checked: false },
    { name: "PDO Thread", checked: false },
    { name: "Sexual Wellness", checked: false }
  ];

  // Dummy Products Data (Using /tablate.png for all as per request)
  const products = Array(8).fill({
    id: "magnesium-chelate",
    title: "Magnesium Chelate",
    strength: "Strength: 200 mg | Size: 1 Bottle",
    price: "$29.95",
    image: "/tablate.png",
    rating: 5
  });

  return (
    <div className="w-full bg-gray-50 min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar: Shop by Categories */}
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-fit">
          <h2 className="text-[#2E3192] font-semibold text-lg mb-4 pb-2 border-b border-gray-100">
            Shop by Categories
          </h2>
          
          {/* Scrollable list on mobile, normal list on desktop */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
            {categories.map((category, index) => (
              <label 
                key={index} 
                className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:text-[#2E3192] whitespace-nowrap min-w-fit"
              >
                <input 
                  type="checkbox" 
                  defaultChecked={category.checked}
                  className="w-4 h-4 rounded text-[#2E3192] border-gray-300 focus:ring-[#2E3192] accent-[#2E3192]"
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Right Content: Product Grid */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group flex flex-col justify-between"
              >
                {/* Wishlist & Compare Icons on Top Right */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="p-1.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors duration-200">
                    {/* Heart Icon */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                {/* Product Image Link */}
                <Link to={`/product/${product.id}`} className="block mb-4 overflow-hidden rounded-md">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                {/* Product Info */}
                <div className="space-y-2 mt-auto">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Specifications */}
                  <p className="text-[11px] text-gray-400 font-medium">
                    {product.strength}
                  </p>

                  {/* Title Link */}
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-semibold text-gray-800 hover:text-[#2E3192] transition-colors duration-200 line-clamp-1">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Price */}
                  <p className="text-sm font-bold text-[#2E3192]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default ShopProducts;