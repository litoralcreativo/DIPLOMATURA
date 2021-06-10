const express = require("express");
const router = express.Router();
const { send } = require("./../services/mail");

const register = (req, res) => {
  res.render("registro");
};

const create = (req, res) => {
  // destructuiring:
  // { body: usuario } = req
  // es lo mismo que
  // const usuario = req.body
  const { body: usuario } = req;
  console.log(usuario);
  send({ mail: usuario.mail, cuerpo: '<a href="">Link magico</a>' });
  res.redirect("/");
};

router.get("/", register);
router.post("/create", create);

module.exports = router;
