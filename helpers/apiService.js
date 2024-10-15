const axios = require('axios');

/**
 * Función para hacer una solicitud POST al endpoint de Superlikers Labs
 * @param {string} campaign
 * @param {object} participation 
 * @returns {Promise} 
 */
const createSession = async (campaign, participation) => {
  const url = 'https://api.superlikerslabs.com/v1/microsite/sessions';

  const data = {
    campaign,
    participation
  };

  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    const errorData = error.response ? error.response.data : { message: error.message };
    throw errorData; 
  }
};

module.exports = {
  createSession
};
