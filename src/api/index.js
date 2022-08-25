
const baseUrl ='http://api.weatherapi.com/v1/current.json?key=6971e9b865c54612857113841222408&'

export const getWeatherDataforCity= async(city)=>{
    const reponse = await fetch(`${baseUrl}&q=${city}&aqi=no`)
    return await reponse.json()
}

export const getWeatherDataforLocation= async(lat,lon)=>{
    const reponse = await fetch(`${baseUrl}&q=${lat}, ${lon}&aqi=no`)
    return await reponse.json()
}