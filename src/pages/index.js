import * as React from "react";
import Navbar from "../components/Navbar";
import HeroLayout from "../components/HeroLayout";
import AboutLayout from "../components/AboutLayout";
import ProjectsLayout from "../components/ProjectsLayout";

// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/styles/Global";
import { Watermark } from "../components/styles/WatermarkTemp.styled";

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
      <Watermark>
        <h1>WORK IN PROGRESS</h1>
      </Watermark>
      <Navbar />
      <HeroLayout />
      <AboutLayout />
      <ProjectsLayout />
    </ThemeProvider>
  );
};

export default IndexPage;
