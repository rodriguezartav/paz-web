const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.green,
        purple: colors.blue,
        indigo: colors.blue,
        sky: colors.sky,
        teal: colors.teal,
        "warm-gray": colors.warmGray,
        teal: colors.teal,
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/typography"),

    require("@tailwindcss/forms"),
  ],
};
