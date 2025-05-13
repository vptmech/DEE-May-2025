import { NavItem, Service, Industry, Certification } from './types';
import { Flame, Truck, ShieldCheck, Wrench, Activity, Zap, Droplets } from 'lucide-react';

export const navigation: NavItem[] = [
  {
    name: 'Services',
    href: '/services',
    children: [
      {
        name: 'Hydraulic & Fire Suppression',
        href: '/services/hydraulic-fire-suppression',
        description: 'System design, installation and maintenance for all industries.'
      },
      {
        name: 'Fluid Power & Lubrication',
        href: '/services/fluid-power-lubrication',
        description: 'Complete hydraulic system solutions and lubrication services.'
      },
      {
        name: 'Safety & Testing',
        href: '/services/safety-testing',
        description: 'System integrity checks and certification services.'
      },
      {
        name: 'Mobile Maintenance',
        href: '/services/mobile-maintenance',
        description: 'On-site servicing and support for remote locations.'
      }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      {
        name: 'Mining & Resources',
        href: '/industries/mining-resources',
      },
      {
        name: 'Transport',
        href: '/industries/transport',
      },
      {
        name: 'Industrial Facilities',
        href: '/industries/industrial-facilities',
      }
    ]
  },
  {
    name: 'Compliance',
    href: '/compliance',
  },
  {
    name: 'Contact',
    href: '/contact',
  }
];

export const services: Service[] = [
  {
    title: 'Hydraulic & Fire Suppression',
    icon: Flame,
    description: 'Professional system design and installation for all industries with a focus on safety and reliability.',
    features: [
      'System design & installation',
      'Heavy vehicle solutions',
      'Light vehicle solutions',
      'Mine-spec compliance',
      'Eco-friendly agents'
    ]
  },
  {
    title: 'Fluid Power & Lubrication',
    icon: Droplets,
    description: 'Comprehensive hydraulic system solutions and lubrication services for optimal equipment performance.',
    features: [
      'Hydraulic system design',
      'Oil analysis & testing',
      'Grease lubrication systems',
      'System optimisation',
      'Preventive maintenance'
    ]
  },
  {
    title: 'Safety & Testing',
    icon: ShieldCheck,
    description: 'Comprehensive testing and certification services to ensure your systems meet all regulatory requirements.',
    features: [
      'System integrity checks',
      'Detection integration',
      'Certification services',
      'Fault diagnosis'
    ]
  },
  {
    title: 'Mobile Maintenance',
    icon: Truck,
    description: 'Our mobile teams provide on-site servicing and support for even the most remote locations. ',
    tag: 'VPT',
    features: [
      'On-site servicing',
      'Remote location support',
      'Preventative maintenance',
      'Compliance tracking'
    ]
  }
];

export const industries: Industry[] = [
  {
    title: 'Mining & Resources',
    description: 'Specialised fire suppression systems for heavy mining equipment and facilities, designed to withstand harsh environments.',
    image: '/ex37.jpg',
    altText: 'Mining equipment with fire suppression systems'
  },
  {
    title: 'Transport',
    description: 'Fleet protection systems for trucks and loaders, minimising downtime and risk.',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Transport vehicles with fire safety equipment'
  },
  {
    title: 'Industrial Facilities',
    description: 'Comprehensive fire protection for manufacturing plants, warehouses, and processing facilities.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Industrial facility with fire protection equipment'
  }
];

export const certifications: Certification[] = [
  {
    title: 'AS5062 Compliance',
    logo: 'standards-logo',
    description: 'All our fire systems meet or exceed the requirements of AS5062 for fire protection of mobile and transportable equipment.'
  },
  {
    title: 'AS1851 Standards',
    logo: 'standards-logo',
    description: 'Our maintenance practices follow AS1851 for the routine service of fire protection systems and equipment.'
  },
  {
    title: 'Industry Certified',
    logo: 'certified-logo',
    description: 'Our technicians are fully certified and regularly undergo training to maintain the highest industry standards.'
  }
];

export const serviceOptions = [
  'Fire Suppression Installation',
  'Fluid Power & Lubrication',
  'Grease Lubrication Systems',
  'System Maintenance',
  'Compliance Inspection',
  'Emergency Repairs',
  'Other'
];

export const companyInfo = {
  name: 'DEE Fire & Fluid Solutions',
  address: 'Suite 1 113 Dugan Street',
  phone: '1300 DEE FIRE (333 3473)',
  email: 'admin@deefiresolutions.com.au',
  hours: 'Monday-Friday: 7am-5pm',
  emergencyPhone: '1800 EMERGENCY',
  social: {
    facebook: 'https://facebook.com/deefireandfluidsolutions',
    linkedin: 'https://linkedin.com/company/dee-fire-fluid-solutions',
    twitter: 'https://twitter.com/deefiresolutions',
  }
};
