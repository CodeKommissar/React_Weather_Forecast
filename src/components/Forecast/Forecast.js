import React from "react";
import { Row } from "react-bootstrap";

import ForecastCard from "./ForecastCard/ForecastCard";

const Forecast = (props) => {
    return (
        <Row>
            {props.forecast.map((day, index) => {
                if (index === 0) {
                    return <ForecastCard day={day} key={day.id} active={true} />
                } else {
                    return <ForecastCard day={day} key={day.id} />
                }
            })}
        </Row>
    );
}

export default Forecast;

