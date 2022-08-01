import { Articulos } from "../models/articulos.js"; //importando el modelo

const GuardarEdicionArticulo= async (req, res) => {

const {id,nombre,stock}=req.body

const campos=[id,nombre,stock].every(campo=>campo !=="")

if(campos){

    try{
        await Articulos.update({ nombre,stock }, {
            where: {
              id: id
            }
          });
            //res.redirect("/articulos")

            res.render("editarArticulo",{campos,id,nombre,stock})

    }catch(err){console.log(err.parent.sqlMessage)}
}else{
    res.render("editarArticulo",{campos,id,nombre,stock})
   
}

}

export {
    GuardarEdicionArticulo
}