import React from 'react';
import Section from '../components/layout/Section';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { companyInfo } from '../constants';

const TermsPage: React.FC = () => {
  return (
    <Section bgColor="bg-white" className="pt-32">
      <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 mb-8">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-800 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-dark-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">1. Agreement to Terms</h2>
            <p className="text-dark-500 mb-4">
              By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">2. Services</h2>
            <p className="text-dark-500 mb-4">
              We provide fire suppression and fluid power solutions. All services are subject to our standard terms and conditions, which will be provided separately for specific engagements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">3. Intellectual Property</h2>
            <p className="text-dark-500 mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of {companyInfo.name} and is protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-dark-500 mb-4">
              We strive to provide accurate information but make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information on our website is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">5. Indemnification</h2>
            <p className="text-dark-500 mb-4">
              You agree to indemnify and hold harmless {companyInfo.name} and its employees from any claims, damages, or expenses arising from your use of our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">6. Modifications</h2>
            <p className="text-dark-500 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">7. Contact Information</h2>
            <p className="text-dark-500 mb-4">
              For any questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="text-dark-500">
              Email: {companyInfo.email}<br />
              Address: {companyInfo.address}
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default TermsPage;