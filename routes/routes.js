import express from 'express'
import {pageArticulos} from "../controllers/paginasControles.js"

const router=express.Router() // instance exppres utilizando su router

//rutas 
router.get("/",(req,res)=>{

    const data="me llamo erick"

    res.render("inicio",
    {data})
})

router.get("/articulos",pageArticulos)

router.get("/Crear-articulo",(req,res)=>{

    res.send("articulos")
})

export default router;