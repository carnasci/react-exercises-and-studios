import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import Hobbylinks from './components/Hobbylinks';

function App() {
  return (
    <div className="App">
      <ChoresList />
      <div classname="similarComponents">
        <MovieList />
        <BookList />
        <Hobbylinks/>
      </div>
    </div>
  );
}

export default App;
