const router = require("express").Router();
const { Sesion } = require("../../db");
const { check, validationResult } = require("express-validator");
router.post("/ingreso",
  [
    check("token", " token obligatorio").not().isEmpty(),
    check("id_usuario", "El id es obligatorio").not().isEmpty(),
    check("fecha_inicio", "La hora_inicio es obligatoria").not().isEmpty(),
    check("fecha_fin", "hora_fin es obligatoria"),
    check("transaccion", "La transaccion es obligatoria"), 
    check("num_errores", "La num_errores obligatoria").not().isEmpty(),
    
  ],
  async (req, res) => {
    const errores = validationResult(req);
    console.log(req.body.fecha_inicio);
    if (!errores.isEmpty()) {
      return res.status(422).json({ error: errores.array() });
    }
    let usuario = await Sesion.create(req.body);
    res.json(usuario);
  }
);

router.post("/actualizarFecha", async(req,res) => {
  const { token, fecha_fin} = req.body;
  try {
    const usuario = await Sesion.findOne({ where: { token: token } });
    usuario.fecha_fin = fecha_fin;
    await usuario.save();
    res.json({
        ok: true,
        usuario
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error, Contactate con soporte para mas información",
    });
  }
});
module.exports = router;