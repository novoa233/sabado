const { query } = require('../config/db')
const connection = require('../config/db')

//operaciones Create Rread Update Delete

cosnt createPersona = (request,response) =>{
    connection.query

    response.json({message:"Creando Persona"})

}

cosnt leerPersona = (request,response) =>{
    response.json({message:"Leyendo Persona"})
    
}

cosnt actualizarPersona = (request,response) =>{
    response.json({message:"Actualizando Persona"})
    
}

cosnt borrarPersona = (request,response) =>{
    response.json({message:"Borrando Persona"})
    
}

module.exports = {
    crearPersona,
    leerPersona,
    actualizarPersona,
    borrarPersona,

}