import React from 'react';
import './Header.css';
import moviePoster from '../assets/movie-poster.jpg';

function Header() {
  function handleWatchNowClick() {
    window.location.href = 'https://youtu.be/COj3bcgIDuI';
  }

  return (
    <header className="header">
      <h1 className="header__title">The Social Network</h1>
      <img src={moviePoster} alt="Movie Poster" className="header__logo" />
      <button className="header__button" onClick={handleWatchNowClick}>
        Watch Now
      </button>
    </header>
  );
}

export default Header;