import About from './Components/About';
import City from './Components/City';
import Receipts from './Components/Receipts';
import Movie from './Components/Movie';
import AuthorInfo from './Components/AuthorInfo';
import WorkList from './Components/WorkList';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <About/>
      <City/>
      <Receipts/>
      <Movie/>
      <AuthorInfo/>
      <WorkList/>
    </div>
  );
}

export default App;
