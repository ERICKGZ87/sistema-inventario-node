import { Articulos } from "../models/articulos.js"; //importando el modelo
import {Op} from "sequelize"

const EliminarProducto= async (req, res) => {

    const {id} = req.params

  const mensajeEliminado=true


    try {
        await Articulos.destroy({
            where:{
                id:{
                    [Op.eq]:id
                }

            }
        })

        const articulosLista = await Articulos.findAll();
  
        // res.render("articulos", {
        // articulosLista,
        // mensajeEliminado})

        res.redirect("/articulos")
        
    }catch(err) {console.log(err)}


 
    
}

export {
    EliminarProducto
}




