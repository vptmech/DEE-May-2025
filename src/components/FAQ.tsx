import React, { useState } from 'react';
import Section from './layout/Section';
import { Plus, Minus } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What industries do you service?",
    answer: "We specialise in providing fire suppression and fluid solutions for mining & resources, transport, and industrial facilities. Our services are tailored to meet the unique challenges of each sector."
  },
  {
    question: "Are your systems compliant with Australian Standards?",
    answer: "Yes, all our fire suppression systems meet or exceed AS5062 requirements for mobile and transportable equipment. Our maintenance practices follow AS5062 standards for routine service of fire protection systems."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency support. Our emergency response team is available around the clock to handle critical system failures and urgent maintenance needs."
  },
  {
    question: "What types of vehicles do you service?",
    answer: "We service both heavy and light vehicles across various industries. This includes mining equipment, transport trucks, and industrial machinery, providing customised fire suppression solutions for each type."
  },
  {
    question: "How often should fire suppression systems be serviced?",
    answer: "We recommend regular maintenance following AS5062 standards, which includes monthly inspections, six-monthly detailed checks, and annual comprehensive evaluations to ensure optimal system performance."
  },
  {
    question: "What makes your fire suppression systems different?",
    answer: "Our systems are custom-designed for each application, using eco-friendly agents and advanced technology. We focus on reliability, compliance, and effectiveness while providing comprehensive support throughout the system's lifecycle."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" bgColor="bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
            <span className="text-primary font-medium text-sm">Help Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-500/80 max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg text-dark-800">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-200 overflow-hidden ${
                  openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-dark-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
