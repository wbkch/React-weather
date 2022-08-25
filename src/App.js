
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './context/weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather()
  console.log(weather)

useEffect(()=>{
  weather.fetchCurrentLocation()
},[])

  return (
    <div className="App">
      
      <h1 className='heading'>Weather Forcast</h1>
      <Input/>
      <Button value="Search" onClick={weather.fetchData} />
      <Card/>
     

    </div>
  );
}

export default App;
