import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',   // slate-950
        surface: '#0f172a',      // slate-900
        'primary-text': '#fafaf9',   // stone-50
        'secondary-text': '#94a3b8', // slate-400
        accent: '#b45309',       // amber-700 cognac
        'accent-hover': '#d97706',   // amber-600
        impact: '#059669',       // emerald-600
        border: '#1e293b',       // slate-800
      },
      fontFamily: {
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
