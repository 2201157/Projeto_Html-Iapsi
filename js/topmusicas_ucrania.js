$(document).ready(function(){

    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=Ukraine&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(country){
        
        var i = 0

        $.each(country, function(key, value){

      
         for(i = 0; i <=9; i++){

        
        $('#img'+i).html('<img src="' + value.track[i].image[1]['#text'] + '""/>');
        
        }
        

        });

        
        

        
    })

})