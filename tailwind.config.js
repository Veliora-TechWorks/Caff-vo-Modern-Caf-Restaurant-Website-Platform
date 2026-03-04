/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A0E0A',
        secondary: '#8B4513',
        accent: '#FF6B35',
        gold: '#FFB800',
        cream: '#FFF8F0',
        lightCream: '#FFFBF7',
        dark: '#2C1810',
        success: '#10B981',
        rose: '#FF6B9D',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
        script: ['Great Vibes', 'cursive'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 30px rgba(255, 107, 53, 0.4)',
        'gold-glow': '0 0 30px rgba(255, 184, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #1A0E0A 0%, #8B4513 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF6B35 0%, #FFB800 100%)',
      },
    },
  },
  plugins: [],
}
