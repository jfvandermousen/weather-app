import React, {useEffect,useState}  from 'react';
import './App.less';
import { WiDaySleetStorm } from "react-icons/wi";
import FavoritesLocation from './FavoritesLocation';
import { Button, Card, Col, Input, Row } from 'antd';
import Illu from './img/weather.svg';

// import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'antd';
// import { fetchWeather } from './redux/slices/weatherSlices';



function App() {

  // const dispatch = useDispatch();
  
  // useEffect(()=> {
  //   dispatch(fetchWeather('new york'))
  // },[])

const [apiData, setApiData] = useState({});
const [getState, setGetState] = useState('Brussels');
const [state, setState] = useState('tamilnadu');

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

const inputHandler = (event) => {
  setGetState(event.target.value);
};

const submitHandler = () => {
  setState(getState);
};

const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
};

useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
}, [apiUrl]);

return (
  <div className="App">
  <div className="container">
    <FavoritesLocation/>
    <WiDaySleetStorm />
    <div className="site-card-wrapper">
    <img src={Illu} className="illu" alt="weather illustartion" />
    <Row >
    <label for="location-name">
            Enter Location :
          </label>
          <Input 
           type="text"
           id="location-name"
           className="form-control"
           onChange={inputHandler}
           value={getState}/>
           <Button onClick={submitHandler}>Search</Button>
    
      <Col span={24}>
        <Card title="Card title" bordered={false}>
        {apiData.main ? (
          <div >
            <img
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="">
              {kelvinToFarenheit(apiData.main.temp)}&deg; C
            </p>

            <p className="">
              
              <strong>{apiData.name}</strong>
            </p>

            <div className="">
              <div className="">
                <p>
                  
                  <strong>
                    {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                  </strong>
                </p>
                <p>
                  
                  <strong>
                    {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                  </strong>
                </p>
              </div>
              <div className="">
                <p>
                  
                  <strong>{apiData.weather[0].main}</strong>
                </p>
                <p>
                  <strong>
                    
                    {/* {countries.getName(apiData.sys.country, 'en', {
                      select: 'official',
                    })} */}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        </Card>
      </Col>


    </Row>
  </div>,


  </div>
</div>
)

}




export default App;