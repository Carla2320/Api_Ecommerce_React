const router = require('express').Router();
const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validar-campos');

const { generarJWT } = require('../../helpers/jwt');

const { User } = require('../../db');

router.post('/login', 
    [
        check('cedula','Se necesita la cedula').isNumeric(),
        check('contrasenia_usuario','Se necesita la contraseña').isLength({ min: 6 }),
        validarCampos
    ],
    async (req, res) => {
        const { cedula, contrasenia_usuario } = req.body;

        try {
            let usuario = await  User.findOne( { where: { cedula: cedula } } );
            if ( !usuario ){
                return res.status(400).json({
                    ok: false,
                    msg: 'No existe usuario con esa cedula'
                });
            }

            if (usuario.contrasenia_usuario != contrasenia_usuario){
                return res.status(400).json({
                    ok: false,
                    msg: 'Contraseña incorrecta'
                });
            }
            
            const token = await generarJWT( usuario.cedula, usuario.nombre_usuario );

            res.json({
                ok:true,
                name: usuario.nombre_usuario,
                lastname: usuario.apellido_usuario,
                token
            })

        } catch (error) {
            res.status(500).json({
                ok:false,
                msg: 'habla con el administrador'
            })
        }

        
});


router.post('/', async (req, res) => {
    const userC = await User.create(req.body);
    res.json(userC);
});

module.exports = router;