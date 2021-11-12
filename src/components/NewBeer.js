import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import TextInput from './TextInput';
class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contribuiu_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      this.state
    );

    console.log(response);

    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contribuiu_by: '',
    });
  };

  render() {
    return (
      <div className="container">
        <Navbar />

        <TextInput
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Tagline"
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />
        <TextInput
          label="Description"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          variant='text-area'
        />
        <TextInput
          label="First brewed"
          type="text"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />
        <TextInput
          label="Brewers tips"
          type="text"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
        />
        <TextInput
          label="Attenuation level"
          type="number"
          name="attenuation_level"
          value={this.state.attenuation_level}
          onChange={this.handleChange}
        />
        <TextInput
          label="Contribuiu by"
          type="text"
          name="contribuiu_by"
          value={this.state.contribuiu_by}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit} className="container-btn">
          ADD NEW
        </button>
      </div>
    );
  }
}

export default NewBeer; 