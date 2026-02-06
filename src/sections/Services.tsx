import { useEffect, useRef, useState } from 'react';
import { Headphones, Clock, Shield, ClipboardCheck, Lightbulb, Wrench } from 'lucide-react';

const Services = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Our team is well-trained to handle all product and service inquiries, including product specifications, installation, and troubleshooting.',
    },
    {
      icon: Clock,
      title: 'Time Response',
      description: 'Strive to answer customer inquiries within 24 hours for maximum satisfaction. Faster responses lead to happier customers.',
    },
    {
      icon: Shield,
      title: 'Privacy Policy',
      description: 'We prioritize your trust by maintaining the highest standards for secure transactions and customer information privacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Assistance',
      description: 'We offers expert supervision and detailed site surveys and installation guidelines with technical supports.',
    },
    {
      icon: Lightbulb,
      title: 'Solution-Oriented',
      description: 'Prioritize swift issue resolution by offering suitable solutions such as replacements, or repairs.',
    },
    {
      icon: Wrench,
      title: 'After Sales Services',
      description: 'We offer professional AMC services during the guarantee period, providing onsite inspection, cleaning, and testing.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto section-padding">
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-black"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 lg:p-8 border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-gray-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index % 3) * 80 + Math.floor(index / 3) * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-5 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-8 h-8 text-black stroke-[1.5]" />
              </div>
              
              {/* Title */}
              <h3 
                className="text-black text-lg mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
