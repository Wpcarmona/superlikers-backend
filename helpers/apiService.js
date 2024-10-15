const axios = require('axios');

/**
 * Función para hacer una solicitud POST al endpoint de Superlikers Labs
 * @param {string} campaign - El nombre de la campaña
 * @param {object} participation - Los datos de participación del usuario
 * @returns {Promise} - La respuesta de la API
 */
const createSession = async (campaign, participation) => {
  const url = 'https://api.superlikerslabs.com/v1/microsite/sessions';

  const data = {
    campaign,
    participation
  };

  try {
    const response = await axios.post(url, data);
    return response.data; // Devolver la respuesta de la API
  } catch (error) {
    console.error('Error al crear la sesión:', error.message);
    throw new Error('No se pudo crear la sesión');
  }
};

module.exports = {
  createSession
};
