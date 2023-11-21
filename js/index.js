// CALCULADORA
function calcular() {
  var peso = parseFloat(document.getElementById('peso').value);
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = "";

  var resultadoParagrafo = document.createElement('p');

  if (isNaN(peso)) {
    resultadoParagrafo.innerHTML = "Por favor, preencha os campos acima!!!"; // SE A ENTRADA FOR NULA IMPRIME A MENSAGEM
    resultadoParagrafo.style.color = "red";

  } else {
    var doseCreatina = peso * 0.07;
    doseCreatina = Math.round(doseCreatina); //ARREDONDA PARA O VALOR MAIS PROXIMO

    resultadoParagrafo.innerHTML = "A dosagem correta para você é " + doseCreatina + " gramas";

    var sucessoParagrafo = document.createElement('p');
    sucessoParagrafo.innerHTML = "Cálculo realizado com sucesso!";
    sucessoParagrafo.classList.add('sucesso');
    resultadoElement.appendChild(sucessoParagrafo);
  }

  resultadoElement.appendChild(resultadoParagrafo);
}

 //botao de limpar
function limpar() {
  document.getElementById('peso').value = "";
  document.getElementById('resultado').innerHTML = "";
}
//FIM CALCULADORA


//ROTACAO DO ICONE DAS REFERENCIAS
$(document).ready(function () {
  $('#collapse100').on('shown.bs.collapse', function () {
    $('#iconRotate').addClass('rotate');
  });
  $('#collapse100').on('hidden.bs.collapse', function () {
    $('#iconRotate').removeClass('rotate');
  });
});


//BOTAO BACK TO TOP PARA VOLTAR NO INICIO
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });

  backToTopButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



// SPINNER PARA CARREGAR A PAGINA
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var spinnerContainer = document.querySelector(".spinner-container");
    if (spinnerContainer) {
      spinnerContainer.style.display = "none";
    }
  }, 800);
});


// EFEITOS DO SITE
$(document).ready(function () {
  $('.slide-in-sides').addClass('active');
});

$(document).ready(function () {
  $('.fade-in-top').addClass('active');
});




