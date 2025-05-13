import React from 'react';
import Section from '../components/layout/Section';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { companyInfo } from '../constants';

const PrivacyPage: React.FC = () => {
  return (
    <Section bgColor="bg-white" className="pt-32">
      <Link to="/" className="inline-flex items-center text-primary hover:text-primary-600 mb-8">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-800 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-dark-500 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">1. Introduction</h2>
            <p className="text-dark-500 mb-4">
              {companyInfo.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">2. Information We Collect</h2>
            <p className="text-dark-500 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 text-dark-500">
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Service inquiries and requirements</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-dark-500 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-dark-500">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and updates</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">4. Information Sharing</h2>
            <p className="text-dark-500 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">5. Security</h2>
            <p className="text-dark-500 mb-4">
              We implement appropriate technical and organizational measures to maintain the security of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-800 mb-4">6. Contact Us</h2>
            <p className="text-dark-500 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPage;