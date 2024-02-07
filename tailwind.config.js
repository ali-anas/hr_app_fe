const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'data-theme',
  theme: {
    extend: {
      height: {
        'fullScreen': 'calc(100vh - 63px)',
      },
      maxWidth: {
        'readable': '65ch',
      },
      fontSize: {
        'heading': 'clamp(4rem, 4.25rem + 1.79vw, 5.75rem)',
        'subHeadingLarge': 'clamp(2.25rem, 1.5rem + 1.25vw, 3.75rem)',
        'subHeading': 'clamp(1.75rem, 1.29rem + 1.07vw, 2.25rem)',
        'bodyLarge': 'clamp(1rem, 0.96rem + 1.07vw, 1.5rem)',
        'body': 'clamp(1rem, 0.96rem + 0.18vw, 1.125rem)',
        'small': 'clamp(0.75rem, 0.75rem + 0.18vw, 0.875rem)',
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        // 'product': ['Product-Sans', 'Roboto', 'sans-serif', 'Helvetica'],
        // 'google': ['Google-Sans', 'Roboto', 'sans-serif'],
        // 'gt': [ "GT Walsheim Pro", "Helvetica", "Arial", "sans-serif"],
        'cascadia': ['Cascadia Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        'ubuntu': ['ubuntu', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'fsans': ['fsans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'MierB': ['MierB', 'Roboto', 'Noto-Sans', 'sans-serif', 'ubuntu', 'Helvetica'],
        'cascadiaLight': ['Cascadia Code Light', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        'inter': ['Inter',  '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        'right': '10px 0 10px -10px #888',
        'bottomUp': '0 -20px 30px rgb(81 81 81 / 5%)',
        'buttonShadow': '0 20px 25px -5px rgba(181, 0, 0, .3), 0 10px 10px -5px rgba(181, 0, .3)',
      },
      animation: {
        'fadeIn': 'fadeIn 500ms ease-in',
        'fadeOut': 'fadeOut 500ms ease-out',
        'blink': 'blink 1.2s linear infinite',
        'movingCursor': 'movingCursor 5s ease-out',
        'forwardText': 'forwardText 0s steps(2) forwards',
        'slideUp': 'slideUp 1s',
        'slideOutput': 'slideOutput 1s',
        'shutEye': 'shutEye 2s infinite',
        'delayedText': 'delayedText 2s',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateX(-110%)'},
          '25%': {opacity: '0.1',},
          '75%': {opacity: '0.5',},
          '100%': {opacity: '1', transform: 'translateX(0)'},
        },
        fadeOut: {
          '0%': {opacity: '1', transform: 'translateX(0)'},
          '25%': {opacity: '0.5',},
          '75%': {opacity: '0.1',},
          '100%': {opacity: '0', transform: 'translateX(-110%)'},
        },
        blink: {
          '0%': {opacity: '1'},
          '45%': {opacity: '1'},
          '55%': {opacity: '0'},
          'to': {opacity: '0'},
        },
        movingCursor: {
          'from': {opacity: '1'},
          'to': {opacity: '0'}
        },
        forwardText: {
          '0%': { visibility: 'hidden'},
          '100%': {visibility: 'visible'}
        },
        slideUp: {
          '0%': {opacity: '0', transform: 'translateY(50%)'},
          '25%': {opacity: '0'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        slideOutput: {
          '0%': {opacity: '1', transform: 'translateY(100%)'},
          '25%': {opacity: '1'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        delayedText: {
          '0%': {opacity: '0'},
          '25%': {opacity: '0'},
          '95%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        shutEye: {
          '95%': {
            transform: 'translateY(100%)',
          },
          '90%, 100%': {
            transform: 'translateY(0)',
          }
        },
      },
      colors: {
        neutral: colors.neutral,
        'lightBg': '#fff',
        'darkBg': '#151718',
        'slate-2': 'var(--slate-2)',
        'bgColor': 'var(--secondary-blue)',
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        'background-misc': 'var(--background-misc)',
        'primary': 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-text': 'var(--text-primary)',
        'secondary-text': 'var(--text-secondary)',
        'suface-text-primary': 'var(--text-primary-on-surface)',
        'surface-text-secondary': 'var(--text-secondary-on-surface)',
        'active-link-bg': 'var(--active-link-bg)',
        'bgHover': 'var(--hover)',
        'bgGreen3': 'var(--background-teal-dark)',
        'bgGreen1': 'var(--background-teal-light)',
        'bgBlue1': 'var(--background-blue-light)',
        'bgBlue2': 'var(--background-blue-medium)',
        'bgBlue3': 'var(--background-blue-dark)',
        
        'darkBgSecondary': '#182635',
        'eyeColorBlack': 'var(--eye-color)',
        'surfaceBgOnDark': '#2A2B2D',
        // 'surfaceBgOnDark': '#36373a',
        'textColor': 'rgba(225,0,0)',
        'textOnBg': 'white',
        'blogContentBlack': '#202124',
        'hljs-foreground-light': 'var(--base06)',
        'hljs-offset': 'var(--base0G)',
        'hljs-background': 'var(--base00)',
        'hljs-foreground': 'var(--base05)',
        'hljs-comments': 'var(--base03)',
        'themed-border': 'var(--border)',
      },
      translate: {
        'arrowRight': 'translate3d(5px,-50%,0)',
      },
      transition: {
        'arrowRight': 'all 700ms cubic-bezier(0.23,1,0.32,1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
