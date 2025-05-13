import React from 'react';
import { industries } from '../constants';
import Section from './layout/Section';
import { ArrowUpRight } from 'lucide-react';

const Industries: React.FC = () => {
  return (
    <Section id="industries" bgColor="bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
          <span className="text-primary font-medium text-sm">Our Expertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6 tracking-tight">Industries We Serve</h2>
        <p className="text-lg text-dark-500/80 max-w-2xl mx-auto">
          Our services are tailored to your unique challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {industries.map((industry, index) => (
          <div 
            key={industry.title}
            className="bg-white rounded-2xl overflow-hidden border border-dark-100/10"
          >
            <div>
              <div className="h-72 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-dark-800 mb-3 flex items-center">
                  {industry.title}
                  <ArrowUpRight className="h-5 w-5 ml-2" />
                </h3>
                <p className="text-dark-500/80">{industry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;