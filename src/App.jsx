import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDefault = async () => {
      setLoading(true);
      try {
        const data = await fetchWeather('London');
        setWeatherData(data);
      } catch (err) {
        console.error("Default fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDefault();
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container" style={{
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '0.5rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '0.5rem',
        textShadow: '0 4px 10px rgba(0,0,0,0.3)',
        fontWeight: '800'
      }}>
        Weather
      </h1>


      <div className="glass-panel" style={{ padding: '1rem' }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div style={{ minHeight: 'auto' }}>
        {loading && (
          <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', padding: '3rem' }}>
            <div className="loading-spinner" style={{
              width: '40px',
              height: '40px',
              border: '4px solid rgba(255,255,255,0.3)',
              borderTop: '4px solid #fff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}></div>
            <p>Fetching forecast...</p>
          </div>
        )}

        {error && (
          <div className="glass-panel animate-fade-in" style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 107, 107, 0.2)',
            borderColor: 'rgba(255, 107, 107, 0.4)'
          }}>
            <p style={{ color: '#ffcbcb', fontSize: '1.2rem' }}>{error}</p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
