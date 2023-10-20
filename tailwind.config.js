/** @type {import('tailwindcss').Config} */

import { screens as _screens } from 'tailwindcss/defaultTheme';
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  screens: {
    'xs': '475px',
    ..._screens,
  },
  extend: {
    fontFamily: {
      custom: ['Montserrat', 'sans-serif']
    },
  },
};
export const plugins = [];

