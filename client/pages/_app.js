import "../styles/globals.scss";
import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/Theme/Theme";
import GlobalStyle from "../src/Theme/GlobalStyles";
import { motion, AnimatePresence } from "framer-motion";
import Router from "next/router";
import Navigation from "../src/Components/Navigation/Navigation";

const appVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  pageExit: { y: "-100vh", transition: { ease: "easeInOut", duration: 1 } },
};

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Navigation />
      <AnimatePresence>
        <motion.div
          key={router.route}
          variants={appVariants}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
