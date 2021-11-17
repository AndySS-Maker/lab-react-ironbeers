import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';

const BeerDetails = (props) => {
  const [beerDetail, setBeerDetail] = useState({
    _id: '',
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
  })

  const {id} = useParams();
  
  useEffect(() => {
        axios.get(
       `https://ih-beers-api2.herokuapp.com/beers/${id}`
      ).then(res => setBeerDetail({ ...res.data })).catch(error => console.error(error))     
  }, [])

      return (
        <div className="beer-details">
          <Navbar />

          <img
            className="beer-details-img"
            src={beerDetail.image_url}
            alt="Single beer"
          />

          <div className="beer-details-section">
            <p className="beer-detail-section-name">{beerDetail.name}</p>
            <p className="beer-details-section-attenuation">
              {beerDetail.attenuation_level}
            </p>
          </div>

          <div className="beer-details-sectionTwo">
            <p className="beer-details-sectionTwo-tagline">
              {beerDetail.tagline}
            </p>

            <p className="beer-details-sectionTwo-firstBrewed">
              {beerDetail.first_brewed}
            </p>
          </div>

          <p className="beer-details-description">{beerDetail.description}</p>

          <p className="beer-details-contributedBy">
            {beerDetail.contributed_by}
          </p>
        </div>
      );
}

export default BeerDetails;
