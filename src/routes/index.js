const express = require('express');
const router = express.Router();
const Usuario = require('../models/users');
const {getAnio} = require('../utilities/utilities')
const moment = require('moment')

//==============================
// Renderiza la ruta Index
//==============================
router.get('/',async(req,res)=>{
    
    const usuarios = await Usuario.find();
    
    res.render('index',{
        usuarios
    });
});
//==============================
// Obtiene los usuarios y los muestra en la tabla 
//==============================

router.get('/list',async(req,res)=>{
    
    const usuarios = await Usuario.find();
    
    res.render('list',{
        usuarios
    });
});

//==============================
// Se supone que serviria :v actualizacion a futuro
//==============================

//==============================
// Agraga un usuario desde el formulario index
//==============================

router.post('/add',(req,res)=>{

    let body = req.body;
    
    let usuario = new Usuario({
        nombre: body.nombre,
        cedula: body.cedula,
        telefono: body.telefono,
        direccion: body.direccion,
        fechaNacimiento: moment(body.fechaNacimiento).format('l'),
        genero: body.genero,
        edad: getAnio(body.fechaNacimiento),
        cliente: body.cliente,
        sede: body.sede 
    });

    usuario.save(((err,usuario)=>{
        
        if (err) {
            return res.status(400).json({
                ok:false,
                err
            });
        }
       
        console.log(usuario);
        res.redirect('/list');
    }));

});
//==============================
// Al hacer click en editar lanza un nuevo formulario 
//==============================

router.get('/edit/:cedula',async(req,res)=>{

    let cedula  = req.params.cedula;
    let usuario = await Usuario.findOne({cedula:cedula});
    console.log(usuario);
    res.render('edit',{
        usuario
    });

});



//==============================
// edita el usuario desde el formulario 
//==============================
router.post('/edit/:cedula',async(req,res)=>{

    let cedula  = req.params.cedula;
    let body = req.body;

    await Usuario.findOneAndUpdate({cedula:cedula},body);
    
    res.redirect('/list');

});
//==============================
// Elimina un usuario 
//==============================

router.get('/delete/:cedula',async(req,res)=>{

    let cedula  =req.params.cedula;

    await Usuario.findOneAndRemove({cedula : cedula});

    res.redirect('/list');

});

module.exports = router;