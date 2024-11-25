function enviar()
{
    console.log("Entrou na função enviar.");
    let n = document.getElementById('nome').value;
    let e = document.getElementById('email').value;
    let i = document.getElementById('idade').value;

    if (!n || !e || !i) {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    if (!document.getElementById("check").checked) {
        alert("Você precisa aceitar os termos e condições para continuar.");
        return; // Impede o envio se o checkbox não for marcado
    }

    let resultado = `Nome: ${n}<br>E-mail: ${e}<br>Idade: ${i}`;
    console.log(resultado);
    document.getElementById('lista').innerHTML=resultado;

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('idade').value = "";
    
    console.log(n,e,i);

}
let btenviar= document.querySelector('#enviar');
btenviar.addEventListener('click', enviar);
btenviar.style.backgroundColor= '#ff0000';

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    showSlide(currentIndex);
}

// Rotação automática a cada 5 segundos
setInterval(nextSlide, 5000);
