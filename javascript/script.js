

const nome = document.getElementById("nome").value;
const idade = document.getElementById("idade").value;
const endereco = "Mongaguá";

function verificador() {
event.preventDefault();

const nome = document.getElementById("nome").value;
const idade = document.getElementById("idade").value;
   const resultado = document.getElementById("resultado");

resultado.innerHTML = ' Seu nome é ${nome}, você tem ${nome} anos ';


if (idade < 16) {
  resultado.innerHTML = ' ${nome}, Não pode votar, você tem ${idade} anos ';
}else if (idade < 18 || idade > 65) {
    resultado.innerHTML = ' ${nome}, Não é obrigatório votar, você tem ${idade} anos ';
}else{
    resultado.innerHTML = ' ${nome}, Você é obrigado a votar ';
}

}





