import React, { useState } from 'react'
import './WeatherApp.css'
import searchi from '../Assests/search.png'
import clear from '../Assests/clear.png'
import cloud from '../Assests/cloud.png'
import drizzle from '../Assests/drizzle.png'
import rain from '../Assests/rain.png'
import snow from '../Assests/snow.png'
import wind from '../Assests/wind.png'
import humidity from '../Assests/humidity.png'

const WeatherApp = () => {

    let api_key = "181c4c32c13a61346cec3eed0b83d899";

    const [wicon,setWicon]=useState("cloud");

    const search = async() => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data=await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature=document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=Math.floor(data.wind.speed)+" km/hr";
        temperature[0].innerHTML=data.main.temp +" c";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" )
        {
            setWicon(clear);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow);
        }
        else
        {
            setWicon(clear);
        }
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={searchi} alt="search" />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt="cloud" />
        </div>
        <div className="weather-temp">24*c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-speed">18 km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp