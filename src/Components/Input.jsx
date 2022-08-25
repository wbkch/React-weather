
import { useWeather } from "../context/weather"
const Input =()=>{
    const weather= useWeather()
    

    return(
      
        <input className="input-field" 
        value={weather.searchCity}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        
        />

    
    )
}

export  default Input