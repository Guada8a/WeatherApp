import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';

const CitySelector = ({ onSearch }) => {
    const [city, setCity] = useState('');
    //Al hacer click en el boton, ocultamos el menu y mostramos el header
    const handleButtonClick = () => {
        onSearch(city);
        document.getElementById("mainMenu").style.display = "none";
        document.getElementById("header").style.display = "block";
        document.getElementById("ciudad").classList.remove("d-none");
    };

    return (
        <>
            <div id="mainMenu">
                <Row>
                    <div className="container text-center mb-5">
                        <Row>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-brightness-alt-high" viewBox="0 0 16 16">
                                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
                                </svg>
                            </div>
                            <div className="col-xs-6 mr-auto mt-auto mt-auto mb-auto">
                                <h1> WeatherApp </h1>
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Row>
                            <>
                                <FloatingLabel controlId="floatingInput" label="Ciudad" className="mb-3">
                                    <Form.Control type="text" placeholder="Ciudad" value={city} onChange={(event) => setCity(event.target.value)} />
                                </FloatingLabel>
                            </>
                        </Row>
                        <Row>
                            <Button variant="dark" size="lg" onClick={handleButtonClick} disabled={city.length === 0}>
                                Revisar Clima
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div id="header" style={{ display: "none" }}>
                <Row>
                    <Col xs={2}>
                        <div className="container text-center mb-5">
                            <Row>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-brightness-alt-high" viewBox="0 0 16 16">
                                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
                                    </svg>
                                </div>
                                <div className="col-xs-6 mr-auto mt-auto mt-auto mb-auto">
                                    WeatherApp
                                </div>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col xs={6}>
                                <FloatingLabel controlId="floatingInput" label="Ciudad" className="mb-3">
                                    <Form.Control type="text" placeholder="Ciudad" value={city} onChange={(event) => setCity(event.target.value)} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={6}>
                                <Button variant="dark" size="lg" onClick={handleButtonClick} disabled={city.length === 0}>
                                    Revisar Clima
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CitySelector;
