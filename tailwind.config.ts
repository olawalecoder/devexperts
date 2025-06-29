import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#FFF1E6',
          '500': '#FF7000'
        },
        dark: {
          '100': '#000000',
          '200': '#0F1117',
          '300': '#151821',
          '400': '#212734',
          '500': '#101012'
        },
        light: {
          '400': '#858EAD',
          '500': '#7B8EC8',
          '700': '#DCE3F1',
          '800': '#F4F6F8',
          '850': '#FDFDFD',
          '900': '#FFFFFF'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        full: "9999px"
      },
      boxShadow: {
        none: 'none',
        'light-100': '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)'
      },
      backgroundImage: {
        'auth-dark': 'url("/images/auth-dark.png")',
        'auth-light': 'url("/images/auth-light.png")'
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        'space-grotesk': ["var(--font-space-grotesk)"]
      },
      screens: {
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '420px'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            fontSize: '1rem',
            h1: {
              fontSize: '1.25rem',
              fontWeight: '600',
            },
            h2: {
              fontSize: '1.15rem',
              fontWeight: '600',
            },
            h3: {
              fontSize: '1rem',
              fontWeight: '600',
            },
            p: {
              fontSize: '1rem',
            },
            li: {
              fontSize: '1rem',
            },
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
};
export default config;
