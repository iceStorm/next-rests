module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    corePlugins: {
        preflight: false,
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#00B4D8',
                'dark-bg': '#10172A'
            },
        },
    },
    plugins: [],
}
