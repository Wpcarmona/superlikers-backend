const axios = require('axios');

const BASE_URL = 'https://api.superlikerslabs.com/v1/entries/index';

const entriesService = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data);
        return response.data;
    } catch (error) {
        const errorData = error.response ? error.response.data : { message: error.message };
        throw errorData 
    }
};

module.exports = {
    entriesService,
};
