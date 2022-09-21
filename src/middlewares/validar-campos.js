const { response } = require("express");
const { validationResult } = require("express-validator");


const validarCampos = (req, res = response, next) => {

    const isErrors = validationResult(req);
    if(!isErrors.isEmpty()){
        return res.status(400).json({
            ok: false,
            error: isErrors.mapped()
        })
    }
    next();
}

module.exports= {
    validarCampos
}