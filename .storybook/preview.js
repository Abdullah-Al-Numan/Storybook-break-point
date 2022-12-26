const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const parameters = {
  breakpoints: {
    breakpointNames: {
      'mobileS': '320',
      'mobileM': '375',
      'mobileL': '425',
      'tablet':'768',
      'laptop': '1024',
      'laptopL': '1440',
      'desktop': '2560'

    },
    debounceTimeout: 200
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}