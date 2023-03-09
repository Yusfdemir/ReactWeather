import { useWeatherContext } from "../context/Weather";
import React from 'react'
import './Dropdown.css';
function Dropdown() {
    const {citiesData, selectedCity, setSelectedCity, weatherData, loading, dayObj} = useWeatherContext()
  return (
    <div className="dropdown">
      <div>
      <select onChange={(e)=>{setSelectedCity(e.target.value)}}>
        {
            citiesData ?citiesData.map((city)=>{
                return(
                    <option key={city.id} value={city.name}>{city.name}</option>
                )
            }):null
        }
      </select>
      </div>
    </div>
  )
}

export default Dropdown
