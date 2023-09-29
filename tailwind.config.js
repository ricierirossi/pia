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
            backgroundPosition: {
                "top-20": "0 35%",
            },
            spacing: {
                88: "345px",
            },
            screens: {
                mobile: "0",
                tablet: "850px",
                desktop: "",
            },
        },
        plugins: [],
    },
};
