import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Nabvar from './components/Nabvar';
import Modal from './components/Modal';

const urlMovies = 'https://swapi.dev/api/films/';

function App() {
  const [movieData, setMovieData] = useState({});
  const [text, setText] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [showmodal, setShowmodal] = useState(false);

  function handleChange(newValue) {
    setText(newValue);
    filterData();
  }

  function filterData() {
    setMovieData(
      movieData.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  }

  useEffect(() => {
    getUrlMoviesWithFecht();
  }, []);

  const getUrlMoviesWithFecht = async () => {
    const response = await fetch(urlMovies);
    const jsonData = await response.json();
    setMovieData(jsonData.results);
  };

  return (
    <div className="bg-[url('/src/components/images/starWars.jpeg')] h-screen w-full">
      <Nabvar text={text} handleChange={handleChange} />
      <div className="flex flex-wrap space-x-4 justify-center">
        {movieData.length > 0 ? (
          movieData.map((movie, key) => (
            <Card
              onSetShowModal={setShowmodal}
              onSelectedCard={setSelectedCard}
              movie={movie}
              key={key}
            />
          ))
        ) : (
          <svg
            className="animate-spin ml-1 mr-3 h-8 w-8 text-white mt-48"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </div>
      <div>
        {showmodal === true && (
          <Modal onSetShowModal={setShowmodal} selectedCard={selectedCard} />
        )}
      </div>
    </div>
  );
}
export default App;
