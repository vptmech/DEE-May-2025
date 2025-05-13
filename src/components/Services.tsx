import React from 'react';
import { services } from '../constants';
import Section from './layout/Section';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" bgColor="bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
          <span className="text-primary font-medium text-sm">What We Do</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6 tracking-tight">Our Specialised Services</h2>
        <p className="text-lg text-dark-500/80 max-w-2xl mx-auto">
          We provide comprehensive fire suppression and hydraulic solutions tailored to your industry needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.title}
            className="bg-white rounded-2xl border border-dark-100/10"
          >
            <div className="h-full flex flex-col p-8">
              <div className="mb-6 inline-flex">
                <service.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-800 mb-4 flex items-center">
                <span>{service.title}</span>
                {service.tag && (
                  <a 
                    href="https://vptmechanical.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-xs font-medium bg-primary text-white px-2 py-1 rounded-full"
                  >
                    {service.tag}
                  </a>
                )}
                <ArrowUpRight className="h-5 w-5 ml-2" />
              </h3>
              <p className="text-dark-500/80 mb-8">{service.description}</p>
              <ul className="mt-auto space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3"></span>
                    <span className="text-dark-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;