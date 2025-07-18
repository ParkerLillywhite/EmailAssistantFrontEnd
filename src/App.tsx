import React from 'react';
import logo from './logo.svg';
import Layout from './layouts/layout'
import ScrollingPage from './components/scrollingpage';
import { SECTIONS } from './constants/homepage-constants'


function App() {
  return (
    <Layout>
      <ScrollingPage sections={SECTIONS}/>
    </Layout>
  );
}

export default App;
