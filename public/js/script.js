function submitForm(acao) {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    const loadercontainer = document.getElementById("loader-container");
    loadercontainer.style.display = "flex";

    if (acao === 'excluir') {
        formData.delete('image');  // Remove o campo da imagem para a ação de exclusão
    }
    console.log(formData);
    
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
            document.getElementById('LINK').innerHTML = data.message;
            document.getElementById('LINK').setAttribute("href", data.link);
            console.log(data.link);
            if(data.imagem){
                imagem = '/imagens' + data.imagem;
                document.getElementById('imagem-preview').setAttribute("src",imagem);
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        loadercontainer.style.display = "none";
    });
}