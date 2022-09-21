// INFO: Ruta /api/usuarios
const { Router } = require('express');
const { getUsuarios, postUsuario } = require('../controllers/usuarios')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();

router.get('/', getUsuarios)

router.post(
    '/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'Requiere contraseña').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        validarCampos,
    ], 
    postUsuario
)


module.exports = router;