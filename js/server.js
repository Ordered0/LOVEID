const express = require("express");
const path = require('path');
const { DemoGeneric } = require('./demo-generic.js');
const fs = require('fs');
const { spawn } = require("child_process");
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, () => {
    console.log("Server has started! Open http://localhost:3000")
});

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = fs.createWriteStream("log.txt");

const issuer_id = "3388000000022301521";
const class_suffix = "testeclube";

app.post('/submit', (req, res) => {
    const valuesFromHTML = req.body;
    // Logging
    logger.write('Values from HTML: ' + JSON.stringify(valuesFromHTML) + '\n');

    // Extracting image data from the request
    const imageData = valuesFromHTML.IMAGEM;
    // Decoding base64 image data
    const base64Image = imageData.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Image, 'base64');

    // Writing the image file
    fs.writeFile('/home/codigos-pessoais/public/imagens/temp.png', buffer, (err) => {
        if (err) {
            logger.write(err);
            res.status(500).send('Error saving the image');
            return;
        }

        // Once the image is saved, you can proceed with further processing
        const pythonProcess = spawn('python', ["ajeitaImagem.py"]);

        pythonProcess.on('exit', (code) => {
            console.log(`Python process exited with code ${code}`);

            // Create object and generate LINK here
            let object_suffix = valuesFromHTML.NOME + valuesFromHTML.N_TITULO;
            Google.createObject(
                issuer_id,
                class_suffix,
                object_suffix,
                valuesFromHTML.NOME,
                valuesFromHTML.CATEGORIA,
                valuesFromHTML.VALIDADE,
                valuesFromHTML.N_TITULO,
                valuesFromHTML.EMISSAO
            );

            let LINK = Google.createJwtExistingObjects(issuer_id, object_suffix, class_suffix);

            res.json({ message: LINK });
        });
    });
});
