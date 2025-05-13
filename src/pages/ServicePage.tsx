import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../constants';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { id } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id);

  if (!service) {
    return (
      <Section bgColor="bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button href="/" variant="primary">Return Home</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section bgColor="bg-white" className="pt-32">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <service.icon className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-dark-800">{service.title}</h1>
          </div>
          
          <p className="text-xl text-dark-500 mb-12">{service.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                    <span className="text-dark-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Enhanced safety and protection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Compliance with industry standards</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Reduced downtime and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Expert installation and support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-dark-500 mb-6">
              Contact our team to discuss your specific requirements and how we can help protect your assets.
            </p>
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServicePage;