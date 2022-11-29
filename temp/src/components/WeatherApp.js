import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherApp = ({ dt, temp_min, temp_max, main, icon }) => {
    
    const date = new Date(dt);

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                <p>
                    {date.toLocaleDateString()}-{date.toLocaleTimeString()}
                </p>
                <p>
                    Min Temp: {Math.floor(temp_min-273.15,2)}°C
                </p>
                <p>
                    Max Temp: {Math.floor(temp_max-273.15,2)}°C
                </p>
            </Card.Body>
        </Card>
    )
}

export default WeatherApp;