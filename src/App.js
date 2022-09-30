import React from 'react';
import './App.css';
import Activities from './components/Activities/Activities';
import ActivitiesData from './components/ActivitiesData/ActivitiesData';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container main py-3">
        <Activities></Activities>
        <ActivitiesData></ActivitiesData>
      </div>
    </div>
  );
}

export default App;
