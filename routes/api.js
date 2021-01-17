const router = require("express").Router();

const apiUserRouter = require("./api/user");
const apiProductUser = require("./api/products");

router.use("/user", apiUserRouter);
router.use("/user", apiProductUser);
module.exports = router;
