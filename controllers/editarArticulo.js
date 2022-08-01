import { Articulos } from "../models/articulos.js"; //importando el modelo

const EditarArticulos = async (req,res) => {

    const {id}= req.params;
    
    if(id){

        const resultado= await Articulos.findOne({
            where: {id:id},
        })
      
       if(resultado){
        const {nombre,stock}= resultado
        res.render('editarArticulo',{id:id,nombre:nombre,stock:stock})
       }


    }
    
 

}

export {EditarArticulos}