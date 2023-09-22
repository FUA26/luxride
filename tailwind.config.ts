/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          light: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          lighter: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          darker: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--tw-color-secondary-500) / <alpha-value>)',
          light: 'rgb(var(--tw-color-secondary-300) / <alpha-value>)',
          lighter: 'rgb(var(--tw-color-secondary-100) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-secondary-700) / <alpha-value>)',
          darker: 'rgb(var(--tw-color-secondary-900) / <alpha-value>)',
        },
        info: {
          DEFAULT: 'rgb(var(--tw-color-info-500) / <alpha-value>)',
          light: 'rgb(var(--tw-color-info-300) / <alpha-value>)',
          lighter: 'rgb(var(--tw-color-info-100) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-info-700) / <alpha-value>)',
          darker: 'rgb(var(--tw-color-info-900) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgb(var(--tw-color-success-500) / <alpha-value>)',
          light: 'rgb(var(--tw-color-success-300) / <alpha-value>)',
          lighter: 'rgb(var(--tw-color-success-100) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-success-700) / <alpha-value>)',
          darker: 'rgb(var(--tw-color-success-900) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'rgb(var(--tw-color-warning-500) / <alpha-value>)',
          light: 'rgb(var(--tw-color-warning-300) / <alpha-value>)',
          lighter: 'rgb(var(--tw-color-warning-100) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-warning-700) / <alpha-value>)',
          darker: 'rgb(var(--tw-color-warning-900) / <alpha-value>)',
        },
        danger: {
          DEFAULT: 'rgb(var(--tw-color-danger-500) / <alpha-value>)',
          light: 'rgb(var(--tw-color-danger-300) / <alpha-value>)',
          lighter: 'rgb(var(--tw-color-danger-100) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-danger-700) / <alpha-value>)',
          darker: 'rgb(var(--tw-color-danger-900) / <alpha-value>)',
        },
        grey: {
          50: 'rgb(var(--tw-color-grey-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-grey-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-grey-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-grey-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-grey-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-grey-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-grey-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-grey-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-grey-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-grey-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-grey-950) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
