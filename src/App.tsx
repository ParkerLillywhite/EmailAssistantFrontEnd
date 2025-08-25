import React from 'react';
import logo from './logo.svg';
import NavbarLayout from './layouts/NavbarLayout'
import ScrollingPage from './components/scrollingpage';
import { SECTIONS } from './constants/homepage-constants'
import Layout from './layouts/layout';


function App() {
  return (
    <Layout sections={SECTIONS} />
  );
}

export default App;
