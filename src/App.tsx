import React from 'react';
import logo from './logo.svg';
import NavbarLayout from './layouts/NavbarLayout'
import ScrollingPage from './components/scrollingpage';
import { SECTIONS } from './constants/homepage-constants'
import { HelmetProvider } from "react-helmet-async";
import Layout from './layouts/Layout';


function App() {
  return (
    <HelmetProvider>
      <Layout sections={SECTIONS} className="layout-background"/>
    </HelmetProvider>
  );
}

export default App;
