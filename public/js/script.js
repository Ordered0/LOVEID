function submitForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    console.log(formData);

    const loadercontainer = document.getElementById("loader-container");
    loadercontainer.style.display = "flex";

    fetch('/submit', {
        method: 'POST',
        body: formData, // Envie os dados do formulário diretamente
    })
    .then(response => response.json())
    .then(data => {
        loadercontainer.style.display = "none";
        document.getElementById('LINK').innerHTML = "Adicionar a carteira";
        document.getElementById('LINK').setAttribute("href", data.message);
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        loadercontainer.style.display = "none";
    });
}