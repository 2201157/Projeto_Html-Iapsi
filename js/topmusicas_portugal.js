'use strict'

$(document).ready(function(){

    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=portugal&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(country){
        

    	$.each(country, function(key, value){

       /*
    	console.log(value.track[0].name + value.track[0].artist.name)
    	console.log(value.track[0].image[1]['#text'])
    	console.log(value.track[1].name + value.track[1].artist.name)
    	console.log(value.track[1].image[1]['#text'])
    	console.log(value.track[2].name + value.track[2].artist.name)
    	console.log(value.track[2].image[1]['#text'])
    	console.log(value.track[3].name + value.track[3].artist.name)
    	console.log(value.track[3].image[1]['#text'])
    	console.log(value.track[4].name + value.track[4].artist.name)
    	console.log(value.track[4].image[1]['#text'])
    	console.log(value.track[5].name + value.track[5].artist.name)
    	console.log(value.track[5].image[1]['#text'])
    	console.log(value.track[6].name + value.track[6].artist.name)
    	console.log(value.track[6].image[1]['#text'])
    	console.log(value.track[7].name + value.track[7].artist.name)
    	console.log(value.track[7].image[1]['#text'])
    	console.log(value.track[8].name + value.track[8].artist.name)
    	console.log(value.track[8].image[1]['#text'])
    	console.log(value.track[9].name + value.track[9].artist.name)
    	console.log(value.track[9].image[1]['#text'])
    	
    	*/

    	
		$('#img1').html('<img src="' + value.track[0].image[1]['#text'] + '""/>');
        $('#img2').html('<img src="' + value.track[1].image[1]['#text'] + '""/>');
        $('#img3').html('<img src="' + value.track[2].image[1]['#text'] + '""/>');
        $('#img4').html('<img src="' + value.track[3].image[1]['#text'] + '""/>');
        $('#img5').html('<img src="' + value.track[4].image[1]['#text'] + '""/>');
        $('#img6').html('<img src="' + value.track[5].image[1]['#text'] + '""/>');
        $('#img7').html('<img src="' + value.track[6].image[1]['#text'] + '""/>');
        $('#img8').html('<img src="' + value.track[7].image[1]['#text'] + '""/>');
        $('#img9').html('<img src="' + value.track[8].image[1]['#text'] + '""/>');
        $('#img10').html('<img src="' + value.track[9].image[1]['#text'] + '""/>');
		
		

        });

        
        

        
    })

})