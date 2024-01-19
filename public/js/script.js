function submitForm() {
    const form = document.getElementById('myForm');
    const formData = {
        NOME: form.querySelector('#NOME').value,
        CATEGORIA: form.querySelector('#CATEGORIA').value,
        VALIDADE: form.querySelector('#VALIDADE').value,
        N_TITULO: form.querySelector('#N_TITULO').value,
        EMISSAO: form.querySelector('#EMISSAO').value
    };

    console.log('Form data:', formData);
    console.log(formData.NOME);

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
