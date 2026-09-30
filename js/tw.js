tailwind.config = {
  theme: {
    extend: {
      colors: {
        graphite: { 950: '#080D12', 900: '#0E151C', 850: '#121C25', 800: '#17232E', 700: '#20323F', 600: '#2B4353' },
        brand:    { 300: '#C9E4F5', 400: '#6DB9E4', 500: '#2E8FC4', 600: '#175F8E' },
        navy:     { 500: '#175F8E' },
        signal:   { 500: '#7FD2F0' },
        chalk:    { 50: '#F4F8FB', 100: '#E6EFF5', 200: '#CFDFEA' },
        steel:    { 400: '#93AAB9', 500: '#6E8798' },
        ink:      { 900: '#060B0F' },
      },
      fontFamily: {
        display: ['"Saira Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: { content: '76rem' },
    },
  },
};
