import { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <section className="w-full min-h-screen bg-gray-50/50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      {/* Main card wrapper with beautiful soft shadow */}
      <div className="max-w-6xl w-full bg-white rounded-[32px] shadow-[0_10px_50px_rgba(30,45,142,0.05)] border border-gray-100 p-6 sm:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT SIDE: FORM & CONTACT DETAILS ================= */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-400 text-sm">Fill out this form to become BFD Certified</p>
          </div>

          {/* Alert Status Banner */}
          {status && (
            <div className={`p-4 rounded-xl text-sm font-medium border ${
              status.includes('successfully')
                ? 'bg-green-50 border-green-200 text-green-700'
                : 'bg-red-50 border-red-200 text-red-700'
            }`}>
              {status}
            </div>
          )}

          {/* Formspree Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1e2d8e] focus:border-transparent text-gray-700 placeholder-gray-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1e2d8e] focus:border-transparent text-gray-700 placeholder-gray-400 transition"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1e2d8e] focus:border-transparent text-gray-700 placeholder-gray-400 transition"
            />
            
            <select
              name="service"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1e2d8e] focus:border-transparent text-gray-500 transition"
              defaultValue=""
            >
              <option value="" disabled>Service</option>
              <option value="lip-fillers">Lip Fillers</option>
              <option value="consultation">Free Consultation</option>
              <option value="lab-work">Lab Work</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1e2d8e] focus:border-transparent text-gray-700 placeholder-gray-400 transition resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#006097] hover:bg-[#004f7c] text-white font-bold tracking-wider text-xs py-4 rounded-xl transition duration-300 shadow-md uppercase disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100 text-xs sm:text-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gray-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider text-[11px] mb-1">Phone</h4>
                  <a href="tel:3052656226" className="text-sky-600 hover:underline">(305) 265-6226</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gray-500 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider text-[11px] mb-1">Email</h4>
                  <a href="mailto:hello@mynuceria.com" className="text-sky-600 hover:underline">hello@mynuceria.com</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gray-500 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 uppercase tracking-wider text-[11px] mb-1">Address</h4>
                <p className="text-gray-500 leading-relaxed">
                  7500 NW 25th St. Suite 106<br />
                  Miami, FL 33122<br />
                  <span className="text-gray-400 text-xs">(305) 398-4370</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: MAP WITH EXACT BLUE FRAME ================= */}
        <div className="lg:col-span-6 flex justify-center relative select-none">
          {/* Blue Corner Frame decoration matches image_990040.png layout */}
          <div className="relative p-6 w-full max-w-[450px] aspect-square lg:aspect-[4/4.5] flex items-center justify-center">
            
            {/* Top-Right and Bottom-Right thick blue frame curves */}
            <div className="absolute right-0 top-0 w-[80%] h-[80%] border-t-[18px] border-r-[18px] border-[#1e2d8e] rounded-tr-[40px] pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-[80%] h-[80%] border-b-[18px] border-r-[18px] border-[#1e2d8e] rounded-br-[40px] pointer-events-none"></div>

            {/* Main map.png Container inside the frame */}
            <div className="w-[90%] h-[90%] z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-150">
              <img 
                src="/map.png" 
                alt="Office Map Location" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}