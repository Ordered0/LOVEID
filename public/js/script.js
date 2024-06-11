function submitForm(acao) {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    console.log(formData);

    const loadercontainer = document.getElementById("loader-container");
    loadercontainer.style.display = "flex";
    
    fetch("/" + acao, {
        method: 'POST',
        body: formData, // Envie os dados do formulário diretamente
    })
    .then(response => response.json())
    .then(data => {
        loadercontainer.style.display = "none";
        if(data.message == 'errpy'){
            document.getElementById('LINK').innerHTML = "Aconteceu um erro no processamento da imagem";
        }else{
            document.getElementById('LINK').innerHTML = "Adicionar a carteira";
            document.getElementById('LINK').setAttribute("href", data.message);
            console.log(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        loadercontainer.style.display = "none";
    });
}