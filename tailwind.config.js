module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Prompt", "sans-serif"],
      body: ["DM sans", "sans-serif"],
      mono: ["Menlo", "monospace"],
    },

    extend: {
      colors: {
        accent: "#8A5DD2",
        "gray-bg": "#2C2D33",
        "dark-bg": "#191B1F",
        light: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
