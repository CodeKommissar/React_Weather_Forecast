import React from "react";
import { Col, PageHeader, Image } from "react-bootstrap";

const Forecast = (props) => {
  return (
    <Col xs={6} md={2}>
      <h3>{props.day.applicable_date}</h3>
      <Image 
        src={`https://www.metaweather.com/static/img/weather/${props.day.weather_state_abbr}.svg`} 
        rounded 
      />
      <p>Description</p>
    </Col>
  );
}

export default Forecast;