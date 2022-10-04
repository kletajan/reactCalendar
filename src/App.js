import React from 'react';
import Router from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </>
  );
}
