const router = require("express").Router();

const { Product } = require("../../db");
const { Detalle_venta } = require("../../db");
const { check, validationResult } = require("express-validator");
router.get("/visualizarP", async (req, res) => {
  let films = await Product.findAll();
  res.json(films);
});

router.get("/visualizarP/:id", async (req, res) => {
  const id = req.params.id;
  let films = await Product.findOne({ where: { id_producto: id } });
  res.json(films);
});

router.get("/visualizarC/:id", async (req, res) => {
  const id = req.params.id;
  let films = await Product.findAll({ where: { id_categoria: id } });
  res.json(films);
});

router.post(
  "/producto",
  [
    check("id_producto", "La cedula es obligatoria"),
    check("id_categoria", "El id es obligatoria").not().isEmpty(),
    check("nombre_producto", "La cedula es obligatoria").not().isEmpty(),
    check("estado", "El  Apellido es obligatoria").not().isEmpty(),
    check("imagen", "La contraseña es obligatoria").not().isEmpty(),
    check("stock", "La operacion obligatoria").not().isEmpty(),
    check("precio", "La operacion obligatoria").not().isEmpty(),
    check("descripcion", "El multiplo es obligatoria").not().isEmpty(),
  ],
  async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(422).json({ error: errores.array() });
    }
    let producto = await Product.create(req.body);
    res.json(producto);
  }
);

router.post(
  "/detalle_venta",
  [
    check("id_detalle", "La cedula es obligatoria"),
    check("cantidad", "El id es obligatoria").not().isEmpty(),
    check("precio", "La cedula es obligatoria").not().isEmpty(),
    check("id_producto", "El  Apellido es obligatoria").not().isEmpty(),
  ],
  async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(422).json({ error: errores.array() });
    }
    let detalle = await Detalle_venta.create(req.body);
    res.json(detalle);
  }
);
module.exports = router;
