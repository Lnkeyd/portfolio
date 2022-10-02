import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: 'light',
    colorMode: 'light',
    useSystemColorMode: true,
  }

  const borderRadius = {
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
}

const colors = {
    "colors": {
        "orange": {
        "50": "#FCF0E9",
        "100": "#F6D6C1",
        "200": "#F0BB99",
        "300": "#EAA170",
        "400": "#E58648",
        "500": "#DF6C20",
        "600": "#B2561A",
        "700": "#864113",
        "800": "#592B0D",
        "900": "#2D1606"
        },
        "gray": {
            "50": "#F0F2F4",
            "100": "#D6DAE1",
            "200": "#BCC3CD",
            "300": "#A1ABBA",
            "400": "#8793A6",
            "500": "#6C7C93",
            "600": "#576375",
            "700": "#414A58",
            "800": "#2B323B",
            "900": "#16191D"
          },
    }
}

const theme = extendTheme({...colors, ...config, ...borderRadius})

  export default theme