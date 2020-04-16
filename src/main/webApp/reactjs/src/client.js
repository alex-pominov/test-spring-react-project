import axios from 'axios';

export const getAllstrudents = () => axios.get('http://localhost:8080/students');
