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
    if(city) {
      this.setState({ city: city }, () => {
        this.handleForecastSearch();
      });
    }
  }

  handleForecastSearch = () => {
    if (this.state.city) {
      fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${this.state.city.woeid}`)
        .then(resp => resp.json())
        .then(json => {
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
            { this.state.forecast ? " " + this.state.forecast.title : "..." }
          </strong>
        </PageHeader>
        <Grid>
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              <SearchBar onCitySearch={this.handleCitySearch} />
            </Col>
          </Row>
          <br/>
          { this.state.forecast 
            ? <Forecast forecast={this.state.forecast.consolidated_weather} /> 
            : null 
          } 
        </Grid>
      </div>
    );
  }
}

export default App;
