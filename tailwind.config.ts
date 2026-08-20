import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ink-975': '#0D0D0D',
        'ink-950': '#141414',
        'ink-900': '#1C1C1C',
        'ink-850': '#242424',
        'ink-800': '#2E2E2E',
        'ink-700': '#3D3D3D',
        'ink-600': '#545454',
        'ink-500': '#6E6E6E',
        'ink-400': '#8F8F8F',
        'ink-300': '#B5B5B5',
        'ink-200': '#D6D6D6',
        'ink-100': '#EBEBEB',
        paper: '#F7F5F2',
        white: '#FFFFFF',
        'amber-300': '#FFD9A0',
        'amber-400': '#FFCB7B',
        'amber-500': '#FFBD59',
        'amber-600': '#E0A143',
        'amber-700': '#A8741F',
        'amber-800': '#7A5312',
      },
      fontFamily: {
        voga: ['Voga', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['InterVariable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(2.75rem, 7vw, 5.5rem)',
          { lineHeight: '1.02', letterSpacing: '0.01em', fontWeight: '500' },
        ],
        h1: [
          'clamp(2.25rem, 5vw, 3.75rem)',
          { lineHeight: '1.08', letterSpacing: '0.01em', fontWeight: '500' },
        ],
        h2: [
          'clamp(1.75rem, 3.5vw, 2.75rem)',
          { lineHeight: '1.15', letterSpacing: '0.01em', fontWeight: '500' },
        ],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.18em', fontWeight: '600' }],
        lead: [
          'clamp(1.125rem, 2vw, 1.375rem)',
          { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' },
        ],
        body: ['1rem', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        button: [
          '0.9375rem',
          { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' },
        ],
      },
      borderRadius: {
        control: '2px',
        card: '4px',
      },
      maxWidth: {
        content: '1200px',
        prose: '68ch',
        lead: '56ch',
        narrow: '720px',
        head: '640px',
      },
      transitionTimingFunction: {
        select: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
} satisfies Config;
