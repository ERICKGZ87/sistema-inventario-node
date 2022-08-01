//sintaxis commonjs
//const express= require('express');

import express from 'express'
import router from './routes/routes.js'
import db from "./config/db.js"
import bodyParser from 'body-parser'
import { Articulos } from "./models/articulos.js"; //importando el modelo

const app= express(); //instancia de express

//agregar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//definir puerto

const port=process.env.PORT || 4000;

//autenticar base de datos

db.authenticate()
.then(()=>{console.log("base de datos conectada")})
.catch(err=>{console.log(err)})

//agregar router

app.use("/",router);



//habilitar pug

app.set("view engine","pug")



//midleware

app.use(async (req,res,next)=>{

res.locals.dataNueva=await Articulos.findAll();
const {dataNueva}=res.locals
//console.log(dataNueva)
    
next();
        
 })

 
//app.use(express.urlencoded({extended: true}))

//definir carpeta publicas

app.use(express.static("public"))



//app.use(express.json());




// escuchar y probar el puerto
app.listen(port,()=>{

    console.log(`escuchando en el puerto,${port}`)
})



