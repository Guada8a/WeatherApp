import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import soleado from '../img/soleado.jpg';
import nublado from '../img/nublado.jpeg';
import nieve from '../img/nieve.jpg';
import lluvia from '../img/lluvioso.jpg';

const WeatherApp = ({ dt, temp, temp_min, temp_max, main, weather, sensation, description }) => {

    const date = new Date(dt);
    const date_format = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' });

    const day = date.toLocaleDateString('es-ES', { weekday: 'long' });
    const time = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    const weatherTranslations = {
        clear: 'Despejado',
        clouds: 'Nublado',
        rain: 'Lluvia',
        snow: 'Nieve',
        clearSky: 'Cielo Despejado',
        fewClouds: 'Pocas Nubes',
        scatteredClouds: 'Nubes Dispersas',
        brokenClouds: 'Nubes Ruptas',
        showerRain: 'Lluvia Escasa',
        thunderstorm: 'Tormenta',
        lightRain: 'Lluvia Ligera',
        snowDescription: 'Nieve',
        mist: 'Niebla',
        unknownWeather: 'Clima Desconocido',
    };
    const descripcionTranslations = {
        overcastClouds: 'Nublado',
        scatteredClouds: 'Nubes Dispersas',
        brokenClouds: 'Nubes Ruptas',
        lightRain: 'Lluvia Ligera',
        moderateRain: 'Lluvia Moderada',
        heavyIntensityRain: 'Lluvia Intensa',
        clearSky: 'Cielo Despejado',
        fewClouds: 'Pocas Nubes',
        showerRain: 'Lluvia Escasa',
        thunderstorm: 'Tormenta',
        snow: 'Nieve',
        lightSnow: 'Nieve Ligera',
        mist: 'Niebla',
        unknownWeather: 'Clima Desconocido',
    };
    let clima = weatherTranslations[main.toLowerCase()] || weatherTranslations.unknownWeather;
    const icono = clima === weatherTranslations.clear ? soleado : clima === weatherTranslations.clouds ? nublado : clima === weatherTranslations.rain ? lluvia : clima === weatherTranslations.snow ? nieve : './img/interrogacion.png';
    //Si tiene 2 palabras, separamos la primera y la segunda y la segunda la ponemos en mayuscula
    let str_descripcion = description.toLowerCase();
    if (str_descripcion.includes(' ')) {
        let str_descripcion_split = str_descripcion.split(' ');
        str_descripcion = str_descripcion_split[0] + ' ' + str_descripcion_split[1].charAt(0).toUpperCase() + str_descripcion_split[1].slice(1);
    }

    str_descripcion = str_descripcion.replace(' ', '');

    const descripcion = descripcionTranslations[str_descripcion] || descripcionTranslations.unknownWeather;

    return (
        <Card style={{ width: '15rem', borderRadius: '30px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)' }}>
            <Card style={{ width: '15rem', borderRadius: '30px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)' }}>
                <Card.Img variant="left" src={icono} />
                <Card.ImgOverlay>
                    <Card.Title><Badge bg="dark">{descripcion}</Badge></Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card.Body>
                <Card.Title>
                    {clima}
                </Card.Title>
                <div style={{ textAlign: 'center' }}>
                    <Row>
                        <Col className='col-sm-7'>
                            <Row>
                                <h1>
                                    <b>{Math.floor(temp - 273.15, 2)}<sup>°</sup></b>
                                </h1>
                            </Row>
                        </Col>
                        <Col className='col-sm-5'>
                            <Row style={{ color: 'blue' }}>
                                <h6>{Math.floor(temp_min - 273.15, 2)}<sup>°</sup></h6>
                            </Row>
                            <Row style={{ color: 'red' }}>
                                <h6>{Math.floor(temp_max - 273.15, 2)}<sup>°</sup></h6>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Sensación Térmica: </b>{Math.floor(sensation - 273.15, 2)}<sup>°</sup>
                        </Col>
                    </Row>
                </div>
                <p style={{ textAlign: 'right' }}>
                    {day.substring(-1, 3)}{' '}{date_format}{' '}<b>{time}</b>
                </p>
            </Card.Body>

        </Card>
    )
}

export default WeatherApp;