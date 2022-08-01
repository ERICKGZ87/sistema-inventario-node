import { Articulos } from "../models/articulos.js"; //importando el modelo



const pageInicio= (req, res) => {

  const data="me llamo erick"

  res.render("inicio",
  {data})

}


const pageArticulos = async (req, res) => {
    //consultar articulos  de BD

  const mensajeEliminado=false

    try{
      const articulosLista = await Articulos.findAll();
  
      res.render("articulos", {
        articulosLista,
        mensajeEliminado
      });
    }catch(err){console.log(err)}
    
  };

  const pageCrearArticulo = (req, res) => {
    //consultar articulos  de BD
  
    try{
      //const articulosLista = await Articulos.findAll();
  
    res.render("crearArticulo");
    }catch(err){console.log(err)}
    
  };

  export {
    pageArticulos,pageCrearArticulo,pageInicio
 
  };