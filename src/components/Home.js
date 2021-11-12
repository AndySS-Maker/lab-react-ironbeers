import React from 'react';
import { Link } from 'react-router-dom';

import imgAllBeers from '../assets/beers.png';
import imgRandomBeer from '../assets/random-beer.png';
import imgNewBeer from '../assets/new-beer.png';

function Home () {
    return (
      <div>
        <section className="section">
          <Link to={'/beers'}>
            <img
              className="section-img"
              src={imgAllBeers}
              alt="Balcão com chopeiras"
            />
          </Link>

          <h1 className="section-title">All Beers</h1>

          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            imperdiet libero velit, congue venenatis nunc feugiat id.
          </p>
        </section>

        <section className="section">
          <Link to={'/random'}>
            <img className="section-img" src={imgRandomBeer} alt="chopeiras" />
          </Link>

          <h1 className="section-title">Random Beer</h1>

          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            imperdiet libero velit, congue venenatis nunc feugiat id.
          </p>
        </section>

        <section className="section">
          <Link to={'/new'}>
            <img className="section-img" src={imgNewBeer} alt="chopeiras" />
          </Link>

          <h1 className="section-title">New Beer</h1>

          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            imperdiet libero velit, congue venenatis nunc feugiat id.
          </p>
        </section>
      </div>
    );
}
   
export default Home;