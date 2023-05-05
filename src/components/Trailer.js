import React from 'react';
import './Trailer.css';

function Trailer() {
  return (
    <section className="trailer">
      <h2>Trailer</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/lB95KLmpLR4?controls=1&autoplay=1&mute=1&vq=hd1080"
          title="The Social Network movie trailer"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Trailer;