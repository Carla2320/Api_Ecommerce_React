const router = require('express').Router();

const { User } = require('../../db');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', async (req, res) => {
    const userC = await User.create(req.body);
    res.json(userC);
});

module.exports = router;