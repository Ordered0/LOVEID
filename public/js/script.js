function submitForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form); // Use FormData para enviar os dados do f>

    fetch('/submit', {
        method: 'POST',
        body: formData, // Envie os dados do formulário diretamente
    })
    .then(response => response.json())
    .then(data => {
        // Update the result div with the received message
        document.getElementById('LINK').innerHTML = "Adicionar a carteira";
        document.getElementById('LINK').setAttribute("href", data.message);
        console.log(data.message);
    })
    .catch(error => console.error('Error:', error));
}