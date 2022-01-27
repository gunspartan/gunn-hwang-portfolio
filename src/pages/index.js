import * as React from "react";
import Navbar from "../components/Navbar";
import HeroLayout from "../components/HeroLayout";

// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/styles/Global";

const theme = {
  colors: {
    primary: "#5BBDB8",
    secondary: "#F2A93B",
    white: "#FFF",
    black: "#010B14",
  },
  sidebarWidth: "300px",
  mobile: "768px",
};

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <div>
        <HeroLayout />
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
