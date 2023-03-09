import{createContext,useContext,useEffect,useState}from'react';
import citiesData from'../data/citiesData.json';
const key='d4eba4bb3a2cd6ed0bb563ded94832da';
const WeatherContext=createContext();
const WeatherProvider=({children})=>{
    const[selectedCity,setSelectedCity]=useState("Adana");
    const[weatherData,setWeatherData]=useState();
    const [loading, setLoading] = useState(true)
    const dayObj = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

const weatherContextData = {citiesData, selectedCity, weatherData, setSelectedCity, loading, dayObj }

useEffect(() => {
    const getCityWeatherData = async (selectedCity) => {
        setLoading(true)  
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&appid=${key}`).then( response => response.json() )
            setWeatherData(response)
            setLoading(false)
        } 
        catch(e){
            console.log("Veri alınırken bir hata oluştu", e)
            setLoading(true)
        }
    };
    getCityWeatherData(selectedCity)
}, [selectedCity]);
return <WeatherContext.Provider value={weatherContextData}>{children}</WeatherContext.Provider>
}  
const useWeatherContext = () => useContext(WeatherContext)

export {WeatherProvider, useWeatherContext }