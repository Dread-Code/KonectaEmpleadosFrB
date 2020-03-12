const express = require('express');
const router = express.Router();
const Usuario =require('../models/users');

router.get('/',async(req,res)=>{
    
    const usuarios = await Usuario.find();
    
    res.render('index',{
        usuarios
    });
})

router.get('/list',async(req,res)=>{
    
    const usuarios = await Usuario.find();
    
    res.render('list',{
        usuarios
    });
})

router.post('/add',(req,res)=>{

    let body = req.body;

    let usuario = new Usuario(body);

    usuario.save(((err,usuarioDB)=>{

        if (err) {
            return res.status(400).json({
                ok:false,
                err
            });
        }
        // usuarioDb.password = null;

        res.redirect('/');
    }));

});

router.get('/edit/:cedula',async(req,res)=>{

    let cedula  = req.params.cedula;
    let usuario = await Usuario.findOne({cedula:cedula});
    console.log(usuario);
    res.render('edit',{
        usuario
    });

});

router.post('/edit/:cedula',async(req,res)=>{

    let cedula  = req.params.cedula;
    let body = req.body;

    await Usuario.findOneAndUpdate({cedula:cedula},body);
    
    res.redirect('/');

});

router.get('/delete/:cedula',async(req,res)=>{

    let cedula  =req.params.cedula;

    await Usuario.findOneAndRemove({cedula : cedula});

    res.redirect('/');


});

module.exports = router;