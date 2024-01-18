const btn = document.querySelector("#gerar");
let valores = {};
function recebeValores(){
    btn.addEventListener("click",function(e){
        e.preventDefault()
        valores = {
            LINK: document.querySelector("#LINK").value,
            NOME: document.querySelector("#NOME").value,
            CATEGORIA: document.querySelector("#CATEGORIA").value,
            VALIDADE: document.querySelector("#VALIDADE").value,
            N_TITULO: document.querySelector("#N_TITULO").value,
            EMISSAO: document.querySelector("#EMISSAO").value,
        };
        valores.object_suffix = valores.NOME + valores.N_TITULO;
    });
    return valores;
    
}

module.exports.recebeValores = recebeValores;
