/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '860px',
                xl: '1024px',
                '2xl': '1280px',
            },
        },
        extend: {},
    },
    plugins: [],
};
