import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'International\nProjects',
      image: '/project-international.jpg',
      href: '#international',
    },
    {
      title: 'Government\nProjects',
      image: '/project-government.jpg',
      href: '#government',
    },
    {
      title: 'Office\nProjects',
      image: '/project-office.jpg',
      href: '#office',
    },
    {
      title: 'Retail\nProjects',
      image: '/project-retail.jpg',
      href: '#retail',
    },
    {
      title: 'Food & Beverage\nProjects',
      image: '/project-fnb.jpg',
      href: '#fnb',
    },
    {
      title: 'Facade\nProjects',
      image: '/project-facade.jpg',
      href: '#facade',
    },
  ];

  return (
    <section
      id="projects"
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
            Illuminating Lives, One Light at a Time:<br />
            Our Brand Shines Bright.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              className={`group relative h-[280px] lg:h-[350px] overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${(index % 3) * 100 + Math.floor(index / 3) * 200}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title.replace('\n', ' ')}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/60" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 
                  className="text-white text-xl lg:text-2xl mb-4 whitespace-pre-line transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                >
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-white text-xs font-medium tracking-wider uppercase opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span style={{ fontFamily: 'Lato, sans-serif' }}>View More</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
