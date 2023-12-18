/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "525px",
      // => @media (min-width: 525px) { ... }
      desktop: "1115px",
      // => @media (min-width: 1115px) { ... }
    },
    extend: {
      colors: {
        // ### Primary

        darkBlue: ["#0B0D17"],
        softBlue: ["#D0D6F9"],
        bgMenu: ["rgba(255, 255, 255, 0.04)"],
        White: ["#fff"],
      },

      fontFamily: {
        Bellefair: ["Bellefair"],
        Barlow: ["Barlow Condensed"],
      },
      backgroundImage: {
        mobileHome: "url('../home/background-home-mobile.jpg')",
        tabletHome: "url('../home/background-home-tablet.jpg')",
        desktopHome: "url('../home/background-home-desktop.jpg')",

        mobiledestination:
          "url('../destination/background-destination-mobile.jpg')",
        tabletdestination:
          "url('../destination/background-destination-tablet.jpg')",
        desktopdestination:
          "url('../destination/background-destination-desktop.jpg')",

        mobileCrew: "url('../crew/background-crew-mobile.jpg')",
        tabletCrew: "url('../crew/background-crew-tablet.jpg')",
        desktopCrew: "url('../crew/background-crew-desktop.jpg')",

        mobileTech: "url('../technology/background-technology-mobile.jpg')",
        tabletTech: "url('../technology/background-technology-tablet.jpg')",
        desktopTech: "url('../technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
