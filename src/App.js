import React, { Component } from 'react';
import './App.css';
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import SearchBar from "./components/SearchBar/SearchBar";
import Forecast from "./components/Forecast/Forecast";

class App extends Component {
  state = {
    city: null,
    forecast: null
  }

  handleCitySearch = (city) => {
    this.setState({ city: city }, () => {
      this.handleForecastSearch();
    });
  }

  handleForecastSearch = () => {
    if (this.state.city) {
      fetch(`https://cors.io/?https://www.metaweather.com/api/location/${this.state.city.woeid}`)
        .then(resp => resp.json())
        .then(json => {
          console.log(json.consolidated_weather)
          this.setState({
              forecast: json,
          })
        });
    }
  }

  render() {
    return (
      <div className="App">
        <PageHeader>
          Search the Weather Forecast for 
          <strong>
            { this.state.city ? " " + this.state.city.title : "..." }
          </strong>
        </PageHeader>
        <Grid>
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              <SearchBar onCitySearch={this.handleCitySearch} />
            </Col>
          </Row>
          <Row>
            { this.state.forecast ? <Forecast /> : null } 
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
