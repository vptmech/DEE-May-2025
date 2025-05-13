import React from 'react';
import Section from './layout/Section';
import { ShieldCheck, Award, Check, FileCheck } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <Section id="compliance" bgColor="bg-gradient-to-b from-neutral-100 to-white" className="text-neutral-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Certification</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          All our systems meet or exceed the relevant Australian Standards
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <ShieldCheck className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-semibold ml-3">AS5062 Compliance</h3>
          </div>
          <p className="text-white/80">
            All our fire systems meet or exceed the requirements of AS5062 for fire protection of mobile and transportable equipment.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Design verification</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Installation certification</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Commissioning tests</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FileCheck className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-semibold ml-3">AS1851 Standards</h3>
          </div>
          <p className="text-white/80">
            Our maintenance practices follow AS1851 for the routine service of fire protection systems and equipment.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Monthly inspections</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Six-monthly service</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Annual certification</span>
            </li>
          </ul>
        </div>

        <div className="bg-secondary-800/50 p-6 rounded-lg border border-secondary-700 backdrop-blur-sm md:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-semibold ml-3">Industry Certified</h3>
          </div>
          <p className="text-white/80">
            Our technicians are fully certified and regularly undergo training to maintain the highest industry standards.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Licensed technicians</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Regular skills updates</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-accent mr-2 mt-0.5" />
              <span>Industry association membership</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Compliance;