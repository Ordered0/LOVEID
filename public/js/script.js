// document.getElementById('input-imagem').addEventListener('change', function(e) {
//     // Obtém o arquivo selecionado
//     var arquivo = e.target.files[0];

//     if (arquivo) {
//         // Cria um objeto URL para a imagem
//         var urlImagem = URL.createObjectURL(arquivo);
//         // Define a URL da imagem como src do elemento img
//         document.getElementById('imagem-preview').setAttribute('src', urlImagem);
//     }
// });
function submitForm() {
    const form = document.getElementById('myForm');
    const formData = {
        NOME: form.querySelector('#NOME').value,
        CATEGORIA: form.querySelector('#CATEGORIA').value,
        VALIDADE: form.querySelector('#VALIDADE').value,
        N_TITULO: form.querySelector('#N_TITULO').value,
        EMISSAO: form.querySelector('#EMISSAO').value,
        IMAGEM: '',
    };
    console.log(formData);
    // Read the image file
    const imageFile = form.querySelector('#input-imagem').files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        formData.IMAGEM = event.target.result

        fetch('/submit', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            // Update the result div with the received message
            document.getElementById('LINK').innerHTML = "Adicionar a carteira";
            document.getElementById('LINK').setAttribute("href", data.message);
        })
        .catch(error => console.error('Error:', error));
    };

    reader.readAsDataURL(imageFile);
}