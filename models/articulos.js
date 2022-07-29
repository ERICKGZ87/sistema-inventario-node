import Sequelize from "sequelize";
import db from "../config/db.js"

export const Articulos=db.define("articulos",{
    
nombre:{
    type:Sequelize.STRING
},
stock:{
    type:Sequelize.INTEGER
}
})