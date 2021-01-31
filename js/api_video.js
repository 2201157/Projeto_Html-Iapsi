if(document.URL !=  document.URL.includes("main.html")){ //Se a pagina atual não incluir "main.html" no url, então irá fazer o codigo seguinte//

  $(document).ready(() => { //Quando a pagina carregar, irá executar o codigo seguinte//

      let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCA2DQJdUqgxratzjaERh34aYH6G9guQWY&q='+musica();
      
      $.ajax({
        url: url,
        method: 'GET',//É usado o metodo GET para fazer request do video//
        success: (value) => {//Se tiver sucesso na recolha de informação então fará o seguinte codigo//

          $('.video-play').text('')
          $('.video-play').append(`<iframe class="embed-responsive-item" src=https://www.youtube.com/embed/${value.items[0].id.videoId} allowFullScreen title='youtube player' />`)
          
        },
        error: (err, response) => {//Se não tiver sucesso, fará o seguinte código//
          console.log(err.responseText)
          $('.video-play').text(err.responseText)
        }
      })
    });



  function musica(){//Função para ir buscar os valores enviados para a sessionStorage//


    var artista =(sessionStorage.author) //Artista vai receber a string de "author"//
    var nome =(sessionStorage.title)//nome vai receber a string de "title"//
    var junto//Cria uma var com o nome de "junto"

    nome = nome.replace(/"/g, "")//Nome recebe a string que ele mesmo contém, só que sem aspas(caso as possua)//
    artista += " "//artista recebe a string que ele possui mais um "espaço" no fim//
    artista = artista.replace(/"/g, "")//artista recebe a string que ele mesmo contém, só que sem aspas(caso as possua)//
    junto = artista.concat(nome)//junto recebe artista + nome formando uma string unica//
    

     return junto//devolve junto//
  }

}//Termina o codigo realizado dentro de paginas que não incluam "main.html" em sua url//



$(".detalhes").on("click", function() {//Quando o user clica em algo com a classe "detalhes" irá desencadear o seguinte codigo//

  let musicRef = $(this).data("ref")//"musicRef" recebe o valor do "data-ref" existente no botão clicado(sendo este o valor deste "data-ref" de 1 a 10)//
  let author = $(`#f${musicRef}_inner`).html()//"author" recebe o conteudo dentro do id "f_inner baseado no data-ref"//
  let title = $(`#f${musicRef}_inner_p`).html()//"title" recebe o conteudo dentro do id "f_inner_p baseado no data-ref"//
 
 
  sessionStorage.setItem ("author",author)//Cria um objeto chamado de "author" com o conteudo de "let author", no sessionStorage//
  sessionStorage.setItem ("title",title)//Cria um objeto chamado de "title" com o conteudo de "let title", no sessionStorage//

  })