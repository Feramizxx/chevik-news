import { useEffect, useState } from "react";
import axios from 'axios';
import useCurrentLocation from "./useCurrentLocation";

const WEATHER_ERROR_VALUE = -404;

const useWeather = () => {
    const { long, lat } = useCurrentLocation();
    const [weather, setWeather] = useState(WEATHER_ERROR_VALUE);
    const [isWeatherLoading, setIsWeatherLoading] = useState(true);
    const { weatherError, setWeatherError } = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            setWeather(response.data.main.temp);
        } catch (error) {
            setWeatherError(error);
        } finally {
            setIsWeatherLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { weather, isWeatherLoading, weatherError }
}

export default useWeather;