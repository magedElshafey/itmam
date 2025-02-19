/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleColor: "#A56FCC",
        mainColor: "#3D2571",
        whiteColor: "#FFFFFF",
        darkMainColor: "#000C40",
        darkPurpleColor: "#994ECC",
        babyBlueColor: "#00F9FF",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #A56FCC, #3D2571, #000C40 , #994ECC)",
      },
      transformStyle: {
        "3d": "preserve-3d",
      }, 
      backfaceVisibility: {
        hidden: "hidden",
      }
    },
  },
  plugins: [],
};
