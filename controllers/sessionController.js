const { createSession } = require('../helpers/apiService');

// Controlador para manejar la creación de sesiones
const postCreateSession = async (req, res) => {
  const { campaign, participation } = req.body;

  try {
    const response = await createSession(campaign, participation);
    return res.status(200).json({
      msg: 'Sesión creada con éxito',
      data: response
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear la sesión',
      error: error.message
    });
  }
};

module.exports = {
  postCreateSession
};
