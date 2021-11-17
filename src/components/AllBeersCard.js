import React from 'react';
import { Link } from 'react-router-dom';
function AllBeersCard(props) {
    return (
      <div className="card">
        <Link to={`/detail/${props._id}`} title="All Beers">
          <img className="card-img" src={props.image_url} alt="Single beer" />
        </Link>

        <div className="card-content">
          <h4 className="card-content-title">{props.name}</h4>

          <p className="card-content-text">{props.tagline}</p>

          <span className="card-content-subText">
            Created by: {props.contributed_by}
          </span>
        </div>
      </div>
    );
}

export default AllBeersCard;