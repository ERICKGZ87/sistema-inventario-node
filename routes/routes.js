import express from 'express'
import {pageArticulos,pageCrearArticulo,pageInicio} from "../controllers/paginasControles.js"
import {GuardarArticulos} from "../controllers/GuardarArticulo.js"
import {EliminarProducto} from "../controllers/EliminarArticulo.js"
import {EditarArticulos} from "../controllers/editarArticulo.js"
import {GuardarEdicionArticulo} from "../controllers/GuardarEdicionArticulo.js"

const router=express.Router() // instance exppres utilizando su router

//rutas 
router.get("/",pageInicio)

router.get("/articulos",pageArticulos)

router.get("/crearArticulo",pageCrearArticulo)
router.post("/crearArticulo",GuardarArticulos)

router.get("/editarArticulo/:id",EditarArticulos)
router.post("/editarArticulo/:id",GuardarEdicionArticulo)

router.get('/articulo/:id',EliminarProducto )

export default router;