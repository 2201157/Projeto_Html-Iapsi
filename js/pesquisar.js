

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
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + valorPesquisa +"&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(artist){
        //console.log('artist');
        //console.log(artist);

        $.each(artist, function(key, value){
          //$("div").append(field + " ");
          /*console.log("KEY : " + key)
          console.log("VALUE : " + value.mbid)
          console.log("IMAGEM : ")
          console.log(value.image[0]["#text"])
          console.log("LINK ")
          console.log(value.bio.links.link.href)*/
          console.log(value)
$('#nome_artista_api').html(value.name);
$('#bio_artista_api').html(value.bio.content);
$('#imagens_artista_api').html('<img src="' + value.image[3]["#text"] + '""/>');

        });

        
    
    })
});