let enviar = document.getElementById('inSubmit');
let nome = document.getElementById('inNome');
let idade = document.getElementById('inIdade');
let qtd = document.getElementById('inProd');
let mail = document.getElementById('inEmail');

// enviar.addEventListener("submit", gravarNome());


function gravarNome() {
    localStorage.setItem("nome", nome.value)
    localStorage.setItem("idade", idade.value)
    localStorage.setItem("qtd", qtd.value)
    localStorage.setItem("mail", mail.value)
}

var usuario = {
    'nome': localStorage.getItem("nome")
}

function mostrar() {
    console.log(localStorage.getItem("nome"));
}