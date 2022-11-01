import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Climate = ({visible, setVisible}) => {
     
    const[weather, setWeather]=useState({})
    const[temp, setTemp]=useState(true)
    const[counter, setCounter]=useState(0)
    
    useEffect(()=>{
        setCounter(counter+1);
        if(counter===1){
            setVisible(true);
        }
    },[weather])

   useEffect(()=>{
       
    const success = pos =>{
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8ff7fbd98a23702097dd68ef3c9fb352`)
                .then(res => setWeather(res.data));
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])
        const iconImage = weather.weather?.[0].icon;
        
        console.log(weather);
    return (

        <div className='background' style={{backgroundImage: `url("https://github.com/CciClo/weatherOpen/raw/main/weatherOpen/${iconImage}.gif")` }}>
          <div  className='container'>  
            <h1>Weather App</h1>
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <div className='secondContainer' >
            <div className='left'>
            <img className='img' src={`http://openweathermap.org/img/wn/${iconImage}@2x.png`} alt="" />
            <h3 className='temperature'>{temp ? Math.floor(weather.main?.temp - 273.15) : 
            Math.floor((weather.main?.temp - 273.15) * 9/5 + 32)}
              {temp ? "°C" : "°F"}
            </h3>
            </div>
            <div className='right'>     
            <h3><i className="fa-solid fa-cloud-sun"></i> {weather.weather?.[0]?.description}</h3>
            <h4><i className="fa-solid fa-droplet"></i> Humidity: {weather.main?.humidity}%</h4>
            <h4><i className="fa-solid fa-wind"></i> Speed: {weather.wind?.speed}m/s</h4>
            </div>
            </div>
            <button className='button' onClick={() => setTemp(!temp)}>°C/°F</button>
            
            </div>
        </div>
    );
};

export default Climate;