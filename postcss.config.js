// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js', // ✅ Explicitly tell it where to find the config
    },
    autoprefixer: {},
  },
}