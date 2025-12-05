import React from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center bg-neutral-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1643116/pexels-photo-1643116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <p className="text-primary font-medium text-sm">Part of VPT Mechanical Solutions</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Professional Fire Suppression & Fluid Solutions
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl font-light">
                AS5062 compliant fire suppression systems and expert fluid power solutions for mining, transport, and industrial facilities. Available 24/7 with nationwide coverage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" variant="primary" size="lg" className="group">
                Get Expert Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                href="#services" 
                variant="outline" 
                size="lg" 
                className="text-white border-white/20"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">15+ Years</p>
                <p className="text-white/70">Industry Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-white/70">Emergency Support</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">AS5062</p>
                <p className="text-white/70">Compliant Systems</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              <img
                src="public/hero-section.png"
                alt="Industrial fire suppression technician inspecting equipment"
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
