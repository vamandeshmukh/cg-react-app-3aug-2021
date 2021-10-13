import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherByCityName } from '../../redux/WeatherSlice';
import '../common/common.css';
const GetWeather = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather.weatherState);

    const [displayOneWeather, setDisplayOneWeather] = useState({
        date: '',
        minTemp: 0.0,
        maxTemp: 0.0,
        message: ''
    });
    const [oneWeather, setOneWeather] = useState({
        cityName: ''
    });


    const handleOneWeatherData = (evt) => {
        setOneWeather({
            ...oneWeather,
            [evt.target.name]: evt.target.value
        });
    }

    const submitGetWeatherByCityName = (evt) => {
        console.log("submitGetWeatherByCityName");
        axios.get(`http://localhost:8086/weather/getForcast?cityName=${oneWeather.cityName}`)
            .then(async (response) => {
                await dispatch(getWeatherByCityName(response.data));
                setDisplayOneWeather(response.data);
            }).catch(async (error) => {
                await setDisplayOneWeather(`${error.message}: Invalid city name`);
                console.log(error.message);
            });
        evt.preventDefault();
    }

    return (
        <div className="weather_container" >
            <h1 className="display-1 text-info bg-light p-3 mb-2 font-weight-bold justify-content-center "><u>Get Weather</u></h1>

            <div >
                <h4 className="bg-light border border-success "><u>Get Weather</u></h4>
                <form className="form form-group form-dark row mt-3 span font-weight-bold font-italic jumbotron d-flex justify-content-center border border-success" data-testid="invalid-form">
                    <input
                        type="text"
                        id="cityName"
                        //adding test-jest
                        data-testid="cityname"
                        name="cityName"
                        className="form-control mb-3"
                        value={oneWeather.cityName}
                        placeholder="City Name"
                        onChange={handleOneWeatherData}
                    />
                    <input
                        type="submit"
                        id="submit"
                        data-testid="submitCity"
                        name="submit"
                        className="btn btn-primary mb-3 submit2 border border-success submit_button"
                        value="Get Weather Details"
                        onClick={submitGetWeatherByCityName}
                    />
                </form>
                {/* conditional rendering with displayOneEmp and setDisplayOneEmp */}
                <div className="container p-2">
                    <div className="row">

                        <p className="bg-light border border-success span bg-light ">
                            <p>{`Date: ${displayOneWeather.date}`} </p>
                            <p>{displayOneWeather.minTemp} </p>
                            <p>{displayOneWeather.maxTemp} </p>
                            <p>{displayOneWeather.message} </p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GetWeather;