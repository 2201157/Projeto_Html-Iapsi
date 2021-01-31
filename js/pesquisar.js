'use strict'


$('#btSearch').on('click', function(){//Inicio da função//

  var sumario
  var valorPesquisa = $('#pesquisa').val()

  $('.panel-title').text('Resultados da pesquisa para "'+ valorPesquisa + '"')    
  $('#resultado').show()
  $('#tabela').show()


  
  pesquisar_artista(valorPesquisa)
  add_tabela()
  pesquisa_musica(valorPesquisa)


})//Fim da função// 




$('#pesquisa').keypress(function (e) {//Inicio da função//

   var key = e.which

   if(key == 13){  //Se o user clicar na tecla "enter"

      $('#btSearch').trigger('click')

    }

});//Fim da função// 

function pesquisa_musica(valorPesquisa){//Inicio da função//

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



}//Fim da função// 

function pesquisar_artista(valorPesquisa){//Inicio da função//

 $.ajax({

      method: "GET",
      url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + valorPesquisa +"&api_key=cb5873017d844ca90043a3eae82f9055&lang=PT&format=json"

  }).done(function(artist){
         

      $.each(artist, function(key, value){

        var sumario
            
        sumario = value.bio.summary
        sumario = sumario.replace("Read more on Last.fm","")

        $('#Nome').html(value.name)
        $('#body').html(sumario)
        $('#image').html('<img src="' + value.image[3]["#text"] + '""/>')

      })
  
  })


}//Fim da função// 


function add_tabela(){

  var i

  for(i = 0; i <=4;i++){

    $('#tabela').append(`
      <tr  id="music-${i}">

        <td class="artista" class="alinhar"><div class="music-author"></div></td>

        <td><div class="music-title"></div></td>

        <td><button  type="button" class="add-music-button" onclick="add_to_playlist(this)" data-ref="music-${i}">Adicionar</button></td>

        <td><button button type="button" class="verDetalhes" onclick="ver_detalhes(this)" data-ref="music-${i}")>detalhes</button></td> 

      </tr>`)

  }

  


}
