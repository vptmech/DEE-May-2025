import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { industries } from '../constants';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const IndustryPage: React.FC = () => {
  const { id } = useParams();
  const industry = industries.find(i => i.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id);

  if (!industry) {
    return (
      <Section bgColor="bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry not found</h1>
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
          <div className="rounded-xl overflow-hidden mb-8">
            <img 
              src={industry.image} 
              alt={industry.altText}
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-dark-800 mb-4">{industry.title}</h1>
          <p className="text-xl text-dark-500 mb-12">{industry.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Industry Challenges</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Complex operational environments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">High-risk equipment and processes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Strict regulatory requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">24/7 operational demands</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Customized fire suppression systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Regular maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Compliance documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                  <span className="text-dark-600">Emergency response planning</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Get Industry-Specific Solutions</h2>
            <p className="text-dark-500 mb-6">
              Let us help you develop a comprehensive fire protection strategy tailored to your industry needs.
            </p>
            <Button href="/contact" variant="primary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default IndustryPage;