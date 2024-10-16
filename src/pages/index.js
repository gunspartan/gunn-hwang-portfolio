import * as React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import HeroLayout from '../components/HeroLayout';
import AboutLayout from '../components/AboutLayout';
import ExperienceLayout from '../components/ExperienceLayout';
import ProjectsLayout from '../components/ProjectsLayout';
import ContactLayout from '../components/ContactLayout';

// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/styles/Global';

const theme = {
  colors: {
    primary: '#5BBDB8',
    secondary: '#F2A93B',
    white: '#FFF',
    black: '#010B14',
  },
  sidebarWidth: '300px',
  mobile: '1024px',
};

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>Gunn Hwang</title>
        <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
        <link rel='manifest' href='favicon/site.webmanifest' />
        <link rel='mask-icon' href='favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#010b14' />
        <meta name='theme-color' content='#010b14'></meta>
      </Helmet>
      <Navbar />
      <HeroLayout />
      <AboutLayout />
      <ExperienceLayout />
      <ProjectsLayout />
      <ContactLayout />
    </ThemeProvider>
  );
};

export default IndexPage;
