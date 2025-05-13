import React from 'react';
import Section from '../components/layout/Section';
import { ShieldCheck, Award, FileCheck, Check } from 'lucide-react';
import Button from '../components/ui/Button';

const CompliancePage: React.FC = () => {
  return (
    <>
      <Section bgColor="bg-white" className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-dark-800 mb-4">Compliance & Certification</h1>
          <p className="text-xl text-dark-500 mb-12">
            We maintain the highest standards of compliance and certification in the fire protection industry.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-semibold">AS5062 Compliance</h2>
              </div>
              <p className="text-dark-500 mb-6">
                Our fire suppression systems are designed, installed, and maintained in accordance with AS5062 standards for mobile and transportable equipment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Design Verification</h3>
                    <p className="text-dark-500">Comprehensive system design review and approval process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Installation Certification</h3>
                    <p className="text-dark-500">Professional installation by certified technicians</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Testing & Commissioning</h3>
                    <p className="text-dark-500">Rigorous testing procedures and documentation</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <FileCheck className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-semibold">AS1851 Standards</h2>
              </div>
              <p className="text-dark-500 mb-6">
                Our maintenance programs strictly follow AS1851 requirements for the routine service of fire protection systems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Monthly Inspections</h3>
                    <p className="text-dark-500">Regular visual inspections and basic testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Six-Monthly Service</h3>
                    <p className="text-dark-500">Detailed system checks and component testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Annual Certification</h3>
                    <p className="text-dark-500">Comprehensive system evaluation and certification</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-2xl font-semibold">Industry Certification</h2>
              </div>
              <p className="text-dark-500 mb-6">
                Our team maintains the highest level of industry certification and training.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Licensed Technicians</h3>
                    <p className="text-dark-500">All technicians hold current industry licenses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Ongoing Training</h3>
                    <p className="text-dark-500">Regular skills updates and certification renewal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Industry Memberships</h3>
                    <p className="text-dark-500">Active participation in industry associations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Compliance Documentation?</h2>
            <p className="text-dark-500 mb-6">
              Contact us to request compliance certificates or discuss your certification requirements.
            </p>
            <Button href="/contact" variant="primary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CompliancePage;