"use strict";

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();
const localConfig = require('../../localConfig');

const Usuario = mongoose.model('Usuario');

// POST - autenticacion de usuarios
router.post('/authenticate', function(req, res, next) {

    // recogemos credenciales
    const userName = req.body.username;
    const password = req.body.password;

    // Buscamos en la base de datos
    Usuario.findOne({email: userName}).exec(function(err, user) {
        if (err) {
            return next(err);
        }

        // si encontramos el usuario
        if (!user) {
            return res.json({succes: false, error: 'Usuario no encontrado'});
        }

        // comprobamos su password
        if (password !== user.password) {
            return res.json({succes: false, error: 'Password erronea'});
        }

        // creamos un token
        jwt.sign({ user_id: user._id}, localConfig.jwt.secret, {
            expiresIn: localConfig.jwt.expiresIn
        }, function(err, token) {
            // respondemos al usuario dándole el token
            res.json({success: true, token});
        });
    });

});
// POST - alta de usuarios
router.post('/new', function(req, res, next) {
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    /*const userName = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const usuario = new Usuario({
     user_name: userName,
     email: email,
     password: password
    });
    usuario.save();*/
    return res.json({succes: true, message: 'Usuario dado de alta'}), next;
});

module.exports = router;
