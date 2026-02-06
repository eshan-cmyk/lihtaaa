import { useEffect, useRef, useState } from 'react';

const Partners = () => {
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

  const partners = [
    { name: 'OSRAM', color: '#E4002B' },
    { name: 'VEROLITE', color: '#00A0B0' },
    { name: 'PHILIPS', color: '#0066CC' },
    { name: 'TRIDONIC', color: '#E4002B' },
    { name: 'PHILIPS dynalite', color: '#0066CC' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-16 bg-white border-t border-b border-gray-100"
    >
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`transition-all duration-500 hover:scale-110 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                filter: 'grayscale(100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.color = partner.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.color = '#666666';
              }}
            >
              <span 
                className="text-xl lg:text-2xl font-bold tracking-wider transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
