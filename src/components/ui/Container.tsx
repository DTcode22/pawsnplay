import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom' | 'full';
}

export const Container = ({
  children,
  className,
  size = 'lg',
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    custom: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto', sizes[size], className)}>{children}</div>
  );
};
