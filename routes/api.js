const router = require("express").Router();

const apiUserRouter = require("./api/user");
const apiProductUser = require("./api/products");
const apiSesion = require("./api/sesionUser");


router.use("/user", apiUserRouter);
router.use("/user", apiProductUser);
router.use("/sesion", apiSesion);
module.exports = router;
