import axios from 'axios'

// Domyślna konfiguracja backendu
export const api = axios.create({
  baseURL: 'http://localhost:3001/api', // ← zmień na adres swojego backendu
  withCredentials: false, // jeśli używasz ciasteczek / sesji
})
