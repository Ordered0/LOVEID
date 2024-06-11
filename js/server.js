//declaração das bibliotecas e arquivos linkados
const express = require("express");
const path = require('path');
const {DemoGeneric} = require('./demo-generic.js');
let Google = new DemoGeneric();
const fs = require('fs');
const { spawn } = require("child_process");
const bodyParser = require('body-parser');
const multer = require('multer');
const db = require('./database');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server has started! Open http://localhost:3000")
});
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const issuer_id = "3388000000022301521";
const class_suffix = "testeclube";

// Configuração do multer para lidar com o upload de imagens
let nomeArquivo, nomeAleatorio;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    nomeAleatorio = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    nomeArquivo = nomeAleatorio + fileExtension;
    cb(null, nomeArquivo);
  }
});
const upload = multer({ storage: storage });

//funcao que chama o python para trabalhar com as imagens
function cortaFundo(Foto, nomeAleatorio, callback) {
  const pythonProcess = spawn('/home/LOVEID/js/myenv/bin/python3', ["/home/LOVEID/js/ajeitaImagem.py",Foto,nomeAleatorio]);
  pythonProcess.on('exit', (code) => {
    if(callback){
      callback(code);
    }
  });
}

// Rota para gerar um card nao existente
app.post('/novo', upload.single('image'), (req, res) => {
  const valuesFromHTML = req.body;

  console.log('Values from HTML: ' + JSON.stringify(valuesFromHTML) + '\n');

  // faz o processamento da imagem com python
  cortaFundo(nomeArquivo,nomeAleatorio,(code) =>{
    if(code != 0){
      res.json({ message:'errpy'});
    }
  });
  
  
  //aqui define o codigo do cartão, neste caso é o nome sem espaços e maiusculo + o numero do ditulo
  let object_suffix = valuesFromHTML.NOME.replace(/\s/g, '').toUpperCase() + valuesFromHTML.N_TITULO;
  
  console.log(nomeAleatorio + ".png");
  //chama a função que cria o objeto do cartão
  Google.createObject(
      issuer_id,
      class_suffix,
      object_suffix,
      valuesFromHTML.NOME.toUpperCase(),
      valuesFromHTML.CATEGORIA.toUpperCase(),
      valuesFromHTML.VALIDADE,
      valuesFromHTML.N_TITULO,
      valuesFromHTML.EMISSAO,
      nomeAleatorio + ".png"
  );

  //gera o link para que poçamos adicionar o cartão
  let LINK = Google.createJwtExistingObjects(issuer_id, object_suffix, class_suffix);
  res.json({ message: LINK });
});

//atualiza as informações de um card
app.post('/atualiza', upload.single('image'), (req, res) => {
const valuesFromHTML = req.body;

console.log('Values from HTML: ' + JSON.stringify(valuesFromHTML) + '\n');

// faz o processamento da imagem com python
if(cortaFundo(Foto,nomeAleatorio)!=0){
  res.json({ message:'errpy'});
}

//aqui define o codigo do cartão, neste caso é o nome sem espaços e maiusculo + o numero do ditulo
let object_suffix = valuesFromHTML.NOME.replace(/\s/g, '').toUpperCase() + valuesFromHTML.N_TITULO;

//chama a função que cria o objeto do cartão
Google.patchObject(
    issuer_id,
    object_suffix
);

//gera o link para que poçamos adicionar o cartão
let LINK = Google.createJwtExistingObjects(issuer_id, object_suffix, class_suffix);
res.json({ message: LINK });
});

//exclui um card
app.post('/excluir',(req, res) => {
const valuesFromHTML = req.body;

console.log('Values from HTML: ' + JSON.stringify(valuesFromHTML) + '\n');

//aqui define o codigo do cartão, neste caso é o nome sem espaços e maiusculo + o numero do ditulo
let object_suffix = valuesFromHTML.NOME.replace(/\s/g, '').toUpperCase() + valuesFromHTML.N_TITULO;

//chama a função que cria o objeto do cartão
Google.expireObject(
    issuer_id,
    object_suffix
);

//gera o link para que poçamos adicionar o cartão
let LINK = Google.createJwtExistingObjects(issuer_id, object_suffix, class_suffix);
res.json({ message: LINK });
});




/* const queryTeste = `
  INSERT INTO usuario (cod_usuario, email)
  VALUES($1,$2)
  RETURNING *;`;
  db.query(queryTeste,[1,"email.com"])
  .then(result => {
  // A inserção foi bem-sucedida
    console.log('Inserção bem-sucedida:', result.rows[0]);
  })
  .catch(err => {
    // Trate o erro adequadamente
    console.error('Erro ao inserir dados:', err);
  });
  */