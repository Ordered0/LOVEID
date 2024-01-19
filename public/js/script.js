// const btn = document.querySelector("#gerar");
// let valores = {};
// function recebeValores(){
//     btn.addEventListener("click",function(e){
//         e.preventDefault()
//         valores = {
//             LINK: document.querySelector("#LINK").value,
//             NOME: document.querySelector("#NOME").value,
//             CATEGORIA: document.querySelector("#CATEGORIA").value,
//             VALIDADE: document.querySelector("#VALIDADE").value,
//             N_TITULO: document.querySelector("#N_TITULO").value,
//             EMISSAO: document.querySelector("#EMISSAO").value,
//         };
//         valores.object_suffix = valores.NOME + valores.N_TITULO;
//     });
//     return valores;
    
// }

// module.exports.recebeValores = recebeValores;
// script.js

function submitForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    fetch('/submit', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
    })
    .then(response => response.json())
    .then(data => {
        // Update the result div with the received message
        document.getElementById('LINK').innerHTML = data.message;
    })
    .catch(error => console.error('Error:', error));
}
