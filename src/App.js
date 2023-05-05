import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Trailer from './components/Trailer';
import RecommendedMovies from './components/RecommendedMovies';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Trailer />
        <div className="movie-details">
          <Summary />
          <RecommendedMovies />
        </div>
      </main>
    </div>
  );
}

export default App;