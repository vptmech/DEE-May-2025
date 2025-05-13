export type NavItem = {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
    description?: string;
  }[];
};

export type Service = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  tag?: string;
  features: string[];
};

export type Industry = {
  title: string;
  description: string;
  image: string;
  altText: string;
};

export type Certification = {
  title: string;
  logo: string;
  description: string;
};

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
};

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
};

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
  containerClassName?: string;
};

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export type ServiceFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};