import React from 'react';
import Contact from '../components/Contact';
import Section from '../components/layout/Section';

const ContactPage: React.FC = () => {
  return (
    <>
      <Section bgColor="bg-white" className="pt-32">
        <Contact />
      </Section>
    </>
  );
};

export default ContactPage;