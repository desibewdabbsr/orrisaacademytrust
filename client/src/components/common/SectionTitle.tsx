import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = true, className = '' }: SectionTitleProps) => {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold text-[#1E40AF] font-['Merriweather'] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
