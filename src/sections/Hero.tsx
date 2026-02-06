import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !textRef.current) return;
      const scrollY = window.scrollY;
      const parallaxValue = scrollY * 0.4;
      
      imageRef.current.style.transform = `translateY(${parallaxValue}px) scale(${1 + scrollY * 0.0002})`;
      textRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      textRef.current.style.opacity = `${1 - scrollY * 0.002}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transform: 'scale(1.1)' }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Luxury interior with spiral staircase"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="absolute bottom-0 left-0 right-0 section-padding pb-20 lg:pb-32"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            {/* Decorative line */}
            <div className="w-16 h-px bg-black mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }} />
            
            {/* Headline */}
            <h1 
              className="text-black max-w-xl animate-slide-up"
              style={{ 
                animationDelay: '0.3s',
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                lineHeight: 1.1
              }}
            >
              <span className="block">Light challenges</span>
              <span className="block">our senses</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
