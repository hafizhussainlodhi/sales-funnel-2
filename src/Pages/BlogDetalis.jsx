import React from 'react';

const BlogDetails = () => {
    const coreValues = [
        {
            id: '01',
            title: 'Compassionate Service',
            desc: 'We are dedicated to providing a welcoming, empathetic environment where every individual feels heard, valued, and deeply cared for throughout their wellness journey.'
        },
        {
            id: '02',
            title: 'Whole-Person Wellness',
            desc: 'Our approach looks beyond surface symptoms, focusing on complete alignment and integrative care that harmonizes how you feel on the inside with how you look on the outside.'
        },
        {
            id: '03',
            title: 'Integrity & Transparency',
            desc: 'We build lasting trust through honest communication, scientifically backed guidance, and clear, realistic expectations for every treatment plan we offer.'
        },
        {
            id: '04',
            title: 'Science First',
            desc: 'Every service and technology we offer is meticulously selected, evidence-based, and performed by certified medical professionals to ensure the highest safety standards.'
        },
        {
            id: '05',
            title: 'Personalized Care',
            desc: 'We recognize that no two bodies are the same. Our expert team designs highly customized longevity and beauty plans tailored specifically to your unique goals.'
        }
    ];

    const galleryImages = [
    "/k1.png", "/k2.png", "/k3.png", "/k4.png", "/k5.png", "/k6.png",
    "/k7.png", "/k8.png", "/k9.png", "/k10.png", "/k11.png", "/k12.png"
  ];

  const infoCards = [
    {
      title: "Locations",
      content: (
        <div className="space-y-2">
          <p>7500 NW 25th St. Suite 106</p>
          <p>Miami, FL 33122</p>
          <p className="font-semibold text-[#1e2d8e]">(305) 398-4370</p>
        </div>
      )
    },
    {
      title: "Timing",
      content: (
        <div className="space-y-1">
          <p><span className="font-medium">Monday-Friday:</span> 10AM to 6PM</p>
          <p><span className="font-medium">Saturday:</span> 10AM to 4PM</p>
          <p><span className="font-medium">Sunday:</span> Closed</p>
        </div>
      )
    },
    {
      title: "Call us Today",
      content: (
        <div className="space-y-2">
          <p className="font-semibold text-[#1e2d8e] text-base">(305) 398-4370</p>
          <p>or schedule your complimentary consultation online today.</p>
        </div>
      )
    }
  ];

    return (
        <>
            <section className="bg-white text-[#2D3748] font-sans px-4 py-12 md:py-20 max-w-6xl mx-auto">

                {/* Our Story Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3B449B] mb-6">Our Story</h2>
                    <div className="space-y-6 text-sm md:text-base text-gray-6xl leading-relaxed">
                        <p>
                            <span className="font-bold text-[#3B449B]">Nuceria Health</span> is a premier <span className="font-bold text-[#3B449B]">Wellness and Aesthetic Center</span> located in Miami, designed to help people feel energized, confident, and in control of their health. We believe true wellness goes beyond the surface—it's about aligning how you feel on the inside with how you look on the outside.
                        </p>
                        <p>
                            Our services combine cutting-edge medical technologies with personalized care plans that focus on longevity, balance, and beauty. From <span className="font-bold text-[#3B449B]">hormone optimization</span> and <span className="font-bold text-[#3B449B]">weight loss therapy</span> to <span className="font-bold text-[#3B449B]">IV infusions</span>, <span className="font-bold text-[#3B449B]">sexual wellness</span>, and <span className="font-bold text-[#3B449B]">advanced aesthetics</span>, our approach is integrative and results-driven.
                        </p>
                        <p>
                            Our dedicated team of medical professionals, licensed providers, and wellness specialists work together to create an environment where you are supported every step of the way. With a focus on science, safety, and hospitality, <span className="font-bold text-[#3B449B]">Nuceria Health</span> is your trusted partner in receiving what it means to age well.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto mb-20 md:mb-28">
                    {/* Mission */}
                    <div className="border-l-4 border-[#3B449B] pl-6 py-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#3B449B] mb-4">Our Mission</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            To empower individuals to take control of their health and vitality through personalized medical and aesthetic care that promotes longevity, confidence, and a higher quality of life.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="border-l-4 border-[#3B449B] pl-6 py-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#3B449B] mb-4">Our Vision</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            To become the most trusted and innovative provider of integrative health and aesthetics in the U.S., helping adults feel and look their best at every stage of life.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3B449B] text-center mb-12 md:mb-16">Core Values</h2>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {coreValues.slice(0, 3).map((value) => (
                            <div key={value.id} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-[#F0F2FF] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-xl font-bold text-[#3B449B]">{value.id}</span>
                                </div>
                                <h4 className="text-lg font-bold text-[#3B449B] mb-3">{value.title}</h4>
                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom 2 Centered Cards (Desktop Only layout adjustment, falls back to normal grid style on mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {coreValues.slice(3, 5).map((value) => (
                            <div key={value.id} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-[#F0F2FF] rounded-full flex items-center justify-center mb-6">
                                    <span className="text-xl font-bold text-[#3B449B]">{value.id}</span>
                                </div>
                                <h4 className="text-lg font-bold text-[#3B449B] mb-3">{value.title}</h4>
                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="w-full bg-white py-16 font-sans">
      
      {/* ================= 1. GALLERY HEADER ================= */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2d8e]">
          Gallery
        </h2>
      </div>

      {/* ================= 2. IMAGES GRID ================= */}
      {/* Mobile par 2, Tablet par 3, aur Large Desktop par 6 columns banenge */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((imgSrc, index) => (
            <div 
              key={index} 
              className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
            >
              <img 
                src={imgSrc} 
                alt={`Gallery item ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= 3. INFO CARDS (Locations, Timings, Call Us) ================= */}
      {/* Fully responsive layout: Mobile par single scroll stack, tablets par grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(30,45,142,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[180px]"
            >
              <div>
                {/* Title */}
                <h3 className="text-[#1e2d8e] font-bold text-lg sm:text-xl mb-4">
                  {card.title}
                </h3>
                {/* Dynamic Info Body Text */}
                <div className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
        </>
    );
};

export default BlogDetails;