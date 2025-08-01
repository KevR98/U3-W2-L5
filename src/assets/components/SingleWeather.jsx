import { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = 'ebe004d116c5e95d69a6a8cc6d2c456e';

// funzione con la prop search passata in app.jsx
function SingleWeather({ search }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

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
        console.log(weather);
        setData(weather);
      })
      .catch((err) => {
        console.log('Errore nel caricamento', err);
      });
  };
  useEffect(() => {
    getWeather(search);
    setLoading(true);
  }, [search]);
  return (
    <Container className='my-4'>
      {loading && (
        <div className='text-center'>
          <Spinner animation='border' role='status'></Spinner>
        </div>
      )}
      {data.name && (
        <Card
          className='mx-auto shadow p-3 mb-5 bg-body-tertiary rounded weather-card'
          style={{ maxWidth: '400px' }}
        >
          <Card.Body className='text-center'>
            <Card.Title>
              {data.name}, {data.sys.country}
            </Card.Title>
            <h3>{Math.round(data.main.temp)}°C</h3>
            <p className='text-capitalize'>{data.weather.description}</p>
            <div className='d-flex justify-content-between'>
              <small>Umidità: {data.main.humidity}%</small>
              <small>Vento: {data.wind.speed} m/s</small>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default SingleWeather;
