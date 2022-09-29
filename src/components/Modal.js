import React, { useState } from 'react';

const Modal = ({ selectedCard, onSetShowModal }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-slate-500/50 absolute w-full top-0 h-full flex items-center justify-center">
      <div className="relative bg-white p-8 rounded w-full lg:w-2/4 h-3/4">
        <span
          className="absolute cursor-pointer right-4 top-2"
          onClick={() => onSetShowModal(false)}
        >
          x
        </span>
        <p className="font-display my-10 text-5xl text-center">
          {selectedCard.title}
        </p>
        <div>
          <div>
            <p>
              <strong>Director: </strong>
              {selectedCard.director}
            </p>
            <p>
              {' '}
              <strong>Producer: </strong> {selectedCard.producer}
            </p>
            <p>
              {' '}
              <strong> Relase date: </strong>
              {selectedCard.release_date}
            </p>
          </div>

          <p className="mt-2">
            {showMore
              ? selectedCard.opening_crawl
              : `${selectedCard.opening_crawl.substring(0, 250)}`}
          </p>
          <h6 className="text-orange-600 text-center">
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Modal;
