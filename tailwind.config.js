/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx","./src/components/**/*.{ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        nosifer:['Nosifer_400Regular']
      }
    },
  },
  plugins: [],
}

