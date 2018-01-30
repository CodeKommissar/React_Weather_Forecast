import React from "react";
import { Row } from "react-bootstrap";

import ForecastCard from "./ForecastCard/ForecastCard";

const Forecast = (props) => {
    return (
        <Row>
            {props.forecast.map(day => <ForecastCard day={day} key={day.id} />)}
        </Row>
    );
}

export default Forecast;

