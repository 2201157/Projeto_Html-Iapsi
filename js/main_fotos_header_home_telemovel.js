'use strict'



//Quando a pagina carregar, executa isto.
 $(document).ready(function(){
   var i = 2; //porque o inical é o slide 1, ja definido em css
    timeout(i);
});

  function timeout(i) {
   var limite = 4;
    //console.log("DEBUG: o valor do i é " + i);
    
      setTimeout(function() {
             var imageUrl ="img/headerTelemovel/capa" + i + ".png";
            //console.log("\n " + imageUrl);
            $('header').css('background-image', 'url(' + imageUrl + ')');

            i++;
            if(i==limite){
              i = 1;
            }
            timeout(i);
        }, 5000);

}