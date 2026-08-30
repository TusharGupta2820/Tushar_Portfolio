/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07080c',
        surface: {
          50: '#1e2230',
          100: '#161922',
          200: '#11131a',
          300: '#0c0e14',
          400: '#08090d',
        },
        brand: {
          blue: '#3b82f6',
          cobalt: '#2563eb',
          electric: '#60a5fa',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          emerald: '#10b981',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.18)',
          glow: 'rgba(59, 130, 246, 0.3)',
        },
        editorial: {
          text: '#f3f4f6',
          muted: '#94a3b8',
          dim: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
