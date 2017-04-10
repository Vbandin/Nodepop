"use strict";

const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    user_name: String,
    email: String,
    password: String
});

var Usuario = mongoose.model('Usuario', usuarioSchema);

/*const usuario = new Usuario({
 user_name: "prueba1",
 email: 'test@example.com',
 password: '1234'
 });
 usuario.save();*/