const express = require('express')
const router = express.Router();
const persona = requiere('../controllers/PersonaController.js')


  router.post('persona/crearPersona',persona.crearPersona)  
  router.post('persona/leerPersona',persona.leerPersona)  
  router.post('persona/actualizarPersona',persona.actualizarPersona)  
  router.post('persona/borrarPersona',persona.borrarPersona)  

module.exports = router;