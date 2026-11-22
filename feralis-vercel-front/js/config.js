// Dirección del servidor: local en tu computadora, Vercel en Internet
// Cambia la segunda URL por la de tu back publicado (sin barra final)
const API_URL =
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : 'https://mi-revista-back.vercel.app';
