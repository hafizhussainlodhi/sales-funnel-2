import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import GoogleReviews from '../Components/GoogleReviews';

const ForWomen = () => {

    const products = [
        {
            image: "/g7.png",
            title: "Fat Loss Handbook By Dr.Joey",
            desc: "Start by picking up the phone & speaking with one of our health coaches about your life",
        },
        {
            image: "/g8.png",
            title: "Fat Loss Handbook By Dr.Joey",
            desc: "Start by picking up the phone & speaking with one of our health coaches about your life",
        },
        {
            image: "/g9.png",
            title: "Fat Loss Handbook By Dr.Joey",
            desc: "Start by picking up the phone & speaking with one of our health coaches about your life",
        },
        {
            image: "/g10.png",
            title: "Fat Loss Handbook By Dr.Joey",
            desc: "Start by picking up the phone & speaking with one of our health coaches about your life",
        },
    ];
    const steps = [
        {
            icon: "/e1.png",
            title: "CONSULTATION",
            desc: "Start by picking up the phone & speaking with one of our health coaches about your life style and health goals.",
        },
        {
            icon: "/e2.png",
            title: "YOUR LABS",
            desc: "Following the initial consultation, we will have you complete some simple lab work at our center or diagnostic center near you.",
        },
        {
            icon: "/e3.png",
            title: "DOCTOR VISIT",
            desc: "Once we receive your result we will have a clear symptoms. Which will allow the doctor to create a custom tailored program to fit your.",
        },
        {
            icon: "/e4.png",
            title: "TREATMENT PROTOCOL",
            desc: "Your new treatment program will inform therapy, from meds, supplements and injections to suggestions for a healthier lifestyle. On your time. At your place.",
        },
    ];

  
    const testimonials = [
        {
            name: "Yogesh Arora",
            role: "Smartyisids Agro Pvt ltd Incorporation",
            image: "/g4.png",
            rating: 5,
            review: "Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque eleifend elit."
        },
        {
            name: "Yogesh Arora",
            role: "Smartyisids Agro Pvt ltd Incorporation",
            image: "/g5.png",
            rating: 5,
            review: "Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque eleifend elit."
        },
        {
            name: "Yogesh Arora",
            role: "Smartyisids Agro Pvt ltd Incorporation",
            image: "/g6.png",
            rating: 5,
            review: "Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque eleifend elit."
        }
    ];

    return (
        <>
            <div className="w-full bg-white font-sans min-h-screen">
                {/* Hero / Main Section */}
                <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Side: Content & CTAs */}
                    <div className="w-full md:w-[55%] space-y-6 text-left order-2 md:order-1">
                        {/* Subheading with Icon style */}
                        <div className="flex items-center gap-2">
                            <span className="text-[#4c49a6] text-xl font-bold">◆</span>
                            <span className="text-gray-500 uppercase tracking-widest text-xs md:text-sm font-semibold">
                                Miami, Florida Hormone Replacement Therapy
                            </span>
                        </div>

                        {/* Main Headings */}
                        <div className="space-y-1">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E3192] leading-tight">
                                Hormone Therapy
                            </h1>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4c49a6]">
                                For Women
                            </h2>
                        </div>

                        {/* Paragraph Description */}
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl font-light">
                           Women face a number of hormonal fluctuations throughout the lifespan—menstruation, pregnancy, childbirth, perimenopause, and menopause—each of which can impact the delicate balance of hormonal harmony. For this reason, women benefit from monitoring their natural hormone levels as early as age 30 to establish a healthy baseline and maintain balance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                            <Link
                                to="/get-started"
                                className="bg-[#2E3192] text-white font-semibold text-center py-3.5 px-8 rounded-full shadow-md hover:bg-[#1a1c66] transition-all duration-300"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/contact-us"
                                className="border-2 border-[#2E3192] text-[#2E3192] font-semibold text-center py-3 px-8 rounded-full hover:bg-gray-50 transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Image with Decorative Elements */}
                    <div className="w-full md:w-[45%] flex justify-center order-1 md:order-2 relative">
                        {/* Main Image */}
                        <div className="relative z-10 w-full max-w-[420px] md:max-w-[480px]">
                            <img
                                src="/g2.png"
                                alt="Hormone Therapy For Men"
                                className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
                            />
                        </div>

                        {/* Optional: Design ke subtle background vectors/circles ke liye */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>
                    </div>

                </section>
            </div>


            <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto">

                    {/* ================= SECTION HEADER ================= */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2d8e]">
                            Mynuceria.com Products
                        </h2>
                    </div>

                    {/* ================= PRODUCTS GRID ================= */}
                    {/* Mobile par 1, Tablets par 2, Large screen par 4 columns automatic set honge */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                            >
                                {/* Product Image Container (Perfect square with nice rounded edges) */}
                                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 shadow-sm">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Product Title */}
                                <h3 className="text-[#1e2d8e] font-bold text-sm sm:text-base mb-3 line-clamp-1 px-1">
                                    {product.title}
                                </h3>

                                {/* Product Description */}
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[240px] px-1 mb-2">
                                    {product.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto">

                    {/* ================= 1. HOW IT WORKS HEADER ================= */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2d8e] mb-4">
                            How It Works
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>

                    {/* ================= 2. STEPS CARDS GRID ================= */}
                    {/* Mobile par 1, tablets par 2, aur desktop par 4 columns automatic banenge */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                            >
                                {/* Icon Container with subtle 3D shadow style */}
                                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-3 mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={step.icon}
                                        alt={step.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[#1e2d8e] font-bold text-sm tracking-wider uppercase mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[240px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ================= 3. WELCOME TO NUCERIA HEALTH SECTION ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Text Side */}
                        <div className="space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2d8e]">
                                Welcome to Nuceria Health
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                                At Nuceria Health, we are dedicated to providing our patients with the tools they need to feel like their young selves again. As an anti-aging wellness center, we offer a personalized approach to enhance your unique lifestyle. Depending on your desired results, we can create a wellness program for you.
                            </p>
                        </div>

                        {/* Right Logo Side */}
                        <div className="flex items-center justify-center p-4">
                            <img
                                src="/1.png"
                                alt="Nuceria Addicted to Life Logo"
                                className="w-full max-w-[450px] md:max-w-[500px] h-auto object-contain animate-pulse-slow"
                            />
                        </div>

                    </div>

                </div>
            </section>



            <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto">

                    {/* ================= HEADER SECTION ================= */}
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2d8e] mb-2">
                            Success Stories
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base font-normal">
                            To Know About Our Lawyers
                        </p>
                    </div>

                    {/* ================= TESTIMONIALS GRID ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8 pt-10">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-blue-100/80 rounded-2xl p-6 sm:p-8 pt-16 relative shadow-[0_4px_25px_rgba(30,45,142,0.03)] flex flex-col items-center text-center"
                            >
                                {/* Overlapping Rounded Image Wrapper with perfect absolute positioning */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md z-10">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Client Info (Added mt-2 to prevent any clash with the floating circle) */}
                                <div className="mt-2 w-full">
                                    <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 max-w-[250px] mx-auto">
                                        {item.role}
                                    </p>
                                </div>

                                {/* Star Ratings */}
                                <div className="flex justify-center items-center gap-1 mb-5">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Review Text with Quote Symbol */}
                                <div className="relative text-left w-full">
                                    {/* Visual Quote Marks */}
                                    <span className="absolute -left-1.5 -top-3 text-3xl font-serif text-gray-200 leading-none select-none">
                                        &ldquo;
                                    </span>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center px-2">
                                        {item.review}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <GoogleReviews/>
        </>
    );
};

export default ForWomen;