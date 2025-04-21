// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Paleta de colores
        primary: {
          DEFAULT: '#6366F1', // Indigo 500
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#F472B6', // Pink 400
          foreground: '#1F2937' // Gray 800
        },
        background: '#F9FAFB',
        muted: '#E5E7EB', // Gray 200
        accent: '#34D399', // Emerald 400
        destructive: '#EF4444' // Red 500
      },
      fontFamily: {
        // ✍️ Tipografías
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        // 🟦 Radios
        sm: '6px',
        DEFAULT: '12px',
        lg: '16px',
        full: '9999px'
      },
      spacing: {
        // 📐 Espaciado base
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        }
      }
    }
  },
  plugins: []
}
