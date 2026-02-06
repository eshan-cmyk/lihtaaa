import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'STORY', href: '#story' },
    { 
      name: 'PRODUCTS', 
      href: '#products',
      dropdown: [
        { name: 'Lighting', href: '#lighting' },
        { name: 'Controls', href: '#controls' },
      ]
    },
    { 
      name: 'PROJECTS', 
      href: '#projects',
      dropdown: [
        { name: 'International', href: '#international' },
        { name: 'Government', href: '#government' },
        { name: 'Office', href: '#office' },
        { name: 'Retail', href: '#retail' },
      ]
    },
    { name: 'CAREERS', href: '#careers' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="nav-link flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>
                
                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 py-2 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <a href="#home" className="flex items-center">
            <div className="text-center">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  <span className="font-semibold">S</span>
                  <span className="font-light">M</span>
                </span>
                <div className="h-8 w-px bg-gray-300 mx-1"></div>
                <div className="text-left">
                  <div className="text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Stellmore
                  </div>
                  <div className="text-[10px] tracking-wider text-gray-500 uppercase" style={{ fontFamily: 'Lato, sans-serif' }}>
                    lighting solutions
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(3).map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-up">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-medium tracking-wider uppercase text-gray-700 hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-500 hover:text-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
