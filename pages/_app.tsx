import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Layout from "../components/Layout/Layout"
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#484848",
            main: "#212121",
            dark: "#121212",
            contrastText: "#e0e0e0",
        },
        secondary: {
            light: "#ffeb3b",
            main: "#ffff72",
            dark: "#c8b900",
            contrastText: "#000000",
        },
        background: {
            default: "#212121",
        },
    },
    typography: {
        button: {
            textTransform: "none",
            fontWeight: 500,
            textAlign: "center",
            display: "block",
            minWidth: 125,
        },
        fontFamily: ["Montserrat"].join(","),
        body1: {
            fontFamily: "Hind",
        },
    },
});

function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
  );
}

export default App;
