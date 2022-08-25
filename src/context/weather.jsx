
import { createContext ,useContext,useState} from "react";
import { getWeatherDataforCity ,getWeatherDataforLocation} from "../api";

const weatherContext= createContext(null)

export const useWeather =()=>{
   return useContext(weatherContext)
}

export const WeatherProvider= (props)=>{
    const [data,setData] =useState(null);
    const [searchCity, setSearchCity]= useState(null)

    const fetchData =async()=>{
       const response= await getWeatherDataforCity(searchCity)
       setData(response)
    }

    const fetchCurrentLocation= async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataforLocation(position.coords.latitude,position.coords.longitude).then(data=>setData(data))
        })
    }

    return(
    <weatherContext.Provider value={{data, searchCity,setSearchCity,fetchData,fetchCurrentLocation}}>
        {props.children}
    </weatherContext.Provider>
    )
}
