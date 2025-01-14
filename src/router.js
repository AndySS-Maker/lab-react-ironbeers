import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';

function Router() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/beers" element={<AllBeers />}/>
            <Route path="/detail/:id" element={<BeerDetails />}/>
            <Route path="/new" element={<NewBeer />}/>
            <Route path="/random" element={<RandomBeer />}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default Router;