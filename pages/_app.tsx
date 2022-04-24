import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Layout from "../components/Layout/Layout";
let theme = createTheme()
 theme = createTheme({
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
             main: "#F0E4A3",
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
             fontWeight: 700,
             textAlign: "center",
             display: "flex",
             alignItems: "center",
             height: 40,
             justifyContent: "center",
             minWidth: 130,
             fontFamily: "Amiko",
             fontSize: "1rem",
         },
         fontFamily: ["Amiko"].join(","),
         allVariants: {
             color: "#F0E4A3",
         },
         h1: {
             fontFamily: "Russo One",
             fontSize: "4rem",
         },
         h2: {
             fontFamily: "Amiko",
             fontSize: "1.125rem",
         },
         h3: {
             fontFamily: "Oxygen",
             fontSize: "1.125rem",
         },
         h5: {
             fontFamily: "Russo One",
             fontSize: "9rem",
             zIndex: "-3",
             [theme.breakpoints.down("sm")]: {
                 fontSize: "7.5rem",
             },
         },
         h6: {
             fontFamily: "Amiko",
             fontSize: "1rem",
             textDecoration: "none",
         },
         body1: {
             fontFamily: "Amiko",
             fontSize: "1rem",
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
