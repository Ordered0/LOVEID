const express = require("express")
const bodyParser = require('body-parser');
const app = express()
app.listen(3000, () => {
    console.log("Server has started! Open http://localhost:3000")
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

const issuer_id = "3388000000022301521";
const class_suffix = "testeclube";
console.log("teste do bao")
// Import the demo class
const {DemoGeneric} = require('./demo-generic.js');
const Apple = require('./apple.js');
const object = require('./script.js');
// Create a demo class instance
// Creates the authenticated HTTP client
let Google = new DemoGeneric();

// app.post('/submit', (req, res) => {
//     const NOME = req.body.NOME;
//     const CATEGORIA = req.body.CATEGORIA;
//     const VALIDADE = req.body.VALIDADE;
//     const N_TITULO = req.body.N_TITULO;
//     const EMISSAO = req.body.EMISSAO;
//     const object_suffix = NOME + N_TITULO;
//     Google.createObject(issuer_id, class_suffix, object_suffix,NOME,CATEGORIA,VALIDADE,N_TITULO,EMISSAO);
//     res.send(Google.createJwtExistingObjects(issuer_id,object_suffix,class_suffix));
// });
Google.createObject(issuer_id, class_suffix, object_suffix,NOME,CATEGORIA,VALIDADE,N_TITULO,EMISSAO);
Google.createJwtExistingObjects(issuer_id,object_suffix,class_suffix)


// Create a pass class
//Google.createClass(issuer_id, class_suffix);

// Generate an Add to Google Wallet link that references existing pass object(s)
//Google.createJwtExistingObjects(issuer_id);
