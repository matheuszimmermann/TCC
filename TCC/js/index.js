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
  // FIM CALCULADORA
  
  
  //ROTACAO DO ICONE DAS REFERENCIAS
    $(document).ready(function(){
      $('#collapse100').on('shown.bs.collapse', function(){
        $('#iconRotate').addClass('rotate'); 
      });
      $('#collapse100').on('hidden.bs.collapse', function(){
        $('#iconRotate').removeClass('rotate'); 
      });
    });
  
  
  
  // SPINNER PARA CARREGAR A PAGINA
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var spinnerContainer = document.querySelector(".spinner-container");
      if (spinnerContainer) {
        spinnerContainer.style.display = "none";
      }
    }, 800);
  });
  