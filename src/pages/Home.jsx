import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CreditTable from '../components/CreditTable';
import { getCreditByNumero } from '../services/api';

const Home = () => {
    const [creditData, setCreditData] = useState(null);

    const handleSearch = async (searchTerm) => {
        try {
            const data = isNaN(searchTerm)
                 await getCreditByNumero(searchTerm);
            setCreditData(data);
        } catch (error) {
            console.error('Erro ao buscar crédito:', error);
            setCreditData(null);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Consulta de Créditos</h1>
            <SearchBar onSearch={handleSearch} />
            <CreditTable data={creditData} />
        </div>
    );
};

export default Home;
