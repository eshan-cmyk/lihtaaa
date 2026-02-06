import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Target, Settings } from 'lucide-react';

const MissionVision = () => {
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

  const cards = [
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'Vision is to be the beacon of innovation and excellence in the lighting industry. We envision a future where our cutting-edge lighting solutions illuminate every corner of the globe, enriching lives, enhancing productivity, and fostering sustainable development.',
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Through dedication to excellence and continuous innovation, we aim to be the leading light solution provider, guiding our customers towards a brighter and more sustainable future.',
    },
    {
      icon: Settings,
      title: 'Process',
      description: 'With expert installation, thorough testing, and ongoing support, we guarantee superior quality and customer satisfaction every step of the way.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto section-padding">
        {/* Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-black mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Illuminate Your World with Stellmore Lighting
          </h2>
          <p className="text-body text-base leading-relaxed mb-4">
            With a team of seasoned professionals and experts in lighting design, engineering, and installation, we stand at the forefront of the industry, continuously pushing the boundaries of what's possible.
          </p>
          <p className="text-body text-base leading-relaxed">
            Our commitment to excellence, creativity, and customer satisfaction is at the heart of everything we do.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group p-8 lg:p-10 border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-black ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <card.icon className="w-10 h-10 text-black stroke-[1.5]" />
              </div>
              
              {/* Title */}
              <h3 
                className="text-black mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
              >
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-body text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
