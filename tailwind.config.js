
/** @type {import('tailwindcss').Config} */

export default {


    content: [

        "./index.html",

        "./src/**/*.{js,ts,jsx,tsx}",

    ],

    theme: {

        extend: {

            fontFamily: {

                corpta: ["corpta", "sans-serif"],

                cyrovoid: ["cyrovoid", "sans-serif"],

                neubau: ["neubau", "sans-serif"],

            }

        },

        screens: {

            md: "768px",

            lg: "924px"

        },

    },

    plugins: [],


}