import { ENV } from '../config/env';
import { WeatherData } from '../../types/weather';

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  if (!city) throw new Error('Digite o nome da cidade.');

  try {
    const url = `${ENV.BASE_URL}?q=${city}&units=metric&lang=pt_br&appid=${ENV.API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Cidade não encontrada.');
    }

    const data = await response.json();

    const formattedData: WeatherData = {
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      main: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon
    };

    return formattedData;
  } catch (error) {
    throw error;
  }
};