'use strict'


$('#pesquisa').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('#btSearch').trigger('click');
  }
});   



$('#btSearch').on('click', function(){

    var valorPesquisa = $('#pesquisa').val();
 $('.panel-title').text('Resultados da pesquisa para "'
 + valorPesquisa + '"')
    
$('#resultado').show()
$('#tabela').show()

    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + valorPesquisa +"&api_key=cb5873017d844ca90043a3eae82f9055&lang=PT&format=json"
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
          console.log(value.bio.links.link.href)
          console.log(value)*/


$('#Nome').html(value.name);
$('#body').html(value.bio.summary);
$('#image').html('<img src="' + value.image[3]["#text"] + '""/>');

        });

        
    
    })
});
