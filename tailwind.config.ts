import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Light luxury palette ── */
        'l-snow':    '#fafafa',
        'l-white':   '#ffffff',
        'l-cream':   '#f5f3ef',
        'l-warm':    '#ede9e1',
        'l-border':  '#e2ddd6',
        'l-border2': '#ccc7be',
        'l-text':    '#1a1a1a',
        'l-mid':     '#444444',
        'l-muted':   '#888888',
        'l-subtle':  '#b0aba4',
        /* ── Accent — deep carbon + ember ── */
        'l-carbon':  '#111111',
        'l-amber':   '#e8650a',
        'l-amber2':  '#f97316',
        'l-amber3':  '#fcd5a8',
        /* ── Dark section ── */
        'l-dark':    '#0e0e10',
        'l-dark2':   '#18181c',
        'l-dborder': '#2a2a32',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pill': '999px',
        'lg2':  '16px',
        'xl2':  '24px',
      },
      boxShadow: {
        'card':       '0 2px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)',
        'amber':      '0 4px 24px rgba(232,101,10,0.35)',
        'nav':        '0 2px 32px rgba(0,0,0,0.06)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        spinY: {
          '0%':   { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'shimmer':   'shimmer 2.5s linear infinite',
        'spin-y':    'spinY 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
