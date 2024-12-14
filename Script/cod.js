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
        return; 
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
 btenviar.addEventListener('click',enviar);
 btenviar.style.backgroundColor= '#ff0000';

function alternarModoEscuro() {

    const body = document.body;
  
 
    body.classList.toggle('modo-escuro');
  
   
    const botao = document.getElementById('modo-escuro');
    if (body.classList.contains('modo-escuro')) {
      botao.innerText = 'Modo Claro';
    } else {
      botao.innerText = 'Modo Escuro';
    }
  }

  let currentIndex = 0;
const slides = document.querySelectorAll('.slide'); 
function showSlide(index) {
    
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    showSlide(currentIndex);
}


showSlide(currentIndex);

setInterval(nextSlide, 3000);


setInterval(nextSlide, 3000); 

showSlide(currentIndex);  
