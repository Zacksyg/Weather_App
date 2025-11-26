import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator, 
  Keyboard, 
  SafeAreaView,
  StatusBar 
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 

// Imports
import { getWeatherByCity } from './src/services/weatherService';
import { styles } from './src/styles/appStyles';
import { getWeatherTheme } from './src/utils/weatherUtils';
import { WeatherData } from './types/weather';

export default function App() {
  // Tipagem explícita dos estados
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const theme = weather 
    ? getWeatherTheme(weather.main, weather.temp) 
    : { icon: 'weather-partly-cloudy', color: '#2C3E50', bg: '#FAFAFA' } as const;

  const handleSearch = async () => {
    if (!city.trim()) return;

    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      // TypeScript não sabe que 'err' é um Error object por padrão no catch
      setError('Cidade não encontrada ou erro de conexão.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.bg} />
      
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Weather App</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma cidade..."
            placeholderTextColor="#999"
            value={city}
            onChangeText={setCity}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity 
            style={[styles.searchButton, { backgroundColor: loading ? '#CCC' : '#2C3E50' }]} 
            onPress={handleSearch}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
              // @ts-ignore: O nome do ícone é dinâmico, TS pode reclamar se não for estrito
              <MaterialCommunityIcons name={theme.icon} size={24} color="#FFF" />
            )}
          </TouchableOpacity>
        </View>

        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {weather && (
          <View style={styles.weatherCard}>
            <Text style={styles.cityName}>{weather.name}</Text>
            <Text style={styles.weatherDesc}>{weather.description}</Text>

            {/* @ts-ignore */}
            <MaterialCommunityIcons 
              name={theme.icon} 
              size={120} 
              color={theme.color} 
            />

            <Text style={[styles.temperature, { color: theme.color }]}>
              {Math.round(weather.temp)}°
            </Text>

            <View style={styles.detailsContainer}>
              <View style={styles.detailItem}>
                <MaterialCommunityIcons name="water-percent" size={24} color="#666" />
                <Text style={styles.detailLabel}>Umidade</Text>
                <Text style={styles.detailValue}>{weather.humidity}%</Text>
              </View>

              <View style={styles.detailItem}>
                <MaterialCommunityIcons name="weather-windy" size={24} color="#666" />
                <Text style={styles.detailLabel}>Vento</Text>
                <Text style={styles.detailValue}>{weather.wind} m/s</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}