import './App.css';
import axios from 'axios';
import React,{useState} from 'react';
function App() {
  const [location,setlocation]=useState("");
  const [data,setdata]=useState({});
  const api=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8115a91b171a365891c968a0a398ddae`;
  const search=()=>{
    axios.get(api).then((response)=>{
      setdata(response.data);
    })
    setlocation('');
  }
  return (
    <div className="App">
      <div className='header'>
        <h3>WEATHER REPORT FOR THE PLACE</h3>
        <div className='getinput'>
        <input onChange={event=>setlocation(event.target.value)} value={location} placeholder='Enter The Place...'></input>
        <button onClick={search}>Search</button>
        </div>
      </div>
      <div className='weatherbody'>
          <div className='placedata'>
          <p>PLACE : {data.name}</p>
          <p>TEMPERATURE : {data.main ? data.main.temp:null}°F</p>
          </div>
          <div className='type'>
            <p>WEATHER TYPE</p>
          <div className='weathertype'>{data.weather ? data.weather[0].main:null}</div>
          </div>
      </div>
      <div className='bottom'>
      <div className='bottomvalue'>
        <div className='Wind'><h2>Wind Speed</h2><p>{data.wind ? data.wind.speed:null} MPH</p></div>
        <div className='humidity'><h2>Humidity</h2><p>{data.main ? data.main.humidity:null} %</p></div>
        <div className='pressure'><h2>Pressure</h2><p>{data.main ? data.main.pressure:null} MB</p></div>
      </div>
      </div>
    </div>
  );
}

export default App;
