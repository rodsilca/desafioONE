//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;

    if(amigo == ''){
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(amigo);
        adicionarLista();
        limparCampo();
    }
    
    console.log(amigos);
}

function adicionarLista(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';
    

    for(let i =0; i< amigos.length; i++){
        let amigo = document.createElement('li');
        amigo.innerHTML = amigos[i];
        lista.appendChild(amigo);    
    }
}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "O amigo secreto sorteado é: " + amigos[amigoSorteado];   
}

function limparCampo(){
    let campo = document.getElementById('amigo');
    campo.value = '';
}