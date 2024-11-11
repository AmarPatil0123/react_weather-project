import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Navbar = ({setWeatherData}) => {

    let [city, setCity] = useState("");
    let [toggle , setToggle] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${apiKey}`;
    

    function handleOnChange(event){
        setCity(event.target.value)
    }

    function toggleNavbar(){
        setToggle(!toggle);
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            let res= await fetch(URL);
            let data = await res.json();
    
            let whetherData={
                city : data.name,
                feels_like : `${data.main.feels_like}°C`,
                temp : `${data.main.temp}°C`,
                maxTemp : data.main.temp_max,
                minTemp : data.main.temp_min,
                description : data.weather[0].main,
                humidity : `${data.main.humidity}%`,
                wind_speed : `${data.wind.speed} m/s`,
                sunrise:data.sys.sunrise,
                sunset:data.sys.sunset,
                pressure : `${data.main.pressure} hPa`,
                visibility : `${data.visibility}`
    
            }
            console.log(data)
            setWeatherData(whetherData);
            setCity("");
            toggleNavbar();

        }catch(err){
            if(!navigator.onLine){
                toast.error("You are offline");
                toggleNavbar();
                return ;
            }
            toast.error("Not found the details");
            setCity("")
        }
     
        
    }

    return (
        <nav className='Navbar'>
            <img src="./weather_logo.webp" alt="" className='logo'/>
            <form action="" className={`search ${ toggle ? 'toggle' : ''}`} onSubmit={handleSubmit}>
                <input type="text" placeholder='Search City' value={city} onChange={handleOnChange} required/>
                <Button variant="contained" color="success" size="large" type='submit' >Search</Button>
                <ToastContainer position="top-right" className="toastMsg" autoClose={3000} pauseOnHover={false} />
            </form>
           
            <i className={`fa-solid fa-bars hamburger ${ toggle ? 'fa-solid fa-xmark' : ''}`} onClick={toggleNavbar}></i>

        </nav>
    )
}
