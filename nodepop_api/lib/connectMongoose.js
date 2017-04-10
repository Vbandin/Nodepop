"use strict"

const mongoose = require("mongoose");

const conn = mongoose.connection;

// Le decimos a mongoose que libreria de promesas va a usar.
mongoose.Promise = global.Promise;

// Suscribirnos a los posibles errores de conexion
conn.on("error", function (err) {
    console.log("Error de conexion:", err);
    process.exit(1);
});

conn.once("open", function () {
    console.log("Conectado a MongoDB.");
});

// Realizar la conexion
mongoose.connect("mongodb://localhost:27017/nodepop");