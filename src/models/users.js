const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let generos ={
    values:['Masculino','Femenino','Otro']
}

let usuarioSchema = new Schema({

    nombre:{
        type: String,
        required: [true,'Ingrese el nombre completo por favor']
    },
    cedula:{

        type: Number,
        required: [true, ' La cedula es necesaria']
    },  
    telefono: {
        type: Number,
        required: [true, ' El telefono es requerido']
    },
    direccion:{
        type: String,

    },
    fechaNacimiento:{
        type: Date,
        required: [true, 'La fecha es requerida']
    },
    genero:{
        type:String,
        enum: generos
    },
    cliente:{
        type: String,
        required: [true,'Ingrese la empresa a la cual le presta el servicio']
    },
    sede:{
        type: String,
        required:[true, 'Se requiere la sede donde trabaja']
    },
    estado:{
        type: Boolean,
        default:true
    }
});

module.exports = mongoose.model('Usuario',usuarioSchema);