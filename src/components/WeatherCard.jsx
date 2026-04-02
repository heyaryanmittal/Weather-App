import React from 'react';
import {
    Cloud,
    Sun,
    CloudRain,
    Snowflake,
    Zap,
    CloudDrizzle,
    CloudLightning,
    Wind,
    Droplets,
    Thermometer
} from 'lucide-react';

const getWeatherIcon = (weatherId, size = 64) => {
    if (weatherId >= 200 && weatherId < 300) return <CloudLightning size={size} />;
    if (weatherId >= 300 && weatherId < 500) return <CloudDrizzle size={size} />;
    if (weatherId >= 500 && weatherId < 600) return <CloudRain size={size} />;
    if (weatherId >= 600 && weatherId < 700) return <Snowflake size={size} />;
    if (weatherId >= 700 && weatherId < 800) return <Wind size={size} />;
    if (weatherId === 800) return <Sun size={size} />;
    return <Cloud size={size} />;
};

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { name, main, weather, wind, sys } = data;
    const temp = Math.round(main.temp);
    const feelsLike = Math.round(main.feels_like);
    const humidity = main.humidity;
    const speed = Math.round(wind.speed * 3.6);
    const description = weather[0].description;
    const weatherId = weather[0].id;
    const country = sys.country;

    return (
        <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', color: '#fff', padding: '1.5rem', width: '100%', overflow: 'hidden' }}>
            <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', marginBottom: '0.25rem', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{name}, {country}</h2>
            <p style={{ fontSize: '1rem', textTransform: 'capitalize', opacity: 0.9, marginBottom: '1rem' }}>
                {description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {getWeatherIcon(weatherId, 80)}
            </div>

            <div style={{ fontSize: 'clamp(2.5rem, 10vw, 3.5rem)', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: 1 }}>
                {temp}°
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>Feels like {feelsLike}°</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                gap: '0.75rem',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '1rem',
                width: '100%'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                    <Droplets size={24} />
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Humidity</span>
                    <span style={{ fontWeight: 'bold' }}>{humidity}%</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                    <Wind size={24} />
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Wind</span>
                    <span style={{ fontWeight: 'bold' }}>{speed} km/h</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                    <Thermometer size={24} />
                    <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Pressure</span>
                    <span style={{ fontWeight: 'bold' }}>{main.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
