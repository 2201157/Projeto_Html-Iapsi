'use strict'

var callback = function(img,i) {

    img =  img.replace(/"/g, "");
    console.log(img)
    //console.log(i)
     
    $('#img'+i).attr("src",img);
   //$('#img'+i).html('<img src="' + img + '""/>');
}



$(document).ready(function(){

    $.ajax({

        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=portugal&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(country){
        
        var i = 0
        var img ;
        var img_2;

    	$.each(country, function(key, value){

            
      
                for(i = 0; i <=9; i++){

                    

                    img = JSON.stringify(value.track[i].name)
                    img_2 =  img.replace(/ /g, "+");
                    img = album_top(img_2,i)
                   
                    

                    

                    
        
        }
    	
		
		
		

        });

        
        

        
    })

})

function album_top(musica,i){

   // console.log(musica)

    var img_url

$.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album="+musica+"&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).then(function(url){

        


        $.each(url, function(key, value){

            img_url  = JSON.stringify(value.albummatches.album[0].image[2]['#text'])

           
            callback(img_url,i)
               


        })



    })
}