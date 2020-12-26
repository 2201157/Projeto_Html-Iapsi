

'use strict'

var cloneMedia = $('.media').clone();



$('#btSearch').on('click', function(){
	console.log('passou');
    var valorPesquisa = $('#pesquisa').val();
 $('.panel-title').text('Resultados da pesquisa para"'
 + valorPesquisa + '"')
    $('.media-list').html('');

    $.ajax({
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + valorPesquisa +"&api_key=cb5873017d844ca90043a3eae82f9055&r=json"
    }).done(function(artist){
        console.log('artist');
        console.log(artist);

        artist.Search.function(artist)
            console.log
            var liMedia = cloneMedia.clone();
            $('#image', liMedia).attr("src", artist.getImages);
            $('.title', liMedia).text(artist.getInfo);
            //$('.ano', liMedia).text(result.published);
            //$('.tipo', liMedia).text(result.summary);

            $('.media-list').append(liMedia);

        
    })
});