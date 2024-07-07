/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    sm: '2rem',
                    md: '3rem',
                    lg: '4rem',
                    xl: '5rem',
                },
            },
            colors: {
                // primary: {
                //     50: '#effef6',
                //     100: '#dafeeb',
                //     200: '#b8fad8',
                //     300: '#80f5ba',
                //     400: '#42e694',
                //     500: '#19ce74',
                //     600: '#0eab5d',
                //     700: '#108c4f',
                //     800: '#12693f',
                //     900: '#115635',
                //     950: '#03301c',
                // },

                primary: {
                    50: '#faf7fd',
                    100: '#f3ecfb',
                    200: '#e8ddf7',
                    300: '#d7c2f0',
                    400: '#be9be5',
                    500: '#a574d8',
                    600: '#9966cc',
                    700: '#7943ad',
                    800: '#663b8e',
                    900: '#533172',
                    950: '#381952',
                },

                secondary: {
                    50: '#f7f7f7',
                    100: '#ededed',
                    200: '#dfdfdf',
                    300: '#c8c8c8',
                    400: '#a7a7a7',
                    500: '#999999',
                    600: '#888888',
                    700: '#7b7b7b',
                    800: '#676767',
                    900: '#545454',
                    950: '#363636',
                },
            },
        },
    },
}
