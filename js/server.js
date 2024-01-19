const express = require("express")
const path = require('path');
const {DemoGeneric} = require('./demo-generic.js');
let Google = new DemoGeneric();
const Apple = require('./apple.js');
const { link } = require("fs/promises");
const app = express()
app.listen(3000, () => {
    console.log("Server has started! Open http://localhost:3000")
})
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
const issuer_id = "3388000000022301521";
const class_suffix = "testeclube";
app.post('/submit', (req, res) => {
    const valuesFromHTML = req.body;
    console.log('Received POST request:', valuesFromHTML);
    console.log('Values from HTML:', valuesFromHTML);
    let object_suffix = valuesFromHTML.NOME + valuesFromHTML.N_TITULO
    Google.createObject(issuer_id, class_suffix, object_suffix,valuesFromHTML.NOME,valuesFromHTML.CATEGORIA,valuesFromHTML.VALIDADE,valuesFromHTML.N_TITULO,valuesFromHTML.EMISSAO);
    let LINK = Google.createJwtExistingObjects(issuer_id,object_suffix,class_suffix);
    // Sending a response to the client
    res.json({ message: LINK });
});


// Import the demo class

// Create a demo class instance
// Creates the authenticated HTTP client





// Create a pass class
//Google.createClass(issuer_id, class_suffix);

// Generate an Add to Google Wallet link that references existing pass object(s)
//Google.createJwtExistingObjects(issuer_id);
