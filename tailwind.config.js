/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAFAF8',
          bgAlt: '#F4F3EF',
          bgCard: '#FFFFFF',
          navy: '#0F1629',
          navyMid: '#2D3A52',
          slate: '#5C6880',
          slateLight: '#8C97A8',
          border: 'rgba(15, 22, 41, 0.07)',
          borderMid: 'rgba(15, 22, 41, 0.12)',
          amber: '#D97706',
          amberLight: '#F59E0B',
          amberBg: '#FFFBEB',
          amberBorder: 'rgba(217, 119, 6, 0.18)',
          teal: '#0D9488',
          tealBg: 'rgba(13, 148, 136, 0.06)',
          tealBorder: 'rgba(13, 148, 136, 0.16)',
          emerald: '#059669',
          red: '#DC2626',
          redBg: 'rgba(220, 38, 38, 0.06)',
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: '0.75rem',
      },
      boxShadow: {
        brand: '0 1px 3px rgba(15, 22, 41, 0.05), 0 4px 16px rgba(15, 22, 41, 0.05)',
        'brand-md': '0 2px 8px rgba(15, 22, 41, 0.06), 0 8px 32px rgba(15, 22, 41, 0.08)',
        'brand-lg': '0 4px 16px rgba(15, 22, 41, 0.07), 0 16px 48px rgba(15, 22, 41, 0.09)',
        'brand-amber': '0 8px 32px rgba(217, 119, 6, 0.20)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-custom': 'pulse-custom 2s infinite',
      }
    },
  },
  plugins: [],
}
