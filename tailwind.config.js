/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        highlight: ['ui-serif', 'Georgia', 'system-ui', 'sans-serif'],
        base: ['ui-monospace', 'system-ui', 'sans-serif'],
      },
      spacing: {
        quarck: '4px',
        nano: '8px',
        xs: '16px',
        xs2: '22px',
        sm: '24px',
        md: '32px',
        lg: '40px',
      },
      colors: {
        brand: {
          primary: {
            pure: '#05D758',
            light: '#BCF4DD',
            medium: '#B7C72C',
            dark: '#93A229',
          },
          secondary: {
            pure: '#09244F',
            light: '#7BDDEC',
            medium: '#0D3A82',
            dark: '#031736',
          },
          tertiary: {
            pure: '#FECB00',
            light: '#58D0AC',
            medium: '#36A684',
            dark: '#348D73',
          },
        },
        highlight: {
          pure: '#1648CD',
          light: '#82A4FF',
          medium: '#1951E5',
          dark: '#123BA6',
        },
        neutral: {
          low: {
            pure: '#1E1E1E',
            light: '#A3A3A3',
            medium: '#666666',
            dark: '#292929',
          },
          high: {
            pure: '#FFFFFF',
            light: '#F5F5F5',
            medium: '#E0E0E0',
            dark: '#CCCCCC',
          },
        },
        feedback: {
          warning: {
            pure: '#DD013C',
            light: '#F7638B',
            medium: '#C40135',
            dark: '#910127',
          },
          helper: {
            pure: '#1648CD',
            light: '#82A4FF',
            medium: '#1951E5',
            dark: '#123BA6',
          },
          success: {
            pure: '#1B7D2C',
            light: '#76E388',
            medium: '#38B04C',
            dark: '#0E4217',
          },
        },
      },
    },
  },
  plugins: [],
}