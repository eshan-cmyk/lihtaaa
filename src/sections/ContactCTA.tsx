import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/cta-bg.jpg"
          alt="Modern interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto section-padding">
        <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Glass Panel */}
          <div className="bg-white/10 backdrop-blur-xl rounded-lg p-8 lg:p-12 max-w-2xl">
            {/* Headline */}
            <h2 
              className="text-white mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Light Up<br />
              <span className="text-4xl lg:text-5xl">with</span><br />
              Stellmore
            </h2>
            
            {/* Description */}
            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8">
              Let's Shed Some Light on Your Needs! Whether you're seeking expert advice, product inquiries, or project collaborations, our team is here to brighten your journey. Reach out to us through the channels below and let's illuminate your space together.
            </p>
            
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Phone */}
              <a
                href="tel:+971525382033"
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">+971 52 538 2033</span>
              </a>
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/971525382033"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Contact on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
