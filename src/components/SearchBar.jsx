import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container" style={{ display: 'flex', gap: '10px', width: '100%', marginBottom: '0.5rem' }}>
            <input
                type="text"
                className="glass-input"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="glass-btn" onClick={handleSearch} aria-label="Search">
                <Search size={24} />
            </button>
        </div>
    );
};

export default SearchBar;
