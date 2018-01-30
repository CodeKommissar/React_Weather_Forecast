import React from "react";

import { InputGroup, Button } from "react-bootstrap";
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
const AsyncTypeahead = asyncContainer(Typeahead);

class SearchBar extends React.Component {
  state = {
    isLoading: false,
    options: [],
    submitFormOnEnter: true
  }

  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault();
          this.props.onCitySearch(this.state.options[0])
        }}
      >
        <InputGroup>
          <AsyncTypeahead
            isLoading={this.state.isLoading}
            labelKey="title"
            minLength={2}
            placeholder="Search for a City..."
            onSearch={query => {
              this.setState({ isLoading: true });
              fetch(`https://cors.io/?https://www.metaweather.com/api/location/search/?query=${query}`)
                .then(resp => resp.json())
                .then(json => {
                  this.setState({
                    isLoading: false,
                    options: json
                  })
                });
            }}
            options={this.state.options}
            submitFormOnEnter={this.state.submitFormOnEnter}
          />
          <InputGroup.Button>
            <Button className="btn-secondary" type="submit">
              Submit
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </form>
    )
  }
}

export default SearchBar;