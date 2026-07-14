import { useState } from 'react';
import { Star, User, Phone, Mail, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import GoogleReviews from '../Components/GoogleReviews';

export default function Home() {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
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
    // Exact handleSubmit logic provided by you (integrated with UI state)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        const form = e.target;
        const data = new FormData(form);

        data.append('_replyto', 'hasanlodhi444@gmail.com');

        try {
            const response = await fetch('https://formspree.io/f/xojzbjdr', {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                form.reset();
            } else {
                setStatus('Oops! Something went wrong.');
            }
        } catch (error) {
            setStatus('Oops! Something went wrong.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const logos = [
        { src: '/i1.png', alt: 'MSNBC' },
        { src: '/i2.png', alt: 'CNN' },
        { src: '/i3.png', alt: 'Fox News' },
        { src: '/i4.png', alt: 'CBS' },
        { src: '/i5.png', alt: 'BuzzFeed' },
    ];
    const sections = [
        {
            id: 1,
            title: "HRT for Men",
            description: "As a result of aging, disease or lifestyle your hormone levels will begin to decline, over time you will experience unwanted symptoms of hormonal imbalance such as adrenal fatigue, thyroid disorder, peri-menopause, menopause, male andropause, low testosterone, estrogen levels, or progesterone deficiencies—just to name a few. With the help of Bio-Identical Hormone Therapy you will restore your levels back to your youthful years.",
            image: "/g1.png",
            reverse: false,
        },
        {
            id: 2,
            title: "HRT for Women",
            description: "Women face a number of hormonal fluctuations throughout the lifespan—menstruation, pregnancy, childbirth, perimenopause, and menopause—each of which can impact the delicate balance of hormonal harmony. For this reason, women benefit from monitoring their natural hormone levels as early as age 30 to establish a healthy baseline and maintain balance. Low testosterone levels in women (and even high testosterone levels in women!) have been shown to affect a multitude of other natural hormones in the body. Through lifestyle changes and bioidentical hormone replacement therapy, thyroid symptoms in women, testosterone levels in women, and other hormone imbalances in women can be alleviated.",
            image: "/g2.png",
            reverse: true, // Desktop par text left side aur image right side show hogi
        },
        {
            id: 3,
            title: "Fat Loss Protocols",
            description: "Weight loss can be more than just difficult — it can even feel impossible. If you have tried your hand at fad diets before, you probably already know what we mean. Luckily, we are here to help make weight loss an attainable goal. Weight loss programs are available at Nuceria Health in Miami and the surrounding area. We can help you look and feel your best. Call us today at 786-724-9560 to schedule an appointment or learn more about our services.",
            image: "/g3.png",
            reverse: false,
        }
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
            <section className="w-full min-h-[85vh] flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl bg-white min-h-[580px]">

                    {/* LEFT BLUE SIDE */}
                    <div className="lg:col-span-7 bg-gradient-to-br from-[#1b2668] to-[#1e2d8e] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">

                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>

                        <div className="z-10">
                            <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase block mb-3">
                                Trusted by families nationwide
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                                Lip Fillers
                            </h1>

                            <p className="text-lg sm:text-xl text-blue-100 font-medium mb-4">
                                Plump your lips for that perfect pout
                            </p>

                            <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed mb-8">
                                Serving the South Florida community with personalized insurance solutions since 2005.
                            </p>

                            <button className="bg-white hover:bg-gray-100 text-[#1e2d8e] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md">
                                Get a Quote
                            </button>
                        </div>

                        {/* Slider Controllers */}
                        <div className="flex gap-3 mt-12 lg:mt-0 z-10">
                            <button type="button" className="w-10 h-10 rounded-full border border-gray-400/50 flex items-center justify-center hover:bg-white hover:text-[#1e2d8e] transition duration-300">
                                <ChevronLeft size={18} />
                            </button>
                            <button type="button" className="w-10 h-10 rounded-full border border-gray-400/50 flex items-center justify-center hover:bg-white hover:text-[#1e2d8e] transition duration-300">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT WHITE SIDE (Interactive Form with exact design & Formspree Submit) */}
                    <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-white">

                        {/* Brand Background Watermark Logo */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                            <img src="/1.png" alt="watermark" className="w-4/5 object-contain" />
                        </div>

                        <div className="z-10 max-w-sm w-full mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-1">
                                Schedule your Free
                            </h2>
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center mb-8">
                                Consultation today
                            </h3>

                            {/* Status Messages */}
                            {status && (
                                <div className={`mb-6 p-3 border rounded-xl text-sm text-center font-medium ${status.includes('successfully')
                                    ? 'bg-green-50 border-green-200 text-green-700'
                                    : 'bg-red-50 border-red-200 text-red-700'
                                    }`}>
                                    {status}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Name Input */}
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-gray-400">
                                        <User size={18} />
                                    </span>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="-----"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition"
                                    />
                                </div>

                                {/* Mobile Input */}
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-gray-400">
                                        <Phone size={18} />
                                    </span>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        required
                                        placeholder="Mobile"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-gray-400">
                                        <Mail size={18} />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="E-Mail"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition"
                                    />
                                </div>

                                {/* Service Input */}
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-gray-400">
                                        <Headphones size={18} />
                                    </span>
                                    <input
                                        type="text"
                                        name="service"
                                        required
                                        placeholder="Service"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#1e2d8e] hover:bg-[#1b2668] text-white font-bold tracking-widest text-sm py-4 rounded-xl transition duration-300 shadow-lg disabled:bg-gray-400 flex items-center justify-center"
                                >
                                    {isSubmitting ? 'SENDING...' : 'URGENT'}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-6 sm:py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



                    {/* Logos Bordered Flex Box Layout */}
                    <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center border border-gray-300 rounded-sm overflow-hidden bg-white max-w-4xl mx-auto">
                        {logos.map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-1 min-w-[120px] sm:min-w-0 flex items-center justify-center p-4 sm:p-5 border-b md:border-b-0 border-r last:border-r-0 border-gray-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-8 sm:max-h-10 w-auto object-contain"
                                />
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

            <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
                <div className="space-y-20 md:space-y-28">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className={`flex flex-col items-center justify-between gap-8 md:gap-16 ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full max-w-[450px] md:max-w-[500px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                                />
                            </div>

                            {/* Text Content Container */}
                            <div className="w-full md:w-1/2 space-y-4 text-left px-2 md:px-0">
                                <h2 className="text-2xl md:text-3xl font-semibold text-[#4c49a6]">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
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

            <GoogleReviews />
        </>
    );
}