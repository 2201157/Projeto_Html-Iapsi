$(".add-music-button").on("click", function () {

let musicRef = $(this).data("ref");


 let author = $(`#${musicRef} .music-author`).html()
 let title = $(`#${musicRef} .music-title`).html()
 

 
  sessionStorage.setItem ("author",author)
  sessionStorage.setItem ("title",title)
  
  location.href = "falling.html"
  console.log(location.pathname)

})

if (document.URL.includes("falling.html")){

	 var artista =  JSON.stringify(sessionStorage.author)
	 var nome = JSON.stringify(sessionStorage.title)
	 var junto
	 nome = nome.replace(/ /g, "+") 
	 nome = nome.replace(/"/g, "")
	 artista += " "
	 artista = artista.replace(/ /g, "+")
	 artista = artista.replace(/"/g, "")
	 junto = artista.concat(nome)

	 console.log(junto)
	art(junto)


	
	

	

}

function art(nome){
	

	$.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album="+nome+"&api_key=cb5873017d844ca90043a3eae82f9055&format=json"
    }).done(function(album){

        $.each(album, function(key, value){

        		console.log(value.albummatches.album[0].image[3]['#text'])
        		

 				$('#banda').html(value.albummatches.album[0].artist)
        		$('#musica').html(value.albummatches.album[0].name)
        		$('#f1').html('<img src="' + value.albummatches.album[0].image[3]['#text'] + '""/>')
            	$("#botao").attr("href", value.albummatches.album[0].url);
        		

             });



            });



}


