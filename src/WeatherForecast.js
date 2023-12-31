import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (false);

useEffect (() => {
    setLoaded (false);
}, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true)
;}

if (loaded) {
return(
    <div className="WeatherForecast">
    <div className="row">
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
           
                return (
                    <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/> 
                </div>
                );
            } else {
                return null;
            }
                })}
    </div>
    </div>
    );

} else {

        let apiKey = "4450193655b89ad11e87727415cd630f";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    return null;
    
}}