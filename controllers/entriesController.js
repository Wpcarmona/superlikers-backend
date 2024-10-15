const { entriesService } = require('../helpers/entriesServices');

const fetchEntries = async (req, res) => {
    const requestData = req.body; 
    try {
        const data = await entriesService(requestData);
        return res.status(200).json(data); 
    } catch (error) {
        return res.status(500).json(error); 
    }
};

module.exports = {
    fetchEntries,
};
