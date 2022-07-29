import { Articulos } from "../models/articulos.js"; //importando el modelo


const pageArticulos = async (req, res) => {
    //consultar articulos  de BD
  
    try{
      const articulosLista = await Articulos.findAll();
  
      res.render("articulos", {
        articulosLista,
      });
    }catch(err){console.log(err)}
    
  };

  export {
    pageArticulos
 
  };