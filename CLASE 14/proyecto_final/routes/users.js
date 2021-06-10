var express = require("express");
var router = express.Router();

/* GET users listing. */

const usuarios = [
  {
    id: 1,
    nombre: "Gaston",
    apellido: "Chatelet",
  },
  {
    id: 2,
    nombre: "Leo",
    apellido: "Messi",
  },
  {
    id: 3,
    nombre: "Luis",
    apellido: "Spinetta",
  },
  {
    id: 4,
    nombre: "Bob",
    apellido: "Esponja",
  },
];

const listar = (req, res) => {
  res.render("users", { usuarios });
};

const single = (req, res) => {
  const { id } = req.params;
  const usuario = usuarios.find((u) => u.id == id);
  console.log(id);
  res.render("single", { usuario });
};

router.get("/", listar);
router.get("/single/:id", single);

module.exports = router;
