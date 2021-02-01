'use strict'




    $(".link").on("click", function() {

        let country = $(this).data("ref");
        
        sessionStorage.setItem ("country",country);

    })//Quando o user clica em alguma das bandeiras, ele adiciona o data-ref dessa bandeira ao session storage






//Todo este codigo é executado quando nao esta na pagina do top 10 principal//
if(location.pathname.indexOf('top10musicas.html') >= 0){//Inicio da função//
    
    let pais_para_titulo = pais()//pais_para_titulo recebe o return de pais()//

    pais_para_titulo = pais_para_titulo.replace("+"," ")//pais_para_titulo recebe a sua string sem "+"//

    $('.titulo').text(pais_para_titulo)//apresenta pais_para_titulo na pagina//

    musicas_10()//chama a função musicas_10(//)

}//Fim da funçao//


var callback = function(img,i) {//Inicio de callback//

    img =  img.replace(/"/g, "")

    $('#img'+i).attr("src",img)
       
}//Fim de callback//


function pais(){//Inicio da função//

    var pais =  sessionStorage.country
            
    pais = pais.replace(/"/g, "")

    return pais

}//Fim da funçao//



function musicas_10(){//Inicio da função//


 $.ajax({

            method: "GET",
            url: "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country="+pais()+"&api_key=cb5873017d844ca90043a3eae82f9055&format=json"

        }).done(function(country){
        

            var i = 0
            var img 
            var img_2

            $.each(country, function(key, value){
      
                    for(i = 0; i <=9; i++){


                        $('#main').append(`

                            <div id="box${i}" class="divMusica">

                                <div class="todas">

                                    <img  id= "img${i}" src="">

                                </div>

                                <div class="divTexto">

                                    <h2>Nome da banda: <p class="info_top" id="banda${i}"></p></h2>

                                    <h2>Nome da música: <p class="info_top" id="musica${i}"></p></h2>

                                    <a class="referencia" id ="url${i}" href="" target="_blank" class="button">Ir para last.fm </a>

                                    <button  type="button" class="add-music-button" onclick="add_to_storage(this)" data-ref="${i}">Adicionar</button>

                            </div>

                        </div>`)


                        $('#banda'+i).html(value.track[i].artist.name)
                        $('#musica'+i).html(value.track[i].name)
                        $("#url"+i).attr("href", value.track[i].url)

                        img = JSON.stringify(value.track[i].name)
                        img_2 =  img.replace(/ /g, "+")
                        img = album_top(img_2,i)
                       
                    }
        
           })
    
    })

}//Fim da funçao//


function album_top(musica,i){//Inicio da função//

    var img_url

    $.ajax({

            method: "GET",
            url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album="+musica+"&api_key=cb5873017d844ca90043a3eae82f9055&format=json"

        }).then(function(url){

            $.each(url, function(key, value){

                img_url  = JSON.stringify(value.albummatches.album[0].image[3]['#text'])

                callback(img_url,i)
                   
            })



        })
}//Fim da funçao//
