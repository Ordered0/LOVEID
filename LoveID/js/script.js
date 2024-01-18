const btn = document.querySelector("#gerar");
function recebeValores(){
    btn.addEventListener("click",function(e){
        e.preventDefault();
    
        const LINK = document.querySelector("#LINK").value;
        const NOME = document.querySelector("#NOME").value;
        console.log(NOME);
        const CATEGORIA = document.querySelector("#CATEGORIA").value;
        const VALIDADE = document.querySelector("#VALIDADE").value;
        const N_TITULO = document.querySelector("#N_TITULO").value;
        const EMISSAO = document.querySelector("#EMISSAO").value;
        const object_suffix = NOME + N_TITULO;
    });
}
