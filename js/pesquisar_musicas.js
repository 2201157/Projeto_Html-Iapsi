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
       
        var i = 0

        $.each(music, function(key, value){
    

            for ( i = 0; i <=4;i++ ){

          $('#music-'+i+' .music-author').html(value.trackmatches.track[i].artist);
          $('#music-'+i+' .music-title').html(value.trackmatches.track[i].name);
        
          
          }

        });

        
    
    })
});