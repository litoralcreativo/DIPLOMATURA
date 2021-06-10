const express = require("express");
const router = express.Router();
const { getAll, getSingle, crearProducto } = require("./../models/productos");

const all = async (req, res) => {
  const productos = await getAll();
  res.render("productos", { productos });
};
const single = async (req, res) => {
  const { id } = req.params;
  const [producto] = await getSingle(id);
  const date = `${producto.modificacion
    .getDate()
    .toString()
    .padStart(2, "0")}/${producto.modificacion
    .getMonth()
    .toString()
    .padStart(
      2,
      "0"
    )}/${producto.modificacion.getFullYear()} - ${producto.modificacion
    .getHours()
    .toString()
    .padStart(2, "0")}:${producto.modificacion
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${producto.modificacion
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  console.log(date);
  res.render("producto", { producto, date });
};
const create = async (req, res) => {
  const { body: producto } = req;
  const messageId = await crearProducto(producto);
  res.redirect("/productos");
};
const getCreate = async (req, res) => {
  res.render("crearProducto");
};

router.get("/", all);
router.get("/single/:id", single);
router.get("/create", getCreate);
router.post("/create", create);
module.exports = router;
