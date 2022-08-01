import { Articulos } from "../models/articulos.js"; //importando el modelo
import swal from 'sweetalert';

const GuardarArticulos= async (req,res) => {

    const {nombre,stock}=req.body

const campos=[nombre,stock].every(campo=>campo !=="")

if(campos){

    try{
        await Articulos.create({nombre,stock})

        res.render("crearArticulo",{
            campos
        })
    }
    catch(err){console.log(err);}
}else{
    res.render("crearArticulo",{
        campos
    })
 

}

}

export {
    GuardarArticulos
}