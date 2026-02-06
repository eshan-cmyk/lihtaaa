import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
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
      id="story"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Decorative line */}
            <div className="w-16 h-px bg-black mb-8" />
            
            {/* Headline */}
            <h2 
              className="text-black mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Light challenges<br />our senses
            </h2>
            
            {/* Description */}
            <p className="text-body text-base leading-relaxed mb-8 max-w-lg">
              At Stellmore Lighting, we believe in more than just illuminating spaces; we strive to infuse brilliance into every corner. As a premier lighting solution company, we specialize in crafting sophisticated, innovative, and energy-efficient lighting solutions that transform environments and elevate experiences.
            </p>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="btn-outline group"
            >
              Reach Out to Us Today
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Images */}
          <div className={`relative h-[500px] lg:h-[600px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Image 1 - Tall */}
            <div className="absolute top-0 right-0 w-[65%] h-[75%] overflow-hidden shadow-xl image-zoom">
              <img
                src="/about-1.jpg"
                alt="Luxury chandelier in elegant room"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image 2 - Wide (overlapping) */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden shadow-xl image-zoom z-10">
              <img
                src="/about-2.jpg"
                alt="Modern interior with pendant lights"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gray-200 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
