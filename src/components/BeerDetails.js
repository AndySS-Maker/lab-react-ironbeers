import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

class BeerDetails extends Component {
  state = {
    _id: '',
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
  };

  componentDidMount = async () => {
    try {
      const id = this.props.match.params._id;
      
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      
      this.setState({ ...response.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
      return (
        <div className="beer-details">
          <Navbar />

          <img
            className="beer-details-img"
            src={this.state.image_url}
            alt="Single beer"
          />

          <div className="beer-details-section">
            <p className="beer-detail-section-name">{this.state.name}</p>
            <p className="beer-details-section-attenuation">
              {this.state.attenuation_level}
            </p>
          </div>

          <div className="beer-details-sectionTwo">
            <p className="beer-details-sectionTwo-tagline">
              {this.state.tagline}
            </p>

            <p className="beer-details-sectionTwo-firstBrewed">
              {this.state.first_brewed}
            </p>
          </div>

          <p className="beer-details-description">{this.state.description}</p>

          <p className="beer-details-contributedBy">
            {this.state.contributed_by}
          </p>
        </div>
      );
  }
}

export default BeerDetails;
