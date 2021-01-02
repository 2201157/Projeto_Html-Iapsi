'use strict'



$('#pesquisa').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('#btSearch').trigger('click');
  }
});   

$('#btSearch').on('click', function(){

    
    location.href = "#nome_artista_api";
    var valorPesquisa = $('#pesquisa').val();
 $('.panel-title').text('Resultados da pesquisa para"'
 + valorPesquisa + '"')
    

    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + valorPesquisa +"&api_key=cb5873017d844ca90043a3eae82f9055&limit=5&format=json"
    }).done(function(music){
       

        $.each(music, function(key, value){
    
    /*
          console.log(value.trackmatches.track[0].name + value.trackmatches.track[0].artist)
          console.log(value.trackmatches.track[1].name + value.trackmatches.track[1].artist)
          console.log(value.trackmatches.track[2].name + value.trackmatches.track[2].artist)
          console.log(value.trackmatches.track[3].name + value.trackmatches.track[3].artist)
          console.log(value.trackmatches.track[4].name + value.trackmatches.track[4].artist)

*/
          $('#artista1').html(value.trackmatches.track[0].artist);
          $('#musica1').html(value.trackmatches.track[0].name);
          $('#artista2').html(value.trackmatches.track[1].artist);
          $('#musica2').html(value.trackmatches.track[1].name);
          $('#artista3').html(value.trackmatches.track[2].artist);
          $('#musica3').html(value.trackmatches.track[2].name);
          $('#artista4').html(value.trackmatches.track[3].artist);
          $('#musica4').html(value.trackmatches.track[3].name);
          $('#artista5').html(value.trackmatches.track[4].artist);
          $('#musica5').html(value.trackmatches.track[4].name);
          

        });

        
    
    })
});