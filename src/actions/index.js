import axios from 'axios';


const API_KEY = '5cdd62585de1d87131c394ce3593539e';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},nl`;
    const request = axios.get(url);

   // console.log('Request: ', request);

    return {
      type: FETCH_WEATHER,
      payload: request 
    };
}