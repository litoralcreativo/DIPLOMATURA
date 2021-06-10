const pool = require("./../utils/bd");
const T_PRODUCTOS = "productos";
const T_CATEGORIAS = "categorias";

const getAll = async () => {
  try {
    const query =
      "SELECT p.nombre, p.id, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id ";
    const params = [T_PRODUCTOS, T_CATEGORIAS];
    return await pool.query(query, params);
  } catch (e) {
    console.log(e);
  }
};

const getSingle = async (id) => {
  try {
    const query =
      "SELECT p.nombre, p.id, p.ts_update AS modificacion, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.id = ?";
    const params = [T_PRODUCTOS, T_CATEGORIAS, id];
    return await pool.query(query, params);
  } catch (e) {
    console.log(e);
  }
};

const crearProducto = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [T_PRODUCTOS, obj];
  return await pool.query(query, params);
};

module.exports = { getAll, getSingle, crearProducto };
