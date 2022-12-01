import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import soleado from '../img/soleado.jpg';
import nublado from '../img/nublado.jpeg';
import nieve from '../img/nieve.jpg';
import lluvia from '../img/lluvioso.jpg';

const WeatherApp = ({ dt, temp, temp_min, temp_max, main, weather, sensation,description }) => {

    const date = new Date(dt);
    const date_format = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().substr(-2)}`;
    const day = date.toLocaleDateString('es-ES', { weekday: 'long' });
    const time = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    let clima = main === "Clear" ? "Despejado" : main === "Clouds" ? "Nublado" : main === "Rain" ? "Lluvia" : main === "Snow" ? "Nieve" : "Clima Desconocido";
    let icono = clima === "Despejado" ? soleado : clima === "Nublado" ? nublado : clima === "Lluvia" ? lluvia : clima === "Nieve" ? nieve : "./img/interrogacion.png";
    let descripcion = description === "clear sky" ? "Cielo Despejado" : description === "few clouds" ? "Pocas Nubes" : description === "scattered clouds" ? "Nubes Dispersas" : description === "broken clouds" ? "Nubes Ruptas" : description === "shower rain" ? "Lluvia Escasa" : description === "rain" ? "Lluvia" : description === "thunderstorm" ? "Tormenta" : "light rain" ? "Lluvia":description === "snow" ? "Nieve" : description === "mist" ? "Niebla" : "Clima Desconocido";

    return (
        <Card style={{ width: '15rem', borderRadius: '30px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'}}>
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
                    <Row>
                        <Col>
                            <b>Sensación Térmica: </b>{Math.floor(sensation - 273.15, 2)} <sup>°C</sup>
                        </Col>
                    </Row>
                </div>
                <Card.Title>{clima}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <p>
                    {day.substring(-1,3)}{' '}{date_format}{' '}{time}
                </p>
            </Card.Body>
        </Card>
    )
}

export default WeatherApp;