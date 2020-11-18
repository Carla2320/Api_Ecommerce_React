const router = require('express').Router();

const apiUserRouter = require('./api/user');

router.use('/user', apiUserRouter);

module.exports = router;