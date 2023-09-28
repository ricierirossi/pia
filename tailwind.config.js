/** @type {import('tailwindcss').Config} */
export default {
    content: ["./**/*.{vue, js, html}"],
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
            spacing: {
                88: "345px",
            },
            screens: {
                tablet: "850px",
                desktop: "",
            },
        },
        plugins: [],
    },
};
