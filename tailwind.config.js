/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B00',
          green: '#00C76E',
          greenDark: '#006739',
          deep: '#0A0E1A',
          charcoal: '#191919',
          light: '#F8F9FA',
          offWhite: '#F3F4F6',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 70px rgba(0, 199, 110, 0.35)',
        card: '0 25px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(0, 199, 110, 0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255, 107, 0, 0.2), transparent 50%), linear-gradient(180deg, #0A0E1A 0%, #050607 100%)',
        'section-gradient':
          'linear-gradient(180deg, rgba(0, 199, 110, 0.15) 0%, rgba(0, 199, 110, 0) 100%)',
      },
    },
  },
  plugins: [],
}

