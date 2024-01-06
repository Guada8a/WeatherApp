import React from "react";
import { Col, Row } from "react-bootstrap";
import WeatherApp from "./WeatherApp";

const WeatherList = ({ weathers }) => {
    
    return (
        <Row>
            {weathers.map(({ dt, main, weather }) => (
                <Col key={dt}>
                    <WeatherApp
                        temp={main.temp}
                        temp_max={main.temp_max}
                        temp_min={main.temp_min}
                        dt={dt * 1000} main={weather[0].main}
                        description={weather[0].description}
                        sensation={main.feels_like}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;