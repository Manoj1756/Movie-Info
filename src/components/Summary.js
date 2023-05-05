import React from 'react';
import './Summary.css';

function Summary() {
  return (
    <section className="summary">
      <h2 className="summary__title">Summary</h2>
      <p className="summary__text">"The Social Network" is a 2010 biographical drama film directed by David Fincher and written by Aaron Sorkin. The movie is based on the founding of Facebook, the world's largest social networking website, and the legal battles that followed between co-founder Mark Zuckerberg and his former colleagues.</p>
      <p className="summary__text">On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history… but for this entrepreneur, success leads to both personal and legal complications</p>
      <p className="summary__detail"><strong>Release Year:</strong> 2010</p>
      <p className="summary__detail"><strong>Director:</strong> David Fincher</p>
      <p className="summary__detail"><strong>Main Cast:</strong> Jesse Eisenberg, Andrew Garfield, Justin Timberlake</p>
    </section>
  );
}

export default Summary;
