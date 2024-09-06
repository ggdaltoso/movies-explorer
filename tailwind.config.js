/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'r95-anchor': 'var(--r95-color-anchor)',
        'r95-anchorVisited': 'var(--r95-color-anchorVisited)',
        'r95-borderDark': 'var(--r95-color-borderDark)',
        'r95-borderDarkest': 'var(--r95-color-borderDarkest)',
        'r95-borderLight': 'var(--r95-color-borderLight)',
        'r95-borderLighter': 'var(--r95-color-borderLighter)',
        'r95-borderLightest': 'var(--r95-color-borderLightest)',
        'r95-canvas': 'var(--r95-color-canvas)',
        'r95-canvasText': 'var(--r95-color-canvasText)',
        'r95-headerBackground': 'var(--r95-color-headerBackground)',
        'r95-headerNotActiveBackground':
          'var(--r95-color-headerNotActiveBackground)',
        'r95-headerNotActiveText': 'var(--r95-color-headerNotActiveText)',
        'r95-headerText': 'var(--r95-color-headerText)',
        'r95-material': 'var(--r95-color-material)',
        'r95-materialText': 'var(--r95-color-materialText)',
        'r95-materialTextDisabled': 'var(--r95-color-materialTextDisabled)',
        'r95-materialTextDisabledShadow':
          'var(--r95-color-materialTextDisabledShadow)',
        'r95-materialTextInvert': 'var(--r95-color-materialTextInvert)',
        'r95-progress': 'var(--r95-color-progress)',
        'r95-inputBackground': 'var(--r95-color-inputBackground)',
        'r95-inputBackgroundDisabled':
          'var(--r95-color-inputBackgroundDisabled)',
      },
    },
  },
  plugins: [],
};
