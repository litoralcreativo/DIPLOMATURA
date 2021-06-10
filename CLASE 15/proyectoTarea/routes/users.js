var express = require("express");
var router = express.Router();
const { getAll, getSingle, crearUsuario } = require("./../models/users");

/* GET users listing. */

const all = async (req, res) => {
  const usuarios = await getAll();
  res.render("users", { usuarios });
};

const single = async (req, res) => {
  const { id } = req.params;
  const [usuario] = await getSingle(id);
  console.log(usuario);
  res.render("user", { usuario });
};

const create = async (req, res) => {
  const { body: producto } = req;
  const messageId = await crearUsuario(producto);
  res.redirect("/users");
};

const getCreate = async (req, res) => {
  res.render("crearUsuario");
};

router.get("/", all);
router.get("/single/:id", single);
router.get("/create", getCreate);
router.post("/create", create);

module.exports = router;
