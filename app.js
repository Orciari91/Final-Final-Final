const express = require("express")

const servidor = express()

const puerto = 80

const publico = express.static("docs") 
//Configurar directorio "/docs" como carpeta publica
servidor.use(publico)

servidor.get("/", function(request, response){ //<-- Endpoint

	response.send("<h1>Hola desde <u> App </u>! </h1>")

})
//servidor.post()
//servidor.put()
//servidor.delete()

servidor.listen(puerto)