var urlImagem
var arquivo
document.getElementById('input-imagem').addEventListener('change', function(e) {
    // Obtém o arquivo selecionado
    arquivo = e.target.files[0];

    if (arquivo) {
        // Cria um objeto URL para a imagem
        urlImagem = URL.createObjectURL(arquivo);
        // Define a URL da imagem como src do elemento img
        document.getElementById('imagem-preview').setAttribute('src', urlImagem);
    }
});
function submitForm() {
    const form = document.getElementById('myForm');
    const formData = {
        NOME: form.querySelector('#NOME').value,
        CATEGORIA: form.querySelector('#CATEGORIA').value,
        VALIDADE: form.querySelector('#VALIDADE').value,
        N_TITULO: form.querySelector('#N_TITULO').value,
        EMISSAO: form.querySelector('#EMISSAO').value,
        IMAGEM: arquivo
    };

    console.log('Form data:', formData);

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
}
