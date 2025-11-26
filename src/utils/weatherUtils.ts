import { WeatherTheme } from '../../types/weather';

export const getWeatherTheme = (weatherMain: string, temp: number): WeatherTheme => {
  const condition = weatherMain ? weatherMain.toLowerCase() : '';

  if (condition === 'clear') {
    return { icon: 'weather-sunny', color: '#f7b733', bg: '#FFF5E6' };
  } else if (condition.includes('rain') || condition.includes('drizzle')) {
    return { icon: 'weather-pouring', color: '#005BEA', bg: '#E6F0FF' };
  } else if (condition.includes('snow')) {
    return { icon: 'weather-snowy', color: '#00d2ff', bg: '#E6FBFF' };
  } else if (condition.includes('clouds')) {
    return { icon: 'weather-cloudy', color: '#7f8c8d', bg: '#F2F4F6' };
  } else if (condition.includes('thunderstorm')) {
    return { icon: 'weather-lightning', color: '#4834d4', bg: '#EFEEFC' };
  }
  return { icon: 'weather-fog', color: '#95a5a6', bg: '#F5F5F5' };
};