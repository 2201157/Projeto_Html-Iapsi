'use strict'


$('#pesquisa').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('#btSearch').trigger('click');
  }
});   

$('#btSearch').on('click', function(){
	console.log('passou');
    
    location.href = "#nome_artista_api";
    var valorPesquisa = $('#pesquisa').val();
 $('.panel-title').text('Resultados da pesquisa para"'
 + valorPesquisa + '"')
   


    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country="+ valorPesquisa +"&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(country){
        

    	$.each(country, function(key, value){


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
    	
    	

    	/*
		$('#nome_do_pais').html(value.name);
		$('#top_10_musicas').html(value.bio.content);
		*/

        });

        
        

        
    })
})