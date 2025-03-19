import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [numeroCredito, setNumeroCredito] = useState('');

    const handleSearch = () => {
        if (numeroCredito.trim()) {
            onSearch(numeroCredito);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Digite o número do crédito"
                value={numeroCredito}
                onChange={(e) => setNumeroCredito(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default SearchBar;
