'use strict'

//Quando a pagina carregar, executa isto.//
$(document).ready(function(){

  var i = 2 //porque o inical é o slide 1, ja definido em css//

  timeout(i)//Chama a função timeout() que recebe como parametro i//

});



function timeout(i) {//Função que troca a foto de background do header//

  var limite = 10;//Máximo de fotos que existem para o header//

  setTimeout(function() {

     var imageUrl ="img/header/slide" + i + ".png"//vai receber o nome da foto//
    
      $('header').css('background-image', 'url(' + imageUrl + ')')//Coloca essa foto no header//

      i++//Incrementa o i//

      if(i==limite){//Se i for igual a limite(10) significa que já chegou à ultima foto//

        i = 1//i recebe o valor de 1//

      }

      timeout(i)//Função recursiva, significa que a função timeout se chama a ela mesma(criando um loop infinito neste caso)//

      }, 5000)//Este codigo será realizado a cada 5 segundos//

}