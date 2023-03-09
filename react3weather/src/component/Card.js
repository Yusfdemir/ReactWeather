import { useWeatherContext } from "../context/Weather";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCloud,faSun,faCloudShowersHeavy,faSnowflake}from '@fortawesome/free-solid-svg-icons'
import './Card.css';

const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
let weekDay=date.getDay()+1;
const dateString=""+`${year}-${month<10 ?"0"+(month+1):month}-${day<10 ? "0"+day:day}`;

const chooseIcon=(weather)=>{
    if(weather==="Clouds")
        return(<FontAwesomeIcon icon={faCloud} size={"3x"}></FontAwesomeIcon>);
    else if(weather==="Clear")
        return(<FontAwesomeIcon icon={faSun} size={"3x"}></FontAwesomeIcon>);
    else if(weather==="Rain")
        return(<FontAwesomeIcon icon={faCloudShowersHeavy} size={"3x"}></FontAwesomeIcon>);
    else if(weather==="Snow")
        return(<FontAwesomeIcon icon={faSnowflake}size={"3x"}></FontAwesomeIcon>);
    else 
        return (<FontAwesomeIcon icon={faSnowflake}size={"3x"}></FontAwesomeIcon>);
}

function Card() {
    const { selectedCity, weatherData, loading, dayObj} = useWeatherContext()

    if(loading){
        return(<div className="loading">Loading...</div>)
    }

    return (
    <div className="card-container">
        <div className="card-title"><h3>{selectedCity}</h3></div>
        <div className="card-body">
        {
        weatherData.list.map((data,index)=>{
            weekDay++;
            if(index%8==0)   
            return(
                <div key={index} className={`card-item ${dateString==(data.dt_txt.split(" "))[0] ? "today-card":""}`}>
                    <div className="card-item-date">
                        <span>{`${(data.dt_txt.split(" "))[0]}`}</span>
                        <span>{dayObj[weekDay%7]}</span>
                    </div>
                    <div className="card-item-icon">{chooseIcon(data.weather[0].main)}</div>
                    <div className="card-item-info">
                        <span>{`Minimum Sıcaklık:${data.main.temp_min}`}</span>
                        <span>{`Maximum Sıcaklık:${data.main.temp_max}`}</span>
                    </div>
                     
                </div>    
            )
        })
      }
        </div>
    </div>
  )
}
export default Card
