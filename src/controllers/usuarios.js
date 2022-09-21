const Usuario = require('../../models/usuario');
const { response } = require('express')
const bcrypt = require('bcryptjs')

const getUsuarios = async (req, res) => {
    
    const usuarios = await Usuario.find({}, 'nombre email role google');

    res.json({
        ok: true,
        usuarios
    })
}

const postUsuario = async (req, res = response) => {
    const { nombre, password, email } = req.body;

    try {
        const isExistEmail = await Usuario.findOne({email});
        if(isExistEmail) {
            return res.json({
                ok: false,
                msg: 'El email ingresado ya esta tiene una cuenta asignada'
            });
        };
        const usuario = new Usuario(req.body);
        //Encriptar password
        console.log(usuario)
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password)
        //Guardar usuario
        await usuario.save();
    
        res.json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado creando usuario... revisar logs'
        })
    }
}

module.exports = {
    getUsuarios,
    postUsuario
}