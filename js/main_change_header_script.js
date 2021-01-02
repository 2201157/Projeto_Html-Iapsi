'use strict';

function timeout_1(i) {

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
	
function timeout(i) {


   		var limite = 10;
   		 //console.log("DEBUG: o valor do i é " + i);

    
    	setTimeout(function() {


        	var imageUrl ="img/header/slide" + i + ".png";

        	//console.log("\n " + imageUrl);

        	$('header').css('background-image', 'url(' + imageUrl + ')');

        	i++;

        	if(i==limite){

            	i = 1;

            	}

       	 timeout(i);

        	}, 5000);
}
	
	

$(window).resize(function() {

	var i = 2; //porque o inical é o slide 1, ja definido em css
console.log($(this).width());
  			
  			if ($(this).width() <= 1000) {
  				
  			    
  			    timeout_1(i);
  			    
  			}else {

 			timeout(i);
  			}
	
});



	


	
