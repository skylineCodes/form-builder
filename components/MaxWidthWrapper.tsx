import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
  heroRef,
}: {
  className?: string;
  heroRef?: any;
  children: ReactNode;
}) => {
  return (
    <div
      ref={heroRef}
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper
