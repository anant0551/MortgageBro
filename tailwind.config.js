// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths as needed for your project structure
    "./public/index.html", // Add any other relevant paths
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Customize this hex code to the shade of gold you want
        harvestgold: '#FDB515'
      },
    },
  },
  plugins: [],
};
