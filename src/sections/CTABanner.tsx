import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/banner-cityscape.jpg"
          alt="Cityscape at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto section-padding">
        <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Headline */}
          <h2 
            className="text-white text-3xl lg:text-5xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Illuminate Your Vision with Us!
          </h2>
          
          {/* Description */}
          <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8 max-w-2xl">
            We're excited to help bring your design story to light. Whether you need advice, have questions, or require support, our team is here for you. Get in touch with us today!
          </p>
          
          {/* CTA Button */}
          <a
            href="https://wa.me/971525382033"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-black hover:bg-gray-100 group"
          >
            Contact Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
