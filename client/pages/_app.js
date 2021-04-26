import "../styles/globals.scss";
import React, { useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/Theme/Theme";
import GlobalStyle from "../src/Theme/GlobalStyles";
import { motion, AnimatePresence } from "framer-motion";
import Router from "next/router";
import Navigation from "../src/Components/Navigation/Navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Footer from "../src/Components/Common/Footer/Footer";

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

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
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
      <Footer />
    </MuiThemeProvider>
  );
}

export default MyApp;
