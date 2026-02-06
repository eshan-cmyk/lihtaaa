import { useEffect, useRef, useState } from 'react';

const BrandTagline = () => {
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = ['Illuminating', 'Lives,', 'One', 'Light', 'at', 'a', 'Time:', 'Our', 'Brand', 'Shines', 'Bright.'];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-[1400px] mx-auto section-padding text-center">
        <h2 
          className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, lineHeight: 1.3 }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-[0.3em] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default BrandTagline;
