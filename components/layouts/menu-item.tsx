'use client';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

const menuItemVariants = cva(
  'inline-flex text-mute-foreground items-center min-h-[2.75rem] rounded-lg leading-none transition-colors text-sm font-medium w-full mb-1',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-muted-foreground  hover:bg-foreground/5',
        active: 'bg-primary/20 text-primary fill hover:bg-primary/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface MenuItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  path: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  path,
  className,
  ...props
}) => {
  const pathName = usePathname();
  const isActive = pathName.includes(path);

  const activeStyles = isActive ? menuItemVariants({ variant: 'active' }) : '';
  return (
    <Link
      href={path}
      className={cn(
        menuItemVariants({ variant: 'default' }),
        activeStyles,
        className,
      )}
      {...props}
    >
      <div className='flex items-center px-4'>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
