import React from 'react';
import { Link } from 'react-router-dom';                 // ⬅️ added
import { services } from '../constants';
import Section from './layout/Section';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  // simple slug generator for internal links
  const slugify = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <Section id="services" bgColor="bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
          <span className="text-primary font-medium text-sm">What We Do</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6 tracking-tight">
          Our Specialised Services
        </h2>
        <p className="text-lg text-dark-500/80 max-w-2xl mx-auto">
          We provide comprehensive fire suppression and hydraulic solutions tailored to your industry needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => {
          /* ---------------- choose wrapper type ---------------- */
          const isMobileMaintenance = service.title === 'Mobile Maintenance';

          // use <a> for external link, <Link> for internal route
          const Wrapper: React.ElementType = isMobileMaintenance ? 'a' : Link;
          const wrapperProps = isMobileMaintenance
            ? {
                href: 'https://vptmechanical.com/',
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : { to: `/services/${slugify(service.title)}` };

          return (
            <Wrapper
              key={service.title}
              {...wrapperProps}
              className="bg-white rounded-2xl border border-dark-100/10 hover:shadow-lg transition-shadow"
            >
              <div className="h-full flex flex-col p-8">
                <div className="mb-6 inline-flex">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>

                {/* title + optional tag */}
                <h3 className="text-2xl font-semibold text-dark-800 mb-4 flex items-center">
                  <span>{service.title}</span>
                  {service.tag && (
                    <span className="ml-3 text-xs font-medium bg-primary text-white px-2 py-1 rounded-full">
                      {service.tag}
                    </span>
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
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
