import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
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

  const products = [
    {
      title: 'Lighting',
      image: '/product-lighting.jpg',
      href: '#lighting',
    },
    {
      title: 'Controls',
      image: '/product-controls.jpg',
      href: '#controls',
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <a
              key={product.title}
              href={product.href}
              className={`group relative h-[400px] lg:h-[500px] overflow-hidden transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : index === 0 
                    ? 'opacity-0 -translate-x-20' 
                    : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 
                      className="text-white text-2xl lg:text-3xl mb-2 transition-transform duration-500 group-hover:-translate-y-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                    >
                      {product.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white text-sm font-medium tracking-wider uppercase transition-all duration-300 group-hover:translate-x-2">
                    <span style={{ fontFamily: 'Lato, sans-serif' }}>View More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
