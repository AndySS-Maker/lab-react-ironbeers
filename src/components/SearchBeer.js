import React from 'react';

class SearchBeer extends React.Component {
    state = {
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.input !== prevState.input) {
            this.props.filterBeer(this.state.input);
        }
    }

    handleSearch = (event) => {
        const { value } = event.target;
        this.setState({
            input: value,
        });
    };

    render() {
        return (
          <div>
            <input
              type="text"
              className="search-input"
              onChange={this.handleSearch}
              placeholder="Procurar..."
              value={this.state.input}
            />
          </div>
        );
    }
}

export default SearchBeer;