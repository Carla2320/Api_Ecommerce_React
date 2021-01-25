const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { validarCampos } = require("../../middlewares/validar-campos");
const { validatJWT } = require("../../middlewares/validar-jwt");
const { generarJWT } = require("../../helpers/jwt");
const bcrypt = require("bcryptjs");
const { User } = require("../../db");

router.post("/registrar",
  [
    check("cedula", "La cedula es obligatoria").not().isEmpty(),
    check("id_rol", "El id es obligatoria").not().isEmpty(),
    check("nombre_usuario", "La cedula es obligatoria").not().isEmpty(),
    check("apellido_usuario", "El  Apellido es obligatoria").not().isEmpty(),
    check("contrasenia_usuario", "La contraseña es obligatoria")
    .not()
    .isEmpty(),
    check("operacion", "La operacion obligatoria").not().isEmpty(),
    check("multiplo", "El multiplo es obligatoria").not().isEmpty(),
  ],
  async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(422).json({ error: errores.array() });
    }
    req.body.contrasenia_usuario = bcrypt.hashSync(
      req.body.contrasenia_usuario,
      10
    );
    let usuario = await User.create(req.body);
    res.json(usuario);
  }
);

router.post("/login",[
    check("cedula", "Se necesita la cedula").isNumeric(),
    check("contrasenia_usuario", "Se necesita la contraseña").isLength({min: 6}),
    validarCampos,
  ], async (req, res) => {
    const { cedula, contrasenia_usuario } = req.body;
    try {
      let usuario = await User.findOne({ where: { cedula: cedula } });
      if (!usuario) {
        return res.status(400).json({
          ok: false,
          msg: "Contraseña incorrecta",
        });
      }
      const token = await generarJWT(
        usuario.cedula,
        usuario.nombre_usuario,
        usuario.operacion
      );
      res.json({
        ok: true,
        token,
        usuario,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "habla con el administrador",
      });
    }
  }
);

router.get("/renew", validatJWT, async (req, res) => {
  const { id, name } = req;
  let usuario = await User.findOne({ where: { cedula: id } });
  const token = await generarJWT(usuario.cedula, usuario.nombre_usuario);

  res.json({
    ok: true,
    usuario,
    token,
  });
});

router.post("/addCard", async(req,res) => {
    const { cedula, numero, tipo, date, cvs } = req.body;
    try {
      const userCard = await User.findOne({ where: { cedula: cedula } });
      const old = userCard.tarjeta? userCard.tarjeta:JSON.parse('{}');
      const numCard = Object.keys(old).length;
      const newCardJson = `{"${numCard+1}": {"numero": ${numero},"tipo": "${tipo}","date": "${date}", "cvs": ${cvs}} }`;
      const newCard = JSON.parse(newCardJson);
      userCard.tarjeta = {...old, ...newCard };
      await userCard.save();
      res.json({
          ok: true,
          userCard
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Ha ocurrido un error, Contactate con soporte para mas información",
      });
    }
});

module.exports = router;
