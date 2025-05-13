import React from 'react';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { Droplets, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FluidPowerPage: React.FC = () => {
  return (
    <>
      <Section bgColor="bg-white" className="pt-32">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Droplets className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-dark-800">Fluid Power & Lubrication</h1>
          </div>
          
          <p className="text-xl text-dark-500 mb-12">
            Comprehensive hydraulic system solutions and lubrication services to maximize equipment performance and reliability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hydraulic System Design</h3>
                    <p className="text-dark-500">Custom solutions for your specific requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Oil Analysis & Testing</h3>
                    <p className="text-dark-500">Comprehensive fluid analysis and monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Grease Lubrication Systems</h3>
                    <p className="text-dark-500">Automated and manual greasing solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Performance Optimization</h3>
                    <p className="text-dark-500">Efficiency improvements and upgrades</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">System Maintenance</h3>
                    <p className="text-dark-500">Comprehensive preventive maintenance programs</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Industries Served</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Mining & Resources</h3>
                    <p className="text-dark-500">Heavy equipment and processing plants</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Manufacturing</h3>
                    <p className="text-dark-500">Production line equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Construction</h3>
                    <p className="text-dark-500">Mobile and stationary equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Marine</h3>
                    <p className="text-dark-500">Vessel systems and equipment</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Our Fluid Power Services?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">Expert Knowledge</h3>
                <p className="text-dark-500 mb-4">
                  Our team brings decades of experience in hydraulic systems, oil analysis, and grease lubrication across multiple industries.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Quality Assurance</h3>
                <p className="text-dark-500 mb-4">
                  We use only high-quality components and follow strict quality control procedures.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Preventive Maintenance</h3>
                <p className="text-dark-500 mb-4">
                  Regular maintenance programs to prevent costly breakdowns and extend equipment life.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">24/7 Support</h3>
                <p className="text-dark-500 mb-4">
                  Emergency response team available for critical system failures.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Get Expert Fluid Power Solutions</h2>
            <p className="text-dark-500 mb-6">
              Contact us to discuss your hydraulic system needs and how we can help optimize your equipment performance.
            </p>
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FluidPowerPage;