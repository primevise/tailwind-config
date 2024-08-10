/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.rb",
    "./app/views/**/*.html.erb",
    "./app/views/layouts/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
