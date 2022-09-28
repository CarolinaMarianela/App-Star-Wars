import React, { useState, useEffect } from 'react';
import './App.css';

const urlMovies = 'https://swapi.dev/api/films/';

function App() {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getUrlMoviesWithFecht();
  }, []);

  const getUrlMoviesWithFecht = async () => {
    const response = await fetch(urlMovies);
    const jsonData = await response.json();
    setMovieData(jsonData);
    console.log(jsonData);
  };

  return (
    <div>
      {movieData.results &&
        movieData.results.map((movie, key) => (
          <div key={key}>
            <p className="text-3xl font-bold underline">{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        ))}
    </div>
  );
}
export default App;
