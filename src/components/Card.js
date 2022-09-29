import React from 'react';

const Card = ({ movie, onSetShowModal, onSelectedCard }) => {
  return (
    <div
      onClick={() => {
        onSetShowModal(true);
        onSelectedCard(movie);
      }}
      className="cursor-pointer bg-white w-11/12 lg:w-1/3 h-2/3 p-8 rounded-lg m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <div className="justify-center text-3xl text-black">{movie.title}</div>
    </div>
  );
};
export default Card;
