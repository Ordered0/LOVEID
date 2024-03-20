function submitForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form); // Use FormData para enviar os dados do f>

    fetch('/submit', {
        method: 'POST',
        body: formData, // Envie os dados do formulário diretamente
    })
    .then(response =>{
        response.json()
        console.log(response.json);
    } )
    .then(data => {
        console.log("data1")
        // Update the result div with the received message
        document.getElementById('LINK').innerHTML = "Adicionar a carteira";
        console.log("data2")
        document.getElementById('LINK').setAttribute("href", data.message);
        console.log("data3")
    })
    .catch(error => console.error('Error:', error));
}