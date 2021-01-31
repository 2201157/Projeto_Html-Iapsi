function ver_detalhes(obj){//inicio da funcao//

  let musicRef = $(obj).data("ref")//"musicRef" recebe o valor do "data-ref" existente no botão clicado//
  let author = $(`#${musicRef} .music-author`).html()//"author" recebe o conteudo dentro do id "f_inner baseado no data-ref"//
  let title = $(`#${musicRef} .music-title`).html()//"title" recebe o conteudo dentro do id "f_inner_p baseado no data-ref"//
    
  sessionStorage.setItem ("author",author)//Cria um objeto chamado de "author" com o conteudo de "let author", no sessionStorage//
  sessionStorage.setItem ("title",title)//Cria um objeto chamado de "title" com o conteudo de "let title", no sessionStorage//
    
  location.href = "detalhesPesquisa.html"//Redireciona o user para a pagina "detalhesPesquisa.html"
    

}//Fim da função


$(".detalhes").on("click", function() {//Se o utlizador clicar em algo com a class "detalhes", faz este código//

  let musicRef = $(this).data("ref")//"musicRef" recebe o valor do "data-ref" existente no botão clicado//
  let author = $(`#f${musicRef}_inner`).html()//"author" recebe o conteudo dentro do id "f_inner baseado no data-ref"//
  let title = $(`#f${musicRef}_inner_p`).html()//"title" recebe o conteudo dentro do id "f_inner_p baseado no data-ref"//
   
  sessionStorage.setItem ("author",author)//Cria um objeto chamado de "author" com o conteudo de "let author", no sessionStorage//
  sessionStorage.setItem ("title",title)//Cria um objeto chamado de "title" com o conteudo de "let title", no sessionStorage//


})//Fim da função




if (document.URL.includes("detalhesPesquisa.html")){//Se o url atual conter "detalhesPesquisa.html" faz este codigo//

	var artista = (sessionStorage.author)//artista recebe o valor de author vindo da storage//
	var nome = (sessionStorage.title)//nome recebe o valor de title vindo da storage//

	nome = nome.replace(/ /g, "+")//nome recebe nome com "+" no lugar de espaços//
	nome = nome.replace(/"/g, "")//nome recebe nome sem aspas//

	artista = artista.replace(/ /g, "+")//artista recebe artista com "+" no lugar de espaços//
	artista = artista.replace(/"/g, "")//artista recebe artista sem aspas//

  console.log("AVISO : Poderá não mostrar a informação de certas musicas, pois algumas delas não possuem tags ou sumario, então a api não consegue devolver algo que não existe, daí retornar um erro")
	
	art(artista,nome)//chama a função "art" que recebe como parametros,artista e nome//
  alb(artista,nome)//chama a função "alb" que recebe como parametros,artista e nome//

	
	

}//Fim do "If"//






function art(artista,nome){//Inicio da função//
  

  $.ajax({

        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=cb5873017d844ca90043a3eae82f9055&artist="+artista+"&track="+nome+"&autocorrect=1&format=json"

    }).done(function(album){

        $.each(album, function(key, value){

          var i = 0
          var sumario
                      
          $('#banda').html(value.artist.name)
          $('#musica').html(value.name)
          $("#duração").html(value.duration/100000)

          for(i = 0; i <=3;i++){

            $(".h2_tags").append(`<h5 class="h5_main"><div id= tag-${i}></h5> </h2>`)
            $("#tag-"+i).html(value.toptags.tag[i].name)
               


          }

          sumario = value.wiki.summary
          sumario = sumario.replace("Read more on Last.fm","")

          $("#sumario").html(sumario)
              

        });



    });



}//Fim da função//


function alb(banda,nome){//Inicio da função//

  $.ajax({
            method: "GET",
            url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=cb5873017d844ca90043a3eae82f9055&artist="+banda+"&album="+nome+"&format=json"

        }).done(function(album){

            $.each(album, function(key, value){

                $('#f1').html('<img src="' + value.image[3]['#text'] + '""/>')
                $("#botao").attr("href", value.url)
             
           });   

        })

}//Fim da função//







