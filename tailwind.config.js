module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        fatimaMagenta: "#EE00FF",
        fatimaRazzmatazz: "#FF0066",
        fatimaOrangeRed: "#FF4400",
      },
      fontFamily: {
        IranSansNormal: ["IRANSans"],
        IranSansLarge: ["IR Sans-L"],
        IranSansMedium: ["IR Sans-M"],
        IranSansBold: ["IR Sans-B"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};