import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import soleado from '../img/soleado.jpg';
import nublado from '../img/nublado.jpeg';
import nieve from '../img/nieve.jpg';
import lluvia from '../img/lluvioso.jpg';

const WeatherApp = ({ dt, temp, temp_min, temp_max, main, icon, weather }) => {

    const date = new Date(dt);
    const date_format = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)}`;
    const day = date.toLocaleDateString('es-ES', { weekday: 'long' });
    const time = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    let clima = main === "Clear" ? "Despejado" : main === "Clouds" ? "Nublado" : main === "Rain" ? "Lluvioso" : main === "Snow" ? "Nieve" : "Clima Desconocido";
    let icono = clima === "Despejado" ? soleado : clima === "Nublado" ? nublado : clima === "Lluvioso" ? lluvia : clima === "Nieve" ? nieve : "./img/interrogacion.png";
    

    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="left" src={icono} />
            <Card.Body>
                <div style={{ textAlign: 'center' }}>

                    <Row>
                        <Col style={{ marginRight: '-2.6rem' }}>
                            <Row>
                                <h1>
                                    {Math.floor(temp - 273.15, 2)} <sup>°C</sup>
                                </h1>
                            </Row>
                        </Col>
                        <Col style={{ marginRight: '-2.6rem' }} >
                            <Row style={{ color: '#238F97' }}>
                                <h6>{Math.floor(temp_min - 273.15, 2)} <sup>°C</sup></h6>
                            </Row>
                            <Row style={{ color: 'red' }}>
                                <h6>{Math.floor(temp_max - 273.15, 2)} <sup>°C</sup></h6>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Card.Title>{clima}</Card.Title>
                <p>
                    {day}{' '}{date_format}{' '}{time}
                </p>
            </Card.Body>
        </Card>
    )
}

export default WeatherApp;