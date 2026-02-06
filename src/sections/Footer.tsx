import { useState } from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#story' },
    { name: 'Lighting', href: '#lighting' },
    { name: 'Controls', href: '#controls' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const projectLinks = [
    { name: 'International', href: '#international' },
    { name: 'Government', href: '#government' },
    { name: 'Retail', href: '#retail' },
    { name: 'Food & Beverage', href: '#fnb' },
    { name: 'Healthcare', href: '#healthcare' },
    { name: 'Office Projects', href: '#office' },
    { name: 'Residential', href: '#residential' },
    { name: 'Automation', href: '#automation' },
    { name: 'Facade', href: '#facade' },
    { name: 'Sports & Entertainment', href: '#sports' },
    { name: 'Landscaping', href: '#landscaping' },
    { name: 'Industrial', href: '#industrial' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light tracking-tight text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  <span className="font-semibold">S</span>
                  <span className="font-light">M</span>
                </span>
                <div className="h-6 w-px bg-gray-600 mx-1"></div>
                <div>
                  <div className="text-xs font-medium tracking-widest uppercase text-white" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Stellmore
                  </div>
                  <div className="text-[9px] tracking-wider text-gray-400 uppercase" style={{ fontFamily: 'Lato, sans-serif' }}>
                    lighting solutions
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the brilliance of Stellmore Lighting and discover how we can illuminate your world with style, innovation, and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-white text-sm font-medium tracking-wider uppercase mb-6"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 
              className="text-white text-sm font-medium tracking-wider uppercase mb-6"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Projects
            </h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 
              className="text-white text-sm font-medium tracking-wider uppercase mb-2"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Subscribe Now
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Don't miss our future updates!
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Get Subscribed Today!
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-700 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              ©2026 stellmore.com | All Rights Reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
