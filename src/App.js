import React , { Component } from 'react';
import Platform from 'react-native';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Layout/Main';

const App =() => {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
