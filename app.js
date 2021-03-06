//OBS: SE FOR RODAR EM LOCALHOST, TEM QUE ADICIONAR O .app EM TODAD AS ROTAS

/*
ex:
em produção:
application.controllers.cadastro.cadastrar(application, req, res);

em localhost:
application.app.controllers.cadastro.cadastrar(application, req, res);
*/


/* importar as configurações do servidor */
var app = require('./config/server');
require('./app/controllers')
require('express');

// Using Node.js `require()`
const mongoose = require('mongoose')
const db = require("./config/dbConnection")


//conecta ao banco
mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(() => { console.log("Conectado ao mongo\n\n") }).catch((err) => { console.log("ERRROOO AO CONECTAR : " + err) })




/* parametrizar a porta de escuta */
const PORT = process.env.PORT || 80;
app.listen(PORT, function () {
	console.log('Servidor online');
})