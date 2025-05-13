import React from 'react';
import { SectionProps } from '../../types';
import Container from '../layout/Container';

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  bgColor = 'bg-white',
  containerClassName = '',
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;