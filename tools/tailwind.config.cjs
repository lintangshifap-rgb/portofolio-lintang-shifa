module.exports = {
    content: ['./index.html'],

            theme: {
                extend: {
                    colors: {
                        babypink: {
                            50: '#fdf2f8',
                            100: '#fce7f3',
                            200: '#fbcfe8',
                            300: '#f9a8d4',
                            400: '#f472b6',
                            500: '#ec4899',
                            600: '#db2777',
                        },
                        softgreen: {
                            50: '#ecfdf5',
                            100: '#d1fae5',
                            200: '#a7f3d0',
                            300: '#6ee7b7',
                            400: '#34d399',
                            500: '#10b981',
                            600: '#059669',
                            700: '#047857',
                            800: '#065f46',
                            900: '#064e3b',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    animation: {
                        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                        'float': 'float 3s ease-in-out infinite',
                    },
                    keyframes: {
                        heartbeat: {
                            '0%, 100%': { transform: 'scale(1)' },
                            '14%': { transform: 'scale(1.15)' },
                            '28%': { transform: 'scale(1)' },
                            '42%': { transform: 'scale(1.15)' },
                            '70%': { transform: 'scale(1)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        };
