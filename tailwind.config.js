/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00C2FF',
          50: '#E6F9FF',
          100: '#CCF3FF',
          200: '#99E6FF',
          300: '#66DAFF',
          400: '#33CEFF',
          500: '#00C2FF',
          600: '#009BCC',
          700: '#007499',
          800: '#004D66',
          900: '#002633',
        },
        secondary: {
          DEFAULT: '#FF3366',
          50: '#FFE6EC',
          100: '#FFCCD9',
          200: '#FF99B3',
          300: '#FF668C',
          400: '#FF3366',
          500: '#FF0040',
          600: '#CC0033',
          700: '#990026',
          800: '#66001A',
          900: '#33000D',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          50: '#E6E6E9',
          100: '#CCCED3',
          200: '#9999A6',
          300: '#66667A',
          400: '#33334D',
          500: '#1A1A2E',
          600: '#141425',
          700: '#0F0F1C',
          800: '#0A0A13',
          900: '#05050A',
        },
        pastel: {
          pink: '#FFE5EC',
          rose: '#FFD6E0',
          blush: '#FFC7D4',
          lavender: '#E6E6FA',
          periwinkle: '#CCCCFF',
          purple: '#E0B0FF',
          mint: '#F5FFFA',
          sky: '#E6F3FF',
        },
        accent: {
          light: '#FFF0F5',
          DEFAULT: '#FFE4E8',
          dark: '#FFB6C1',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        'neon': '0 0 5px theme("colors.primary.400"), 0 0 20px theme("colors.primary.300")',
        'neon-strong': '0 0 10px theme("colors.primary.400"), 0 0 30px theme("colors.primary.300"), 0 0 50px theme("colors.primary.200")',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { filter: 'brightness(100%) blur(0px)' },
          '100%': { filter: 'brightness(150%) blur(2px)' },
        },
        pulse: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pastel': 'linear-gradient(120deg, #FFE5EC 0%, #E6E6FA 100%)',
        'gradient-soft': 'linear-gradient(120deg, #FFF0F5 0%, #F5F0FF 100%)',
        'hero-pattern': `
          linear-gradient(to right bottom, rgba(255, 229, 236, 0.2), rgba(230, 230, 250, 0.2)),
          url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFB6C1' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        'dots-pattern': `
          linear-gradient(to right bottom, rgba(255, 229, 236, 0.1), rgba(230, 230, 250, 0.1)),
          url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFB6C1' fill-opacity='0.15'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
        `,
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(255, 229, 236, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(230, 230, 250, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(255, 214, 224, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(204, 204, 255, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(255, 229, 236, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgba(230, 230, 250, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 0%, rgba(255, 214, 224, 0.3) 0px, transparent 50%)
        `,
        'circuit-pattern': 'url("/images/circuit-pattern.png")',
        'data-flow': 'url("/images/data-flow.png")',
        'lens-flare': 'url("/images/lens-flare.png")',
      },
    },
  },
  plugins: [],
} 