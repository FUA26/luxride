import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

export const baseButtonVariants = cva(
  'font-medium text-center relative whitespace-nowrap align-middle outline-none inline-flex items-center justify-center',
  {
    variants: {
      size: {
        xs: 'text-xs h-6 min-w-6 px-2',
        sm: 'text-sm h-8 min-w-8 px-3',
        md: 'text-base h-10 min-w-10 px-4',
        lg: 'text-lg h-12 min-w-12 px-6',
        xl: 'text-xl h-14 min-w-14 px-8',
      },
      rounded: {
        none: 'rounded-none',
        md: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'md',
      rounded: 'md',
    },
  },
);

const outlineVariants = cva('border-2', {
  variants: {
    variant: {
      default:
        'bg-transparant text-foreground  hover:bg-foreground/10 border-foreground/30 hover:border-foreground/60',
      primary: 'text-primary hover:bg-primary-lighter border-primary-light',
      secondary:
        'text-secondary hover:bg-secondary-lighter border-secondary-light',
    },
  },
});

const subtleVariants = cva('', {
  variants: {
    variant: {
      default: 'text-background bg-foreground hover:bg-foreground/90',
      primary: 'text-background bg-primary hover:bg-primary-dark',
      destructive:
        'text-red-500 bg-red-400/20 hover:bg-red-400/30 border-red-500',
    },
  },
});

const ghostVariants = cva('', {
  variants: {
    variant: {
      default:
        'text-zinc-900 hover:bg-zinc-200 border-zinc-900 dark:text-white dark:hover:bg-zinc-200 dark:border-white dark:hover:bg-white/20',
      brand: 'text-brand-500 hover:bg-brand-400/20 border-brand-500',
      destructive: 'text-red-500 hover:bg-red-400/20 border-red-500',
    },
  },
});

const buttonVariants = cva('...', {
  variants: {
    variant: {
      //...
      outline: outlineVariants({ variant: 'default' }),
      'outline-primary': outlineVariants({ variant: 'primary' }),
      'outline-secondary': outlineVariants({ variant: 'secondary' }),
      ghost: ghostVariants({ variant: 'default' }),
      'ghost-brand': ghostVariants({ variant: 'brand' }),
      'ghost-destructive': ghostVariants({ variant: 'destructive' }),
      subtle: subtleVariants({ variant: 'default' }),
      'subtle-primary': subtleVariants({ variant: 'primary' }),
      'subtle-destructive': subtleVariants({ variant: 'destructive' }),
      //...
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof baseButtonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export const BaseButton = React.forwardRef<
  React.ElementRef<'button'>,
  BaseButtonProps
>(
  (
    {
      className,
      size,
      rounded,
      leftIcon,
      rightIcon,
      children,
      isLoading,
      disabled,
      ...props
    },
    ref,
  ) => {
    const { icon, iconPlacement } = React.useMemo(() => {
      let icon = rightIcon ? rightIcon : leftIcon;

      if (isLoading) {
        icon = <Icons.spinner className='animate-spin' />;
      }

      return {
        icon,
        iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
      };
    }, [isLoading, leftIcon, rightIcon]);

    return (
      <button //Most of the time I use a polymorphic component that change to a link when there is href in props
        className={cn(baseButtonVariants({ size, rounded, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        data-state={isLoading ? 'loading' : undefined}
        {...props}
      >
        {icon && iconPlacement === 'left' ? (
          <span
            className={cn(
              { 'mr-2': !!children },
              'inline-flex shrink-0 self-center',
            )}
          >
            {icon}
          </span>
        ) : null}
        {children}
        {icon && iconPlacement === 'right' ? (
          <span
            className={cn(
              { 'ml-2': !!children },
              'inline-flex shrink-0 self-center',
            )}
          >
            {icon}
          </span>
        ) : null}
      </button>
    );
  },
);
BaseButton.displayName = 'BaseButton';

const Button = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  React.ComponentPropsWithoutRef<typeof BaseButton> &
    VariantProps<typeof buttonVariants>
>(({ className, variant, ...props }, ref) => (
  <BaseButton
    className={cn(buttonVariants({ variant, className }))}
    {...props}
    ref={ref}
  />
));

Button.displayName = 'Button';
export { Button, buttonVariants };
