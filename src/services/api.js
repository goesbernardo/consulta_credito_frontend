import axios from 'axios';

const API_URL = 'http://localhost:8080/api/creditos';

export const getCreditByNfse = async (numeroNfse) => {
    const response = await axios.get(`${API_URL}/nfse/${numeroNfse}`);
    return response.data;
};

export const getCreditByNumero = async (numeroCredito) => {
    const response = await axios.get(`${API_URL}/credito/${numeroCredito}`);
    return response.data;
};
