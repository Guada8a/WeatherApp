import React from "react";

import CitySelector from "./components/CitySelector";
import WeatherList from "./components/WeatherList";
import ImgError from "./img/cancelar.png";
import './App.css';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

import UseFetch from './hooks/UseFetch';
import { API_KEY, API_BASE_URL } from "./apis/config";
document.title = "WeatherApp";
const App = () => {
    const { data, error, isLoading, setUrl } = UseFetch();
    const error_es = error === "city not found" ? "Ciudad no encontrada" : error === "Nothing to geocode" ? "No hay nada que geocodificar" : error;
    const getContent = () => {
        if (error)
            return (
                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={ImgError} />
                            </Col>
                            <Col style={{ marginLeft: "-75%" }}>
                                <Card.Title>Lo sentimos, ha ocurrido un error</Card.Title>
                                <Card.Text>
                                    {error_es}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

            )
        if (!data && isLoading) return <h2>Cargando...</h2>
        if (!data) return null;
        
        return <WeatherList weathers={data.list} />
    };

    return (
        <Container className="App">
            <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />
            <div id="ciudad" className="d-none">
                Ciudad: <Badge bg="secondary">{data?.city?.name} - {data?.city?.country}</Badge>
            </div>
            {getContent()}
        </Container>
    );
};

export default App;