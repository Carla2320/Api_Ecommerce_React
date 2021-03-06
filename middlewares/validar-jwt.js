const { response } = require('express');
const jwt = require('jsonwebtoken');

const validatJWT = (req, res = response, next) => {
    const token = req.header('x-token');
    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'No estas autenticado (sin token)'
        });
    }
    try {
        const { id, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

        req.id = id;
        req.name = name
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'No estas autenticado (token inválido)'
        })
    }

    next();
}

module.exports = {
    validatJWT
}