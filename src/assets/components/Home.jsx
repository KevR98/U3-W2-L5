import { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = 'ebe004d116c5e95d69a6a8cc6d2c456e';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const allCity = [
    'Rome,IT',
    'London,GB',
    'Sydney,AU',
    'Tokyo,JP',
    'Madrid,ES',
    'Paris,FR',
    'Dubai,AE',
    'Copenhagen,DK',
    'Lisbona,POR',
  ];
  const getWeather = (city) => {
    fetch(URL + city + '&appid=' + key + '&units=metric')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Errore nel caricamento');
        }
      })
      .then((weather) => {
        setLoading(false);
        setData((prevWeather) => {
          return [...prevWeather, weather];
        });
      })
      .catch((err) => {
        console.log('Errore nel caricamento', err);
      });
  };

  useEffect(() => {
    setData([]);
    setLoading(true);
    allCity.forEach((city) => {
      getWeather(city);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className='my-4'>
      <Row>
        {loading && (
          <div className='text-center'>
            <Spinner animation='border' role='status'></Spinner>
          </div>
        )}
        {data.map((weather, index) => (
          <Col key={index} md={4} className='mb-3'>
            <Card className='shadow p-3 mb-5 bg-body-tertiary rounded weather-card'>
              <Card.Body className='text-center'>
                <Card.Title>
                  {weather.name}, {weather.sys.country}
                </Card.Title>
                <h3>{Math.round(weather.main.temp)}°C</h3>
                <p className='text-capitalize'>{weather.weather.description}</p>
                <div className='d-flex justify-content-between'>
                  <small>Umidità: {weather.main.humidity}%</small>
                  <small>Vento: {weather.wind.speed} m/s</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
