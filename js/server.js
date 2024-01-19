const express = require("express")
const path = require('path');
const app = express()
app.listen(3000, () => {
    console.log("Server has started! Open http://localhost:3000")
})
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/submit', (req, res) => {
    const valuesFromHTML = req.body;
    console.log('Values from HTML:', valuesFromHTML);
    // Do something with the values (e.g., save to a database, process, etc.)
    // Sending a response to the client
    res.json({ message: 'Values received successfully!' });
});

const issuer_id = "3388000000022301521";
const class_suffix = "testeclube";
console.log("teste do bao")
// Import the demo class
const {DemoGeneric} = require('./demo-generic.js');
const Apple = require('./apple.js');
// Create a demo class instance
// Creates the authenticated HTTP client
let Google = new DemoGeneric();

// Google.createObject(issuer_id, class_suffix, object_suffix,NOME,CATEGORIA,VALIDADE,N_TITULO,EMISSAO);
// Google.createJwtExistingObjects(issuer_id,object_suffix,class_suffix);


// Create a pass class
//Google.createClass(issuer_id, class_suffix);

// Generate an Add to Google Wallet link that references existing pass object(s)
//Google.createJwtExistingObjects(issuer_id);
