import React from "react";
import moment from 'moment';
import "./ForecastCard.css";

import { Col, Image } from "react-bootstrap";

const Forecast = (props) => {
  return (
    <Col xs={4} md={2} className={props.active ? "ActiveDay" : ""}> 
      <h3>
        {moment(props.day.applicable_date, "YYYY-MM-DD").format("ddd")}
      </h3>
      <Image 
        src={`https://www.metaweather.com/static/img/weather/${props.day.weather_state_abbr}.svg`} 
        rounded 
      />
      <br/>
      <p>
        {parseInt(props.day.max_temp, 10) + "°C"} - {parseInt(props.day.min_temp, 10) + "°C"}
      </p>
    </Col>
  );
}

export default Forecast;