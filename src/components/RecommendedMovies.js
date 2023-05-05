import React from 'react';
import './RecommendedMovies.css';
import steveJobs from '../assets/steve-jobs.jpg';
import theFounder from '../assets/the-founder.jpg';
import moneyball from '../assets/moneyball.jpg';
import theBigShort from '../assets/the-big-short.jpg';
import ingridGoesWest from '../assets/ingrid-goes-west.jpg';
import wolfOfWallStreet from '../assets/wolf-of-wall-street.jpg';

function RecommendedMovies() {
  return (
    <section className="recommended">
      <h2 className="recommended__title">Recommended Movies</h2>
      <ul className="recommended__list">
        <li className="recommended__item">
          <img src={steveJobs} alt="Steve Jobs" className="recommended__image" />
          <div className="recommended__details">
            <p className="recommended__name">Steve Jobs</p>
            <p className="recommended__year">2015</p>
          </div>
        </li>
        <li className="recommended__item">
          <img src={theFounder} alt="The Founder" className="recommended__image" />
          <div className="recommended__details">
            <p className="recommended__name">The Founder</p>
            <p className="recommended__year">2016</p>
          </div>
        </li>
        <li className="recommended__item">
          <img src={moneyball} alt="Moneyball" className="recommended__image" />
          <div className="recommended__details">
            <p className="recommended__name">Moneyball</p>
            <p className="recommended__year">2011</p>
          </div>
        </li>
        <li className="recommended__item">
          <img src={theBigShort} alt="The Big Short" className="recommended__image" />
          <div className="recommended__details">
            <p className="recommended__name">The Big Short</p>
            <p className="recommended__year">2015</p>
          </div>
        </li>
        <li className="recommended__item">
          <img src={ingridGoesWest} alt="Ingrid Goes West" className="recommended__image" />
          <div className="recommended__details">
            <p className="recommended__name">Ingrid Goes West</p>
            <p className="recommended__year">2017</p>
          </div>
        </li>
        <li className="recommended__item">
          <img src={wolfOfWallStreet} alt="The Wolf of Wall Street" className="recommended__image" />
          <div className="recommended__details">
            <p className="recommended__name">The Wolf of Wall Street</p>
            <p className="recommended__year">2013</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default RecommendedMovies;