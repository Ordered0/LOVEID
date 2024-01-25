const express = require("express")
const path = require('path');
const { PythonShell } = require('python-shell');
const {DemoGeneric} = require('./demo-generic.js');
let Google = new DemoGeneric();
const Apple = require('./apple.js');
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
    // console.log('Values from HTML:', valuesFromHTML);
    // let object_suffix = valuesFromHTML.NOME + valuesFromHTML.N_TITULO
    // Google.createObject(issuer_id, class_suffix, object_suffix,valuesFromHTML.NOME,valuesFromHTML.CATEGORIA,valuesFromHTML.VALIDADE,valuesFromHTML.N_TITULO,valuesFromHTML.EMISSAO);
    // let LINK = Google.createJwtExistingObjects(issuer_id,object_suffix,class_suffix);
    // res.json({ message: LINK });

    // Caminhos para as imagens de entrada e saída
    const inputImagePath = "C:/Users/rkoelln/Desktop/iagovargas.jpg";
    const outputImagePath = "C:/Users/rkoelln/Desktop/iagovargas2.png";
    console.log("olaaaaa")
    // Opções para o script Python
    const options = {
        mode: 'text',
        pythonOptions: ['-u'], // unbuffered output
        scriptPath: path.join(__dirname),
        args: [inputImagePath, outputImagePath],
    };
    console.log(options.scriptPath)
    // Executar o script Python
    PythonShell.run('teste.py', options, function (err, results) {
        if (err) {
            console.error('Erro ao executar o script Python:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
            console.log('Resultados do script Python:', results);
            // Enviar uma resposta ao cliente
            res.json({ message: 'Processamento concluído com sucesso' });
        }
    });
});



// Create a demo class instance
// Creates the authenticated HTTP client





// Create a pass class
//Google.createClass(issuer_id, class_suffix);

// Generate an Add to Google Wallet link that references existing pass object(s)
//Google.createJwtExistingObjects(issuer_id);
