import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container main py-3">
        <Activities></Activities>
        <div className="activities-data-container border rounded">
          <h1>I am the data</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
