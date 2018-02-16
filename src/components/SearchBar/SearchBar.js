import React from "react";

import { InputGroup, Button } from "react-bootstrap";
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead';
const AsyncTypeahead = asyncContainer(Typeahead);

class SearchBar extends React.Component {
  state = {
    isLoading: false,
    submitFormOnEnter: true,
    options: [],
    selected: ""
  }

  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault();
          this.props.onCitySearch(this.state.selected[0])
        }}
      >
        <InputGroup>
          <AsyncTypeahead
            labelKey="title"
            minLength={2}
            isLoading={this.state.isLoading}
            placeholder="Search for a City..."
            onChange={(selected) => {
              this.setState({selected});
            }}
            onSearch={query => {
              console.log(query)
              this.setState({ isLoading: true });
              fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/search/?query=${query}`)
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