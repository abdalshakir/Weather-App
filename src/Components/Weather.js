import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { WiDayCloudy } from "react-icons/wi";
import Daily from "./Daily";

function Weather() {
  const [weather, setWeather] = useState({});
  const [daily, setDaily] = useState([]);
  const lat = 24.926896268688317;
  const lon = 67.0751502403346;

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=c283ccb0b1e9db29fb75b0db8176a9c0&units=metric`
      )
      .then((res) => {
        console.log(res.data.hourly[0].temp);
        setWeather(res.data);
        setDaily(res.data.daily);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row>
        <Col style={{ padding: "4rem" }}>
          <Card
            border="warning"
            style={{ width: "30rem", height: "40rem", margin: "auto" }}
            className="bg-light"
          >
            <Card.Body>
              <Container className="h-100">
                <div className="bg-primary d-flex justify-content-around">
                  <div className="pt-4">
                    <Card.Title style={{ fontSize: "2.5rem" }}>
                      {Math.round(weather?.current?.temp)}°C
                      <div className="pt-2 fs-5">
                        {weather?.timezone} <br />
                        {new Date(weather?.current?.dt * 1000).toDateString()}
                      </div>
                    </Card.Title>
                  </div>
                  <div style={{ fontSize: "5rem" }}>
                    <WiDayCloudy />
                  </div>
                </div>
                {daily && daily.length > 0
                  ? daily.map((e, i) => {
                      return <Daily data={e} key={i} />;
                    })
                  : "Wait"}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
