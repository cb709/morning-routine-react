import React from 'react';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Main></Main>
     <Blog></Blog>
    </div>
  );
}

export default App;
