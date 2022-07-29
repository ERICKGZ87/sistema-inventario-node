//sintaxis commonjs
//const express= require('express');

import express from 'express'
import router from './routes/routes.js'
import db from "./config/db.js"

const app= express(); //instancia de express

//definir puerto

const port=process.env.PORT || 4000;

//agregar router

app.use("/",router);

//habilitar pug

app.set("view engine","pug")

//definir carpeta publicas

app.use(express.static("public"))

//autenticar base de datos

db.authenticate()
.then(()=>{console.log("base de datos conectada")})
.catch(err=>{console.log(err)})


// escuchar y probar el puerto
app.listen(port,()=>{

    console.log(`escuchando en el puerto,${port}`)
})

