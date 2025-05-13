import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { navigation } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isSubPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleNavigation = (path: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    setActiveDropdown(null);

    // If it's a hash link on the home page
    if (path.startsWith('#') && location.pathname === '/') {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For other pages, navigate and scroll to top
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-transparent backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center relative">
          <div className="absolute left-0">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={() => handleNavigation('/')}
              className="flex items-center"
            >
              <img 
                src="/DEE Final Logo.png" 
                alt="DEE" 
                className={`transition-all duration-300 ${isScrolled ? 'h-15' : 'h-17'}`}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/200x80/transparent/FFFFFF?text=DEE&font=montserrat-bold&color=F26522,0099D8&flame=0099D8,F26522';
                }}
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      className={`text-sm font-medium flex items-center transition-colors duration-300 ${
                        isSubPage ? 'text-primary hover:text-primary-600' : isScrolled ? 'text-primary hover:text-primary-600' : 'text-white hover:text-white/80'
                      }`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`text-sm font-medium flex items-center transition-colors duration-300 ${
                        isSubPage ? 'text-primary hover:text-primary-600' : isScrolled ? 'text-primary hover:text-primary-600' : 'text-white hover:text-white/80'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                  
                  {item.children && (
                    <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-dark-900/95 backdrop-blur-sm border border-dark-800 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left invisible group-hover:visible">
                      <div className="py-2" role="menu" aria-orientation="vertical">
                        {item.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNavigation(child.href)}
                            className="block w-full text-left px-4 py-2.5 text-sm text-white/80 hover:bg-dark-800 hover:text-primary transition-colors duration-200"
                            role="menuitem"
                          >
                            <span className="font-medium">{child.name}</span>
                            {child.description && (
                              <p className="mt-1 text-xs text-dark-400">{child.description}</p>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavigation('/contact')}
              variant="primary"
              size="sm"
              className="group"
            >
              Contact Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="absolute right-4">
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isSubPage ? 'text-primary hover:text-primary-600' : isScrolled ? 'text-primary hover:text-primary-600' : 'text-white hover:text-white/80'
              } hover:bg-white/10`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark-900/95 backdrop-blur-sm border-t border-dark-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 space-y-1">
              {/* Contact Button for Mobile */}
              <div className="px-4 py-2 mb-4">
                <Button
                  onClick={() => handleNavigation('/contact')}
                  variant="primary"
                  className="w-full group"
                >
                  Contact Us
                </Button>
              </div>
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <button
                    className={`w-full flex items-center justify-between text-left px-4 py-2 ${
                      isSubPage ? 'text-primary hover:text-primary-600' : 'text-white hover:text-primary'
                    } font-medium text-sm`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.children && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 opacity-50 ${
                          activeDropdown === item.name ? 'transform rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {item.children && activeDropdown === item.name && (
                    <div className="mt-1 space-y-1 pl-8 border-l border-dark-800">
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleNavigation(child.href)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            isSubPage ? 'text-primary hover:text-primary-600' : 'text-white/80 hover:text-primary'
                          } transition-colors duration-200`}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
