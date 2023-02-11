import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/global.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
