const { createSession } = require('../helpers/apiService');


const postCreateSession = async (req, res) => {
  const { campaign, participation } = req.body;

  try {
    const response = await createSession(campaign, participation);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  postCreateSession
};
