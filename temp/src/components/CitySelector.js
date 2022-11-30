import React, { useState } from 'react';
import { Row, Col, FormControl, FloatingLabel, Button } from 'react-bootstrap';

const CitySelector = ({ onSearch }) => {
    const [city, setCity] = useState('');

    return (
        <>
            <Row>
                <Col>
                    <h1> WeatherApp </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <FloatingLabel controlId="floatingInput" label="Ciudad" className="mb-3">
                        <FormControl onChange={(event) => setCity(event.target.value)} value={city} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <Button variant="dark" size="lg" onClick={(event) => onSearch(city)}>Revisar Clima</Button>
                </Col>
            </Row>
        </>
    );
};

export default CitySelector;