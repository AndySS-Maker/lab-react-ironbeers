import React from 'react'
import { Component } from 'react';
import axios from 'axios';

import AllBeersCard from './AllBeersCard';
import Navbar from './Navbar';
import SearchBeer from './SearchBeer';

class AllBeers extends Component {
    state = {
      allBeers: [],
      filtered: [],
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                'https://ih-beers-api2.herokuapp.com/beers'
            );
          
            this.setState({
              allBeers: [...response.data],
              filtered: [...response.data],
            });
        } catch (error) {
            console.log(error);
        }
  };
  
  filterBeer = (input) => {
    const filtered = this.state.allBeers.filter((beer) =>
    beer.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  }

    render() {
        return (
          <div>
            <Navbar />
            <SearchBeer filterBeer={this.filterBeer}/>
            {this.state.filtered.map((beer) => (
              <AllBeersCard
                key={beer._id}
                {...beer}
              />
            ))}
          </div>
        );
    }
}

export default AllBeers;