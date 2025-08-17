/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#3B82F6", // blue-500
                    light: "#60A5FA",   // blue-400
                    dark: "#1D4ED8",    // blue-700
                },
                secondary: {
                    DEFAULT: "#F97316", // orange-500
                    light: "#FDBA74",   // orange-300
                    dark: "#C2410C",    // orange-700
                },
                success: "#22C55E",   // green-500
                danger: "#EF4444",    // red-500
                warning: "#EAB308",   // yellow-500
                info: "#06B6D4",      // cyan-500
                accent: "#AB8BFF",    // purple custom
            },
        },
    },
    plugins: [],
}