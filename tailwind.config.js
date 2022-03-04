module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    corePlugins: {
        preflight: false,
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'dark-bg': '#10172A'
            },
        },
    },
    plugins: [],
}
