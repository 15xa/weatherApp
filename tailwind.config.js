export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(85deg, rgba(252, 243, 38, 0.2), rgba(4, 200, 209, 0.2))",
        'bg-pc' : "url('/pc-bg.png')",
        'bg-mob' : "url('/mob-hero-bg.webp')"
      },
    },
  },
  plugins: [],
}