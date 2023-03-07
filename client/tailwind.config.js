/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        colors: {
            error: '#ff5757',
            attention: '#ffe657',
            success: '#76ff57',
            black: '#181818',
            gray: '#545454',
            white: '#F2F2F2',
            secondary: '#5CB8E4',
            primary: '#8758FF',
        },
        fontFamily: {
            comfortaa: ['Comfortaa', 'cursive'],
            lato: ['Lato', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
