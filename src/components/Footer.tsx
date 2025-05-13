import React from 'react';
import Container from './layout/Container';
import { companyInfo } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    // If it's a hash link on the home page
    if (path.startsWith('#') && window.location.pathname === '/') {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For other pages, navigate and scroll to top
      window.location.href = path;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/DEE Final Logo.png" 
              alt="DEE" 
              className="h-15 mb-4"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/200x80/transparent/FFFFFF?text=DEE&font=montserrat-bold&color=F26522,0099D8&flame=0099D8,F26522';
              }}
            />
            <p className="text-gray-300 mb-4">
              Professional fire suppression solutions designed for safety, reliability, and compliance.
            </p>
            <p className="text-sm text-gray-400">
              Part of VPT Mechanical Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('#services')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('#industries')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('#compliance')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('#contact')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/services/hydraulic-fire-suppression')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Hydraulic & Fire Suppression
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/fluid-power-lubrication')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Fluid Power & Lubrication
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/safety-testing')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Safety & Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services/mobile-maintenance')}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Mobile Maintenance
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <button onClick={() => handleNavigation('/privacy')} className="text-gray-400 hover:text-gray-300 text-sm">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation('/terms')} className="text-gray-400 hover:text-gray-300 text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
