"use strict"

const mongoose = require("mongoose");

// primero definimos un esquema

const anuncioSchema = mongoose.Schema({
    name: String,
    status: String,
    img: String,
    pvp: Number,
    tags: [String]
});

// Creamos un metodo estatico para recuperar agentes paginados

anuncioSchema.statics.list = function(filter, limit, skip, fields, sort, cb) {
    const query = Anuncio.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.exec(cb);
    query.select(fields);
    query.sort(sort);
};

// Y luego creamos el modelo
var Anuncio = mongoose.model("Anuncio", anuncioSchema);

// no necesitamos exportar el modelo ya que podríamos recuperarlo en cualquier momento con:

// var Agente = mongoose.model("Agente");
