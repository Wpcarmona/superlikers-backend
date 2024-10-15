const Role = require("../models/roleModel");
const Usuario = require("../models/usersModel");

const esRolevalido = async (role = "") => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error(`el rol ${role} no esta registrado en la BD`);
  }
};

const emailExiste = async (email = "") => {
  //verificar si el correo existe

  const existeEmail = await Usuario.findOne({ email: email.toUpperCase() });
  if (existeEmail) {
    throw new Error(`el email ya existe en la base de datos`);
  }
};

const existeUsuarioPorId = async (id) => {
  //verificar si el correo existe

  const existeId = await Usuario.findById(id);
  if (!existeId) {
    throw new Error(`el ID: ${id}, no existe.`);
  }
};

const phoneNumberiquals = async (phone) => {
  const phoneExiste = await Usuario.findOne({ phone });

  if (phoneExiste) {
    throw new Error(`el numero: ${phone}, ya esta registrado.`);
  }
};

// validar colecciones permitidas

const colectionsAccess = (colection = "", colections = []) => {
  const incluida = colections.includes(colection);

  if (!incluida) {
    throw new Error(`la coleccion ${colection} no es permitida, ${colections}`);
  }

  return true;
};

module.exports = {
  esRolevalido,
  emailExiste,
  existeUsuarioPorId,
  colectionsAccess,
  phoneNumberiquals,
};
