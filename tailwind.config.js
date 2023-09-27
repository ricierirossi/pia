/** @type {import('tailwindcss').Config} */
export default {
    content: ["./**/*.vue"],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato"],
            },
            borderRadius: {
                20: "20px",
            },
            backgroundImage: {
                pia: "url('/assets/images/pia.png')",
            },
        },
        plugins: [],
    },
};
