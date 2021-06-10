const pool = require("./../utils/bd");
const T_USUARIOS = "usuarios";

const getAll = async () => {
  try {
    const query = "SELECT u.username, u.id, u.pass FROM ?? AS u";
    const params = [T_USUARIOS];
    return await pool.query(query, params);
  } catch (e) {
    console.log(e);
  }
};

const getSingle = async (id) => {
  try {
    const query = "SELECT u.username, u.id, u.pass FROM ?? AS u WHERE u.id = ?";
    const params = [T_USUARIOS, id];
    return await pool.query(query, params);
  } catch (e) {
    console.log(e);
  }
};
const crearUsuario = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [T_USUARIOS, obj];
  return await pool.query(query, params);
};

module.exports = { getAll, getSingle, crearUsuario };
