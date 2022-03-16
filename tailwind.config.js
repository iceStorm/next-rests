module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    corePlugins: {
        // preflight: false,
    },
    darkMode: "class",
    theme: {
        container: {
            center: "true",
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "0rem",
            },
        },
        extend: {
            colors: {
                primary: "#00B4D8",
                "dark-bg": "#10172A",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            container: "1152px",
        },
    },
    plugins: [],
}
