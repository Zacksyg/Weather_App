export interface WeatherData {
  name: string;
  temp: number;
  description: string;
  main: string;
  humidity: number;
  wind: number;
  icon: string;
}

// Define o formato do tema visual
export interface WeatherTheme {
  icon: 'weather-sunny' | 'weather-pouring' | 'weather-snowy' | 'weather-cloudy' | 'weather-lightning' | 'weather-fog';
  color: string;
  bg: string;
}